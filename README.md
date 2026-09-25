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
│   │   └── script.js     # Mobile nav, footer year, project count, scroll-reveal
│   └── favicon.svg
└── README.md
```

Content lives in `index.html` as a set of `<section>` blocks (About, Experience,
Education, Skills, Projects, Live Demos, Awards, Contact). Adding a new project, role, or
award means editing the markup in the matching section. There is no build
step, and the hero's project count updates itself from the cards.

## Local development

This is a static site with no dependencies or build step. To preview locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Deployment

The site is published automatically by GitHub Pages from this repository's
default branch, so pushing to it deploys the change.
