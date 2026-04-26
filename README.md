# Mir Mahadi Abbas, portfolio

Static site. No build step. Drag the files into a GitHub repo and turn on Pages.

## Files

- `index.html` — the page itself, all content lives here
- `styles.css` — single stylesheet, all design tokens at the top
- `script.js` — small script for scroll reveal, top bar border, and active nav state
- `headshot.webp` and `headshot.jpg` — the about-section photo, optimised, served via `<picture>` with WebP first and JPEG fallback

## Deploy to GitHub Pages

1. Create a new public repo. If you want the site at `yourusername.github.io`, name the repo exactly that. If you want it at `yourusername.github.io/portfolio` or similar, name the repo whatever you like.
2. Drop these files into the root of the repo and commit.
3. Repo Settings, Pages, set Source to `main` branch and `/ (root)` folder, save.
4. Wait a minute, then visit the URL GitHub gives you.

## Deploy to Vercel

1. Vercel, New Project, import the repo. Framework preset: Other. No build command, output directory blank.
2. Deploy.

## Editing later

All copy is plain HTML in `index.html`, edit it directly. Section structure is commented.

All colour, type, and spacing tokens live at the top of `styles.css` under `:root`. Change the accent colour in one place and it flows through the whole site.

To swap the photo, replace `headshot.webp` and `headshot.jpg` with the same filenames. The display size is set in CSS (`.about__photo img { width: 160px }`), so the source can be larger.

## A few opinionated notes

- The intro headline is the most important sentence on the page. If you change it, keep it specific and slightly understated. Avoid "passionate," "leveraging," "synergies."
- The work section uses paragraphs, not bullets, on purpose. If you find yourself wanting to bullet-ify, think about whether the paragraph is doing too many things.
- The accent green is used sparingly by design. Adding it to more places weakens it.

## Domain later

When you do buy a domain, point it at GitHub Pages or Vercel using their docs, then update the `og:image` and any absolute URLs in the `<head>` of `index.html`.
