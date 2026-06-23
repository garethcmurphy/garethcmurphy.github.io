# Gareth Murphy website

Source for <https://garethcmurphy.github.io>, built with [Astro](https://astro.build) and deployed to GitHub Pages.

- **Live site:** <https://garethcmurphy.github.io>
- **Repository:** <https://github.com/garethcmurphy/garethcmurphy.github.io>

## Overview

This repository has **moved off Jekyll** and now uses Astro for local development, static builds, and GitHub Pages deployment.

- Site pages and layouts live in `src/`
- Blog posts live in `_posts/`
- Shared styles live in `css/` and `_sass/`
- Generated output is written to `_site/`

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Astro usually serves the site at <http://localhost:4321>.

Build the production site:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Deployment

GitHub Pages is configured to deploy with **GitHub Actions** using `.github/workflows/deploy.yaml`.

### GitHub setup

In **Settings → Pages**, set the source to **GitHub Actions**.

### How publishing works

1. Push changes to `main`, or run the workflow manually from the **Actions** tab.
2. GitHub Actions installs dependencies with `npm ci`.
3. The workflow runs `npm run build`.
4. The generated `_site/` directory is published to GitHub Pages.

If Pages is set to **Deploy from a branch**, GitHub will use the legacy branch-based flow instead of the Astro workflow.

## Notes

- `astro.config.mjs` sets the production site URL and the `_site/` output directory.
- Do not edit `_site/` by hand unless you intentionally want to change generated output.
