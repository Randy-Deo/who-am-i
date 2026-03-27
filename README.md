# who-am-i

Personal portfolio and living resume built with React + Vite.

## Tech stack
- React 19
- Vite 8
- React Router DOM 7
- Plain CSS (`src/index.css`, `src/App.css`, `src/styles/*`)

## Run locally
From repo root:

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run lint
npm run build
npm run preview
```

## App routes
- `/` -> Home (hero + contact)
- `/resume` -> About, Experience, Certificates, Skills
- `/projects` -> Project cards

Routing and shared layout live in `src/App.jsx`.

## Where to edit content
Primary content is data-driven in `src/data/`:
- `experience.js`
- `projects.js`
- `skills.js`
- `certificates.js`

Section renderers live in `src/sections/`.

## Styling structure
- `src/index.css` -> global tokens, shell spacing, app-level layout variables
- `src/App.css` -> shared/base styles
- `src/styles/home.css` -> home route layout and fixed tech footer styles
- `src/styles/resume.css` -> resume cards (experience/certificates/skills)
- `src/styles/projects.css` -> projects grid/card styles

## Assets
Static files are in `public/`.
Use `import.meta.env.BASE_URL` when referencing public assets in JSX.

## Deploy (GitHub Pages)
Vite base is configured in `vite.config.js`:
- production: `/who-am-i/`
- development: `/`

Deploy command:

```bash
npm run deploy
```

## Maintenance notes
- Keep `src/data/*` as the source of truth for resume/project content.
- Prefer small section components and data-first updates over hardcoded JSX text.
- Keep route-specific behavior in `App.jsx` and route CSS classes (e.g. `route-home`).
- Local caches/build artifacts are ignored (`.vite`, `dist`, `node_modules`).
