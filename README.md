# Nishant Gaurav – Portfolio Website

A personal developer portfolio built with vanilla HTML, CSS, and Bootstrap — featuring a dark/light mode toggle, smooth section navigation, skill progress bars, project cards, certifications, and a contact form. Deployed live via GitHub Pages.

**Live:** [nishant05gaurav.github.io](https://nishant05gaurav.github.io)

## Quick Start

```bash
git clone https://github.com/nishant05gaurav/nishant05gaurav.github.io.git
cd nishant05gaurav.github.io

# No build step — open directly
open index.html
# or just drag index.html into your browser
```

No dependencies to install. No Node, no npm, no bundler.


## Preview

**Live site:** [nishant05gaurav.github.io](https://nishant05gaurav.github.io)
![Light Mode](/nishant05gaurav.github.io-main/assets/image.png)

The portfolio loads with a split-layout About section — profile photo on the left, bio and CTA on the right. The navbar is sticky and collapses on mobile. Flipping the toggle in the top-right switches between light and dark mode, and the preference persists across sessions via `localStorage`.


![Dark Mode](/nishant05gaurav.github.io-main/assets/image-1.png)


## Problem & Purpose

Most developer portfolios are either overbuilt (React + Tailwind + animations for a static page) or underbuilt (a plain HTML file with no real structure). This one sits in the right place — clean, fast, zero-dependency, deployable in one click via GitHub Pages, and actually representative of frontend skills without hiding them behind a framework.

Built as a real-world frontend project and a living resume that recruiters and hiring managers can verify directly from the GitHub repo.


## Highlights

- **Dark mode with persistence** — theme state is stored in `localStorage` and restored on page load. No flash of wrong theme; the script runs before render. Toggle is a pure CSS slider with no JS library.
- **Zero build tooling** — the entire site is a single `index.html` with `css/style.css` and `JS/main.js`. Loads instantly, works offline, and has nothing to break at deploy time.
- **Custom skill bar system** — progress bars are built in plain CSS with inline `width` values, not a third-party component. Clean, readable, and fully customizable.
- **GitHub Pages deployment** — 9 deployments on record, served directly from the `master` branch. No CI pipeline needed; push to deploy.
- **Responsive layout throughout** — Bootstrap grid handles mobile breakpoints for the project cards, achievement cards, and contact section. The navbar collapses cleanly on small screens.
- **Semantic structure** — sections use proper HTML5 landmarks (`<header>`, `<section>`, `<footer>`) with anchor IDs, making the nav links and scroll behavior reliable without any JavaScript scroll library.


## Features

- Sticky navbar with smooth anchor navigation and mobile hamburger menu
- Dark / light mode toggle with `localStorage` persistence
- About section with profile photo, bio, and resume link
- Skill progress bars across 18 technologies (split two-column layout)
- Project cards with tech stack labels and GitHub links
- Achievements & Certifications section with certificate images (Microsoft, AWS)
- Contact section with LinkedIn, GitHub, and email cards + a contact form
- Footer with social icon links


## Tech Stack

| Layer | Tools |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 4 / 5 |
| Interactivity | Vanilla JavaScript |
| Deployment | GitHub Pages |


## Project Structure

```
nishant05gaurav.github.io/
├── assets/
│   └── img/
│       ├── profile_photo.jpeg
│       ├── logo_primary.png
│       ├── logo_secondary.png
│       ├── cat.gif
│       ├── favicon.png
│       └── certificates/          # Achievement card images
├── css/
│   └── style.css                  # All custom styles + dark mode overrides
├── JS/
│   └── main.js
└── index.html                     # Single-page entry point
```


## Deployment

Hosted on **GitHub Pages** from the `master` branch.

Any push to `master` triggers an automatic redeploy — no workflow file needed. The live URL is: `https://nishant05gaurav.github.io`

To deploy your own fork:
1. Fork the repo
2. Go to **Settings → Pages**
3. Set source to `master` branch, `/ (root)`
4. GitHub assigns a URL at `https://<your-username>.github.io`


## Customization

To adapt this for your own use, update these areas in `index.html`:

- **About text** — bio paragraphs and resume link
- **Skill bars** — change `width` values inline on `.skill-fill` divs
- **Project cards** — update `href`, project name, tech stack, and description
- **Achievement cards** — swap images in `assets/img/certificates/` and update text
- **Contact links** — update LinkedIn, GitHub, and email `href` values
- **Footer socials** — same links repeated in the footer `<ul>`

Dark mode colors live in `css/style.css` under the `.dark-mode` class selector.


## License

MIT License: Use it, Fork it, Build on it.


## Author

Built by [Nishant Gaurav](https://github.com/nishant05gaurav)  

[GitHub](https://github.com/nishant05gaurav) · [LinkedIn](https://shorturl.at/kWLs5) · [nishant05gaurav@gmail.com](mailto:nishant05gaurav@gmail.com)