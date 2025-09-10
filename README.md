# Using Evidence — One-click Eleventy + Bootstrap + Pages

**This repo is pre-configured to build on GitHub Pages.**

## Run locally
```bash
npm install
npm run build
npx @11ty/eleventy --serve   # optional dev server
```

## Deploy on GitHub Pages
- Push to `main`. Workflow builds with `npm install` and deploys to Pages.
- Internal links use Eleventy's `| url` filter and `.eleventy.js` sets `pathPrefix` from `PATH_PREFIX`.
- Dark-mode toggle persists in `localStorage` (key: `bs-theme`).

Generated September 09, 2025.
