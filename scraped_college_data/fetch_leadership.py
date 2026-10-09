import urllib.request
import ssl
import re
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = {
    'chairman': 'https://psvcet.ac.in/chairman/',
    'secretary': 'https://psvcet.ac.in/secretary/',
    'principal': 'https://psvcet.ac.in/principal/'
}

results = {}

for role, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, context=ctx, timeout=15).read().decode('utf-8', errors='ignore')
        
        # Extract images
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        
        # Clean text
        body_match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL) or re.search(r'<article[^>]*>(.*?)</article>', html, re.DOTALL) or re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
        content_html = body_match.group(1) if body_match else html
        
        text = re.sub(r'<script[^>]*>.*?</script>', '', content_html, flags=re.DOTALL)
        text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', ' ', text)
        clean_text = ' '.join(text.split())
        
        results[role] = {
            'url': url,
            'images': imgs,
            'text': clean_text,
            'html_snippet': content_html[:2000]
        }
        print(f"Successfully fetched {role}: {len(imgs)} images found")
    except Exception as e:
        print(f"Error fetching {role}: {e}")

with open('scraped_college_data/leadership_scraped.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Saved to scraped_college_data/leadership_scraped.json")
