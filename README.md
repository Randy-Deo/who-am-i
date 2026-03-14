# who-am-i

A minimal personal portfolio and living resume. Single-page site built with React and Vite.

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
    │   ├── favicon.svg
    │   ├── randy-profile.png   ← Hero profile photo (replace to change photo)
    │   └── icons.svg
    └── src/
        ├── main.jsx         ← App entry
        ├── App.jsx          ← Layout, section order, navbar scroll/highlight logic
        ├── App.css          ← All component and section styles
        ├── index.css        ← Global styles, CSS variables, shell layout
        ├── components/      ← Reusable UI
        │   ├── Navbar.jsx   ← Top bar: name, role, section links
        │   ├── Section.jsx  ← Wrapper for each page section
        │   └── Timeline.jsx  ← Experience entries (date, company, role, description, highlights)
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
  - `brand-role`: Subtitle under name (e.g. `Software Developer / Quality Assurance Engineer`)
  - `links`: Array of `{ id, href, label }` for each nav item. `id` must match the section `id` (e.g. `about`, `experience`, `skills`, `projects`, `contact`).

### Hero section (top of page)

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:**
  - **Profile photo:** The `<img>` uses `src="/randy-profile.png"`. Replace the file `web/public/randy-profile.png` with your own image (same filename), or change `src` to another path under `public/` (e.g. `src="/my-photo.jpg"`).
  - **Greeting:** The line `Hi, I'm Randy` and the cyan period — edit the text inside the first `hero-title-line` span.
  - **Title lines:** The two lines under the greeting (`Software Developer /` and `QA Engineer`) — edit the two `hero-title-gradient` spans. The `/` is in a `hero-fullstop` span (accent color).
- **Hero title font sizes:** In `web/src/App.css`, search for `.hero-title-line:first-of-type` (name line, default 2.8rem) and `.hero-title-gradient` (subtitle lines, 2.5rem).

### Scrolling technology bar (WEB / PROGRAMMING / …)

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:** Inside `<div className="stack-bar-inner">` there are repeated `<span>` elements (e.g. `WEB`, `PROGRAMMING`, `DEVELOPMENT`). Duplicate or remove blocks of spans to change the scrolling labels. The content is duplicated in the markup so the infinite scroll loops smoothly.

### About block (tagline and paragraph under the tech bar)

- **File:** `web/src/sections/AboutSection.jsx`
- **What to edit:**
  - `about-block-tagline`: Short one-line tagline.
  - `about-block-paragraph`: Longer paragraph about you.

### Experience (jobs)

- **File:** `web/src/data/experience.js`
- **Structure:** Array of objects. Each object can have:
  - `id`: Unique string (e.g. `'zucitech'`)
  - `company`: Company name (shown on the left of the first line)
  - `role`: Job title (shown on the second line)
  - `start`, `end`: Date range (e.g. `'Oct 2024'`, `'Present'`) — shown on the right of the first line
  - `location`: Optional (not currently displayed in the UI)
  - `description`: Short summary paragraph
  - `highlights`: Array of bullet strings
  - `link`: Optional URL; if set, the company name becomes a clickable link with an arrow icon
- **Rendering:** `web/src/sections/ExperienceSection.jsx` imports `experience` and passes it to `Timeline` in `web/src/components/Timeline.jsx`. Timeline layout and styles are in `App.css` (search for `experience-list`, `experience-item`, `experience-date`, etc.).

### Skills (categories and items)

- **File:** `web/src/data/skills.js`
- **Structure:** Array of `{ id, title, items }`. `title` is the category heading (e.g. `Languages`, `Frameworks`). `items` is an array of strings (e.g. `['JavaScript', 'Golang', 'Python', 'SQL']`).
- **Rendering:** `web/src/sections/SkillsSection.jsx` imports `skills` and renders each group in a card with a bullet list. Styles: `App.css` — `skills-groups`, `skills-group-card`, `skills-group-title`, `skills-group-items`, `skill-item`, and `skill-item::marker` (accent color for bullets).

### Projects

- **File:** `web/src/data/projects.js`
- **Structure:** Array of objects: `id`, `name`, `description`, `tech` (array of strings), `link` (URL or `'#'`). If `link` is set and not `'#'`, a “View” link is shown.
- **Rendering:** `web/src/sections/ProjectsSection.jsx`. Styles in `App.css`: `projects-grid`, `project-card`, `project-name`, `project-tech-list`, `project-tech-item`, etc.

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
  - `--content-max`: Max width of navbar and main content (default `960px`).
  - `--content-padding-x`: Horizontal padding for navbar and main content (default `60px`; overridden in media queries to `24px` at 900px and `16px` at 768px).
  - `--accent`: Accent color (e.g. cyan `#00e6e6`). Used for links, bullets, timeline dots, section period, etc.
  - `--text`, `--text-h`, `--muted`, `--bg`, `--border`: Text and background colors.

Changing `--content-max` or `--content-padding-x` affects both the navbar and the main content width; the scrolling tech bar is sized to match the navbar.

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

- From the `web` folder: `npm run build`. Output is in `web/dist`. Serve that folder with any static host.

### GitHub Pages (project site)

The site is set up to deploy to GitHub Pages at `https://<username>.github.io/who-am-i/`.

1. **One-time setup**
   - In GitHub: repo **Settings → Pages**. Set source to **Deploy from a branch**. Branch: **gh-pages**, folder: **/ (root)**. Save.
   - From the repo root, install the deploy dependency and run deploy from `web`:
     ```bash
     cd web
     npm install
     npm run deploy
     ```
   - `npm run deploy` runs `vite build` then pushes the contents of `web/dist` to the **gh-pages** branch. GitHub then serves that at `https://<username>.github.io/who-am-i/`.

2. **After making changes**
   - From `web`: `npm run deploy`. No need to commit the `dist` folder; `gh-pages` pushes it on its own.

3. **If you rename the repo**
   - Update the production base path in `web/vite.config.js`: change `'/who-am-i/'` to `'/your-new-repo-name/'` in the `base` option (inside the `mode === 'production'` branch). Then run `npm run deploy` again.

### Base path

- **Development:** `base` is `'/'` so the app runs at `http://localhost:5173/`.
- **Production:** `base` is `'/who-am-i/'` so assets and routes work when the site is served at `https://<username>.github.io/who-am-i/`.
- To deploy to a different subpath, change the production `base` in `web/vite.config.js` to match (e.g. `'/other-path/'`).

---

## Summary checklist for common updates

| What you want to change        | Where to go |
|--------------------------------|------------|
| Your name / navbar role        | `web/src/components/Navbar.jsx` |
| Hero photo                     | Replace `web/public/randy-profile.png` or change `src` in `AboutSection.jsx` |
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
