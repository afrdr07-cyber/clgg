import urllib.request
import os

os.makedirs('public/images/logo', exist_ok=True)

logos_to_download = {
    'logo_seal_round.png': 'https://psvcet.ac.in/wp-content/uploads/2024/02/Logo-web-1024x1024.png',
    'logo_seal_web.png': 'https://psvcet.ac.in/wp-content/uploads/2024/02/Logo-web.png',
    'logo_main_l.png': 'https://psvcet.ac.in/wp-content/uploads/2024/02/logo-main-l.png',
    'logo_main_w.png': 'https://psvcet.ac.in/wp-content/uploads/2024/02/logo-main-w-png-1.png',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in logos_to_download.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            target = os.path.join('public/images/logo', fname)
            with open(target, 'wb') as f:
                f.write(data)
            print(f"Downloaded {fname} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed {fname}: {e}")
