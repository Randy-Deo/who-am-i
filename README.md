# who-am-i

A personal portfolio and living resume—a place for a detailed breakdown of roles without summarizing or losing too much detail. Single-page site built with React and Vite; responsive, dark-theme design; deployed on GitHub Pages.

---

## Quick start

- **Install:** From the `web` folder run `npm install`
- **Dev server:** `npm run dev` (from `web`)
- **Build:** `npm run build` (from `web`)

---

## Project structure

```
who-am-i/
├── README.md                 ← This file
└── web/                     ← React + Vite app
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/              ← Static assets (served at site root)
    │   ├── rd-logo-trans-blk.png   ← Favicon (used in index.html)
    │   ├── rd-logo-trans-grey.png  ← Footer logo, optional
    │   └── randy-profile.png       ← Hero profile photo (replace to change photo)
    └── src/
        ├── main.jsx         ← App entry
        ├── App.jsx          ← Layout, section order, navbar scroll/highlight logic
        ├── App.css          ← All component and section styles
        ├── index.css        ← Global styles, CSS variables, shell layout
        ├── components/      ← Reusable UI
        │   ├── Navbar.jsx   ← Top bar: name, role, section links
        │   ├── Section.jsx  ← Wrapper for each page section
        │   └── Timeline.jsx  ← Experience entries (company, role, dates, location, description, technologies, highlights)
        ├── sections/        ← One file per page section
        │   ├── AboutSection.jsx
        │   ├── ExperienceSection.jsx
        │   ├── SkillsSection.jsx
        │   ├── ProjectsSection.jsx
        │   └── ContactSection.jsx
        └── data/            ← Content used by sections (edit here for text/data)
            ├── experience.js
            ├── projects.js
            └── skills.js
```

---

## Where to change what

### Name and role in the navbar

- **File:** `web/src/components/Navbar.jsx`
- **What to edit:**
  - `brand-name`: Your name (e.g. `Randy Deo`)
  - `brand-role`: Subtitle under name. Use two `<span className="brand-role-line">` elements so on mobile (≤1024px) they stack on separate lines (e.g. `Software Developer /` and `Quality Assurance Engineer`).
  - `links`: Array of `{ id, href, label }` for each nav item. `id` must match the section `id` (e.g. `about`, `experience`, `skills`, `projects`, `contact`).
- **Mobile:** At 1024px and below, the navbar shows a hamburger menu; the dropdown aligns to the right and stays on-screen. `MOBILE_BREAKPOINT` in Navbar.jsx and `@media (max-width: 1024px)` in CSS control this.

### Hero section (top of page)

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:**
  - **Profile photo:** The `<img>` uses `` src={`${import.meta.env.BASE_URL}randy-profile.png`} `` so it works locally and on GitHub Pages. Replace `web/public/randy-profile.png` or change the path.
  - **Greeting:** The line `Hi, I'm Randy` and the cyan period — edit the text inside the first `hero-title-line` span.
  - **Title lines:** The two lines under the greeting (`Software Developer /` and `QA Engineer`) — edit the two `hero-title-gradient` spans. The `/` is in a `hero-fullstop` span (accent color).
- **Hero title font sizes:** In `web/src/App.css`, search for `.hero-title-line:first-of-type` (name line, default 2.8rem) and `.hero-title-gradient` (subtitle lines, 2.5rem).

### Scrolling technology bar

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:** Inside `<div className="stack-bar-inner">` there are repeated `<span>` elements (e.g. `GOLANG`, `PYTHON`, `SELENIUM`, `JIRA`, `AWS`, …). Duplicate or remove blocks of spans to change the scrolling labels. The list is duplicated in the markup so the infinite scroll loops smoothly.

### About block (tagline and paragraph under the tech bar)

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:**
  - `about-block-tagline`: Short one-line tagline.
  - `about-block-paragraph`: Longer paragraph about you.

### Experience (jobs)

- **File:** `web/src/data/experience.js`
- **Structure:** Array of objects. Each object can have:
  - `id`: Unique string (e.g. `'zucitech'`)
  - `company`: Company name (shown on the first line, left)
  - `role`: Job title (shown under the company/date row)
  - `start`, `end`: Date range (e.g. `'Oct 2024'`, `'Present'`) — shown on the first line, right
  - `location`: Optional; if set, shown under the role (e.g. `'Remote'`)
  - `description`: Short summary — a string, or an array of strings for multiple paragraphs
  - `technologies`: Optional array of strings; shown as a comma-separated line (e.g. `['Python', 'Selenium', 'Jira']`)
  - `highlights`: Array of bullet strings (no limit; add as much detail as you like)
  - `link`: Optional URL; if set, the company name becomes a clickable link with an arrow icon
- **Rendering:** `web/src/sections/ExperienceSection.jsx` imports `experience` and passes it to `Timeline` in `web/src/components/Timeline.jsx`. Timeline layout and styles are in `App.css` (search for `experience-list`, `experience-item`, `experience-date`, `experience-technologies`, etc.).

### Skills (categories and items)

- **File:** `web/src/data/skills.js`
- **Structure:** Array of `{ id, title, items }`. `title` is the category heading (e.g. `Languages`, `Testing & QA`, `Tools & platforms`, `Practices & domains`). `items` is an array of strings.
- **Rendering:** `web/src/sections/SkillsSection.jsx` imports `skills` and renders each group in a card with a bullet list. Styles: `App.css` — `skills-groups`, `skills-group-card`, `skills-group-title`, `skills-group-items`, `skill-item`, and `skill-item::marker` (accent color for bullets).

### Projects

- **File:** `web/src/data/projects.js`
- **Structure:** Array of objects: `id`, `name`, `description`, `tech` (array of strings), `link` (URL or `'#'`). If `link` is set and not `'#'`, a “View” link is shown. `description` can include newlines (`\n`); `.project-description` uses `white-space: pre-line` so they render as line breaks.
- **Current-site highlight:** The project with `id: 'portfolio'` gets the class `project-card--current` so its border uses the accent color (cyan). Cards have a `min-height` so short entries (e.g. who-am-i) don’t look stubby.
- **Rendering:** `web/src/sections/ProjectsSection.jsx`. Styles in `App.css`: `projects-grid`, `project-card`, `project-card--current`, `project-name`, `project-tech-list`, `project-tech-item`, etc.

### Contact (links and email)

- **File:** `web/src/sections/ContactSection.jsx`
- **What to edit:** The `contactLinks` array at the top of the file. Each entry has `id`, `href`, `label`, and `icon` (an SVG element). Update `href` and `label` for LinkedIn, E-mail, GitHub, or add/remove entries.

### Section order on the page

- **File:** `web/src/App.jsx`
- **What to edit:** The order of `<AboutSection />`, `<ExperienceSection />`, `<SkillsSection />`, `<ProjectsSection />`, `<ContactSection />` inside `<main>`. The navbar highlight and scroll logic use the section `id` (e.g. `about`, `experience`), so if you add or rename sections, update both `App.jsx` and the `links` array in `Navbar.jsx`, and ensure each section is rendered with the correct `id` (via the `Section` component).

### Adding or renaming a section

1. Create a new component in `web/src/sections/` (e.g. `NewSection.jsx`) that uses `<Section id="new" title="New">...</Section>`.
2. In `web/src/App.jsx`, import the component and add it inside `<main>` where you want it.
3. In `web/src/components/Navbar.jsx`, add a corresponding entry to the `links` array: `{ id: 'new', href: '#new', label: 'New' }`.
4. Section IDs must be unique and match the `id` used in `Section` and in `links`.

---

## Styling and layout

### CSS variables (theme and layout)

- **File:** `web/src/index.css`
- **Variables:** Defined in `:root`. Important ones:
  - `--content-max`: Max width of navbar and main content (default `1440px`).
  - `--content-padding-x`: Horizontal padding for navbar and main content (default `60px`; overridden to `24px` at 1024px and `16px` at 768px in media queries).
  - `--accent`: Accent color (e.g. cyan `#5de5c7`). Used for links, bullets, timeline dots, section period, nav underline, project-card--current border, etc.
  - `--text`, `--text-h`, `--muted`, `--bg`, `--bg-elevated`, `--border`: Text and background colors.

Changing `--content-max` or `--content-padding-x` affects both the navbar and the main content width; the scrolling tech bar is sized to match the navbar. Breakpoints for navbar (hamburger) and padding are at **1024px** in both `Navbar.jsx` and `App.css`/`index.css`.

### Component and section styles

- **File:** `web/src/App.css`
- **Organization:** Styles are grouped roughly by feature: navbar (`.app-header`, `.nav-link`, …), hero (`.hero`, `.hero-title`, …), stack bar (`.stack-bar`, …), about block, experience/timeline, projects, skills, contact. Use search (e.g. “hero-title”, “experience-item”, “contact-card”) to find the block to edit.

### Navbar scroll and highlight behavior

- **File:** `web/src/App.jsx`
- **Logic:** A single `useEffect` sets up:
  - An **Intersection Observer** to determine which section is “in view” (using a line at `NAV_OFFSET` = 140px from the top).
  - **Hash change** listener so clicking a nav link updates the highlighted link.
  - **Scroll** listener so when the user scrolls to the bottom of the page, the Contact section is highlighted.
- **Tuning:** `NAV_OFFSET` (140) should roughly match the navbar height. Section elements must have class `section` and an `id` matching the nav link `id`. Scroll margin for sections is set in `App.css` (`.section { scroll-margin-top: 140px }`) so anchor links sit below the navbar.

---

## Build and deploy

### Local build

From the `web` folder run `npm run build`. Output is in `web/dist`. You can serve that folder with any static host.

---

### GitHub Pages (free)

The site is configured to be hosted on **GitHub Pages** at:

**https://\<your-username>.github.io/who-am-i/**

GitHub Pages serves the built static files. You do not commit the `dist` folder; the deploy script builds and pushes it to a separate branch.

#### One-time setup

1. **Enable GitHub Pages**
   - On GitHub, open your repo → **Settings** → **Pages** (under “Code and automation”).
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - **Branch:** choose **gh-pages** (the branch will be created when you run deploy for the first time).
   - **Folder:** **/ (root)**.
   - Click **Save**.

2. **First deploy**
   - On your machine, from the repo root:
     ```bash
     cd web
     npm install
     npm run deploy
     ```
   - The first time you run `npm run deploy`, the **gh-pages** branch is created automatically. You do not need to create it yourself.
   - When prompted for credentials, use your GitHub username and a **Personal Access Token (PAT)** as the password (GitHub no longer accepts account passwords for Git over HTTPS). Create a token at: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**, with `repo` scope.
   - After a minute or two, the site will be live at the URL above.

#### Deploying updates

Whenever you want the live site to reflect your latest code:

1. Commit and push your changes to your usual branch (e.g. `main` or `WAI-1`).
2. From the `web` folder run:
   ```bash
   npm run deploy
   ```
3. The script builds the app and pushes the built files to the **gh-pages** branch. The **live site always serves from gh-pages**; the branch you run deploy from only determines which version of the code gets built and pushed.

No need to switch to `main` to deploy—you can run `npm run deploy` from any branch. The site will show whatever code was in that branch at the time you ran deploy.

#### If you rename the repo

The site URL will become `https://<username>.github.io/<new-repo-name>/`. Update the production base path so assets load correctly:

- In `web/vite.config.js`, change `'/who-am-i/'` to `'/your-new-repo-name/'` (in the `mode === 'production'` branch).
- Run `npm run deploy` again.

#### Favicon and page title

- **File:** `web/index.html`
- **Favicon:** `<link rel="icon" href="rd-logo-trans-blk.png" />` — replace the file in `public/` or change `href` to another asset.
- **Title:** `<title>Randy Deo - Software Developer</title>` — edit for your name and tagline.

#### Public assets (e.g. profile photo)

Files in `web/public/` are copied to the build output as-is. The hero image and footer logo use `import.meta.env.BASE_URL` so they work both locally and on GitHub Pages. If you add other images in `public/`, reference them like: `` src={`${import.meta.env.BASE_URL}your-file.png`} `` so they work when the site is served from a subpath.

#### Base path summary

| Environment | Base path | Site URL |
|-------------|-----------|----------|
| Local dev   | `/`       | `http://localhost:5173/` |
| Production  | `/who-am-i/` | `https://<username>.github.io/who-am-i/` |

To use a different subpath, change the production `base` in `web/vite.config.js` to match.

---

## Summary checklist for common updates

| What you want to change        | Where to go |
|--------------------------------|------------|
| Your name / navbar role        | `web/src/components/Navbar.jsx` |
| Hero photo                     | Replace `web/public/randy-profile.png` or change `src` in `AboutSection.jsx` (use `import.meta.env.BASE_URL`) |
| Page title / favicon           | `web/index.html` (`<title>`, `<link rel="icon">`) |
| “Hi, I’m Randy” and title lines| `web/src/sections/AboutSection.jsx` (hero `h1` and spans) |
| Scrolling tech bar labels      | `web/src/sections/AboutSection.jsx` (`stack-bar-inner` spans) |
| About tagline and paragraph    | `web/src/sections/AboutSection.jsx` (about-block) |
| Jobs / experience entries      | `web/src/data/experience.js` |
| Skills categories and items    | `web/src/data/skills.js` |
| Projects list                  | `web/src/data/projects.js` |
| Contact links (LinkedIn, etc.) | `web/src/sections/ContactSection.jsx` (`contactLinks`) |
| Section order                  | `web/src/App.jsx` (order of section components) |
| Nav bar links                  | `web/src/components/Navbar.jsx` (`links` array) |
| Colors and layout width        | `web/src/index.css` (`:root` variables) |
| All other visuals              | `web/src/App.css` |

This README is intended so the site can be maintained without AI: use it as the single place to look up where each element lives and what to edit.
