import urllib.request
import re
import os

url = 'https://psvcet.ac.in/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)

try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
    img_tags = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
    print("Found images:", len(img_tags))
    for src in img_tags:
        if any(k in src.lower() for k in ['logo', 'seal', 'brand', 'header', 'psv', 'banner', 'trust', 'st-joan']):
            print("Candidate:", src)
except Exception as e:
    print("Error:", e)
