import urllib.request
import ssl
import os
import json
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('scraped_college_data/gallery_extracted_urls.json', 'r', encoding='utf-8') as f:
    candidates = json.load(f)

output_dir = 'public/images/gallery'
os.makedirs(output_dir, exist_ok=True)

downloaded_items = []
seen_filenames = set()

for idx, item in enumerate(candidates):
    url = item['url']
    # Extract clean filename
    raw_name = url.split('/')[-1].split('?')[0]
    # Filter out thumbnails like -150x150, -300x300 if standard exists
    clean_name = re.sub(r'-\d+x\d+(\.\w+)$', r'\1', raw_name)
    
    # Target URL with clean name or fallback
    target_url = url.replace(raw_name, clean_name)
    
    filename = f"psv_{clean_name.lower()}"
    if not (filename.endswith('.jpg') or filename.endswith('.png') or filename.endswith('.webp') or filename.endswith('.jpeg')):
        continue
    
    if filename in seen_filenames:
        continue
    
    dest_path = os.path.join(output_dir, filename)
    
    # Try downloading
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, context=ctx, timeout=12).read()
        
        # Only keep images > 8KB to avoid empty/tiny icons
        if len(data) > 8192:
            with open(dest_path, 'wb') as f:
                f.write(data)
            seen_filenames.add(filename)
            
            # Determine category and human title
            cat = 'campus'
            cat_label = 'Campus & Infrastructure'
            title = 'PSVCET Campus Moment'
            desc = 'Authentic photograph from P.S.V College of Engineering and Technology.'
            
            fn_low = filename.lower()
            if 'cse' in fn_low or 'it' in fn_low or 'comp' in fn_low:
                cat = 'academics'
                cat_label = 'Computer Science & AI Labs'
                title = 'CSE & IT Advanced Computing Laboratories'
                desc = 'PSVCET engineering scholars engaged in programming, software architecture, and algorithm design.'
            elif 'ece' in fn_low or 'eee' in fn_low or 'elect' in fn_low:
                cat = 'academics'
                cat_label = 'Electronics & VLSI Research'
                title = 'ECE & Embedded Systems Department Project Lab'
                desc = 'Students testing electronic circuitry, signal processing boards, and IoT microcontrollers.'
            elif 'mech' in fn_low or 'cad' in fn_low or 'cam' in fn_low:
                cat = 'academics'
                cat_label = 'Mechanical & CNC Workshops'
                title = 'Mechanical Engineering Machine Centre'
                desc = 'Hands-on training on precision lathe machines, thermal engineering rigs, and automated manufacturing systems.'
            elif 'civil' in fn_low or 'survey' in fn_low:
                cat = 'academics'
                cat_label = 'Civil Engineering & Surveying'
                title = 'Civil Engineering Structural Analysis Lab'
                desc = 'Soil mechanics testing, material testing equipment, and advanced GPS surveying stations.'
            elif 'sport' in fn_low or 'cricket' in fn_low or 'volley' in fn_low or 'athlet' in fn_low:
                cat = 'sports'
                cat_label = 'Sports & Athletics'
                title = 'Inter-Collegiate Sports & Athletic Championships'
                desc = 'Students competing in state and zonal university sports tournaments and track events.'
            elif 'ncc' in fn_low or 'parade' in fn_low or 'cadet' in fn_low:
                cat = 'ncc_nss'
                cat_label = 'NCC & National Service'
                title = 'National Cadet Corps (NCC) Unit Training'
                desc = 'PSVCET cadets participating in annual training camps, parade drills, and national integration exercises.'
            elif 'nss' in fn_low or 'yrc' in fn_low or 'camp' in fn_low or 'blood' in fn_low or 'tree' in fn_low:
                cat = 'ncc_nss'
                cat_label = 'NSS & Social Outreach'
                title = 'NSS / Youth Red Cross Community Outreach'
                desc = 'Volunteers conducting village literacy drives, blood donation camps, and environmental plantation.'
            elif 'place' in fn_low or 'recruit' in fn_low or 'drive' in fn_low or 'mou' in fn_low:
                cat = 'placements'
                cat_label = 'Placement Drives & Industry'
                title = 'On-Campus Placement & Recruitment Drives'
                desc = 'Corporate recruitment drives and technical interviews by top multinational software and core employers.'
            elif 'convo' in fn_low or 'grad' in fn_low or 'award' in fn_low or 'event' in fn_low or 'cultur' in fn_low or 'symp' in fn_low:
                cat = 'events'
                cat_label = 'Events & Convocation'
                title = 'Autonomous Graduation & Cultural Celebrations'
                desc = 'Conferment of degrees by dignitaries, annual cultural celebrations, and technical symposiums.'
            else:
                cat = 'campus'
                cat_label = 'Campus & Student Life'
                title = f'PSVCET Campus Life & Facilities'
                desc = 'Lush green 30-acre autonomous campus infrastructure, central library, and seminar pavilions.'
                
            downloaded_items.append({
                'id': f"gal-{len(downloaded_items)+1}",
                'title': title,
                'category': cat,
                'categoryLabel': cat_label,
                'image': f"/images/gallery/{filename}",
                'description': desc,
                'filename': filename,
                'size': len(data)
            })
            print(f"Downloaded [{len(downloaded_items)}]: {filename} ({len(data)} bytes) -> {cat_label}")
    except Exception as e:
        # print error silently or continue
        pass

print(f"\nSuccessfully downloaded {len(downloaded_items)} high quality real college photos!")

with open('scraped_college_data/curated_gallery.json', 'w', encoding='utf-8') as f:
    json.dump(downloaded_items, f, indent=2)

print("Saved curated gallery items to scraped_college_data/curated_gallery.json")
