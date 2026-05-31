# Your portfolio website — setup & go-live guide

This folder contains your complete website:

```
index.html        <- the page
style.css         <- all styling
script.js         <- nav, scroll animations, lightbox
images/           <- all photos, logos, certificates
```

There is ONE file you must add yourself: **headshot.jpg** (see Step 2).

---

## What you're doing

Your site lives in a GitHub repository called `mirmahadiabbas.github.io`. Whatever
is in that repo shows up at https://mirmahadiabbas.github.io/. To update the site,
you replace the files in that repo with the ones in this folder.

---

## Step 1 — Open your repository

1. Go to https://github.com/mirmahadiabbas/mirmahadiabbas.github.io
2. This is the repo that powers your live site.

> If you'd rather not touch the existing files one by one, the cleanest path is:
> delete the old `index.html` (and any old css/js), then upload everything from
> this folder. Your existing `headshot.jpg` can stay where it is.

---

## Step 2 — Keep your headshot

Your current site already has a `headshot.jpg` at the top level of the repo.
**Leave it there.** The new code points at `headshot.jpg` in the repo root, so it
will just work.

If you want to swap in a new photo: name it exactly `headshot.jpg`, make it roughly
square-ish or portrait (around 600×740px is plenty), and upload it to the repo root,
replacing the old one.

---

## Step 3 — Upload the new files

The easiest way (no software, all in the browser):

1. In your repo, click **Add file -> Upload files**.
2. Drag in `index.html`, `style.css`, and `script.js`.
3. Drag in the **entire `images` folder** (GitHub keeps the folder structure when
   you drag a folder in). If dragging the folder doesn't work, create the folder
   first: click **Add file -> Create new file**, type `images/placeholder.txt` in
   the name box, commit it, then upload all the images into that `images` folder.
4. Scroll down, add a short message like "new portfolio site", and click
   **Commit changes**.

When GitHub asks whether to replace existing files (like `index.html`), say yes.

---

## Step 4 — Confirm GitHub Pages is on

It already is (your site is live now), but to check:

1. In the repo, go to **Settings -> Pages**.
2. Under "Build and deployment", Source should be **Deploy from a branch**, and the
   branch should be **main** (or **master**), folder **/ (root)**.
3. If you changed anything, click Save.

---

## Step 5 — View it

Wait 1–2 minutes after committing, then open:

**https://mirmahadiabbas.github.io/**

Hard-refresh if you still see the old version: Ctrl+Shift+R (Windows) or
Cmd+Shift+R (Mac). Browsers cache aggressively.

---

## Editing later (the bits you'll most likely touch)

Everything is plain text — open `index.html` in any editor.

- **Change wording**: find the text in `index.html` and edit it directly.
- **Add another competition card**: copy one whole `<article class="comp-card">...
  </article>` block in the "BEYOND THE CV" section, paste it, and change the title,
  badge, description, the two image filenames in `data-images`, and the LinkedIn link.
- **Add another LinkedIn post**: copy one `<a class="post-card">...</a>` block.
- **Hide the Projects section**: delete everything between
  `<!-- PROJECTS-START -->` and `<!-- PROJECTS-END -->`, and remove the
  `<a href="#projects">projects</a>` line from the nav near the top.
- **Add/replace an image**: drop the new file into `images/` and reference it by
  filename in `index.html`.

After any edit, re-upload the changed file to GitHub (same as Step 3) and commit.

---

## A note on the images

The "do not save my images" deterrents (no right-click, no drag) are in the code,
but please know: **no public website can truly stop image saving.** Anyone can
screenshot or use browser tools. The deterrents only stop casual copying. The
certificate images are readable when enlarged, so only keep showing them if you're
comfortable with that.

---

## Quick troubleshooting

- **Headshot is a blank green box** -> `headshot.jpg` isn't in the repo root, or is
  named differently. Upload it to the root, named exactly `headshot.jpg`.
- **A logo or photo is blank** -> the file isn't in the `images/` folder, or the
  filename's capitalisation doesn't match. Filenames are case-sensitive on GitHub:
  `Levy-1.jpg` is not the same as `levy-1.jpg`. Keep them exactly as provided.
- **Site looks unstyled (plain text)** -> `style.css` didn't upload, or isn't in the
  same folder as `index.html`. Both must sit at the repo root.
- **Changes not showing** -> wait 2 minutes and hard-refresh (Cmd/Ctrl+Shift+R).
