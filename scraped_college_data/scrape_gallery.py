import urllib.request
import ssl
import re
import os
import json
from urllib.parse import urljoin

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

target_urls = [
    ('https://psvcet.ac.in/elementor-10746/', 'gallery_main'),
    ('https://psvcet.ac.in/gallery/', 'gallery_page'),
    ('https://psvcet.ac.in/sports/', 'sports'),
    ('https://psvcet.ac.in/national-cadet-corps/', 'ncc'),
    ('https://psvcet.ac.in/nss-national-service-scheme/', 'nss'),
    ('https://psvcet.ac.in/yrc-youth-red-cross/', 'yrc'),
    ('https://psvcet.ac.in/courses-offered/', 'courses'),
    ('https://psvcet.ac.in/placement-records/', 'placements')
]

found_images = []
seen_urls = set()

for url, cat in target_urls:
    try:
        print(f"Scraping: {url}")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, context=ctx, timeout=15).read().decode('utf-8', errors='ignore')
        
        # Find all img src, data-src, href to image files
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        data_imgs = re.findall(r'<img[^>]+data-src=["\']([^"\']+)["\']', html)
        anchor_imgs = re.findall(r'<a[^>]+href=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']', html, re.I)
        
        all_matches = imgs + data_imgs + anchor_imgs
        
        for img_url in all_matches:
            full_url = urljoin(url, img_url)
            # Filter out tiny icons, logos, headers
            if any(skip in full_url.lower() for skip in ['logo', 'r-head', 'icon', 'arrow', 'svg', 'wp-includes']):
                continue
            if full_url not in seen_urls:
                seen_urls.add(full_url)
                found_images.append({
                    'source_page': url,
                    'category_hint': cat,
                    'url': full_url
                })
        print(f"  Found {len(all_matches)} raw matches on {cat}")
    except Exception as e:
        print(f"Error scraping {url}: {e}")

print(f"\nTotal unique candidate images found: {len(found_images)}")

with open('scraped_college_data/gallery_extracted_urls.json', 'w', encoding='utf-8') as f:
    json.dump(found_images, f, indent=2)

print("Saved candidate list to scraped_college_data/gallery_extracted_urls.json")
