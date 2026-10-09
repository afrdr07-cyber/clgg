# PSV College homepage asset pack

Source: https://psvcet.ac.in/ — retrieved 7 October 2026.

## Contents
- content/homepage-text.txt: all homepage wording, including hidden/mobile duplicates.
- content/sections.json: grouped widget text, headings and links.
- content/navigation.json: dropdown menu hierarchy.
- content/all-links.json: homepage links, including announcements, contacts and social accounts.
- content/counters.json: original counter markup/settings; do not assume displayed zero is a confirmed statistic.
- content/assets-manifest.json: image source URLs, local paths and download status.
- assets/: logos, photographs, background images and responsive variants.
- source/: original homepage HTML and relevant page CSS.

## React usage
Copy assets/ into public/psvcet/. Import JSON content into src/data/. A manifest local_path such as assets/images/example.jpg then maps to /psvcet/images/example.jpg.

The pack preserves original wording, typos, duplicated responsive content, older announcements and stated statistics. It does not confirm that those claims are up to date. Navigation targets are included; their separate page contents are outside this homepage pack.

Open image-index.html to browse all 105 downloaded assets. content/courses.json contains 13 structured course records. content/footer.txt contains the footer wording. All 62 unique primary image URLs in the homepage HTML were downloaded, along with responsive variants and background/icon assets.
