import os
import re
import json

source_file = r"C:\Users\slog1\.gemini\antigravity-ide\brain\0d647396-2d33-463b-ac07-27076ec19cb3\.system_generated\steps\32\content.md"
output_dir = r"t:\clg-main\clg-main\scraped_college_data"
os.makedirs(output_dir, exist_ok=True)

with open(source_file, "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

# 1. Extract Images
img_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\'](?:[^>]+alt=["\']([^"\']*)["\'])?', re.IGNORECASE)
images = []
for match in img_pattern.finditer(html):
    src = match.group(1)
    alt = match.group(2) or ""
    if src not in [i["src"] for i in images]:
        images.append({"src": src, "alt": alt})

# 2. Extract PDF Documents
pdf_pattern = re.compile(r'href=["\']([^"\']+\.pdf)["\']', re.IGNORECASE)
pdfs = list(set(pdf_pattern.findall(html)))

# 3. Extract Links
link_pattern = re.compile(r'<a[^>]+href=["\'](https?://[^"\']+)["\'][^>]*>(.*?)</a>', re.IGNORECASE | re.DOTALL)
links = []
for match in link_pattern.finditer(html):
    url = match.group(1)
    text = re.sub(r'<[^>]+>', '', match.group(2)).strip()
    if text and url not in [l["url"] for l in links]:
        links.append({"url": url, "text": text})

# 4. Announcements
announcements = []
ticker_matches = re.findall(r'<div class="wpr-ticker-title-inner">\s*<a href="([^"]+)">([^<]+)</a>', html)
for url, title in ticker_matches:
    announcements.append({"title": title.strip(), "url": url.strip()})

# 5. Recruiters
recruiter_images = []
rec_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\'][^>]+alt=["\']([^"\']+)["\']', re.IGNORECASE)
for src, alt in rec_pattern.findall(html):
    if "placments" in src or "ascent" in src or "HEXAWARE" in alt or "MOVATE" in alt or "SYRMA" in alt:
        recruiter_images.append({"name": alt, "logo": src})

# Structured Result
extracted_data = {
    "institution": {
        "name": "P.S.V College of Engineering and Technology",
        "status": "Autonomous Institution",
        "affiliation": "Affiliated to Anna University, Chennai",
        "approval": "Approved by AICTE, New Delhi",
        "accreditation": "Accredited by NAAC with 'A' Grade | NBA (CSE)",
        "address": "Mittapalli, Balinayanapalli (PO), Elathagiri (SO), Krishnagiri District, Tamil Nadu, India - 635 108",
        "contacts": {
            "principal": ["8838428106", "9444273966"],
            "admissions": ["8838428106", "9444273966", "6369342733"],
            "office": "+91 094444 94360",
            "emails": ["selvam.psv@gmail.com", "principal@psvcet.ac.in"]
        }
    },
    "statistics": {
        "placement_percentage": "85%",
        "years_of_excellence": "22 Years",
        "placement_offers": "453+",
        "students": "1500+",
        "library_volumes": "29000+",
        "dedicated_faculty": "130+",
        "successful_alumni": "3500+"
    },
    "announcements": announcements,
    "pdf_documents": pdfs,
    "total_images_extracted": len(images),
    "images": images,
    "all_key_links": links
}

json_path = os.path.join(output_dir, "psvcet_extracted_data.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(extracted_data, f, indent=2)

print(f"Successfully extracted {len(images)} images, {len(pdfs)} PDFs, {len(announcements)} announcements.")
