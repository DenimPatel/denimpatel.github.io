# denimpatel.github.io

Source for my personal portfolio site, served via GitHub Pages:

**https://denimpatel.github.io**

## Structure

```
.
├── index.html            # Page markup and content
├── assets/
│   ├── css/
│   │   └── style.css     # All site styling
│   ├── js/
│   │   └── script.js     # Mobile nav, footer year, scroll-reveal animation
│   └── images/           # Images used on the site (add new assets here)
└── README.md
```

Content lives in `index.html` as a set of `<section>` blocks (About, Experience,
Education, Skills, Projects, Awards, Contact). Adding a new project, role, or
award means editing the markup in the matching section — no build step
required.

## Local development

This is a static site with no dependencies or build step. To preview locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Deployment

The site is published automatically by GitHub Pages from this repository's
default branch — pushing to it deploys the change.
