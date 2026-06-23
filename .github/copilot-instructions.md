# Copilot instructions for this repository

## Build, test, and lint commands

- This repository is an Astro static site deployed to GitHub Pages.
- Install dependencies with `npm install`.
- Local preview: `npm run dev`
- Static build: `npm run build`
- Production preview of the built output: `npm run preview`
- The build output goes to `_site/`.
- There is no automated test suite, lint command, or single-test command defined in this repository.

## High-level architecture

- The source of truth is the Astro source tree plus `_posts/`, not `_site/`. Pages live in `src/pages/`, layouts live in `src/layouts/`, site metadata and navigation live in `src/data/site.ts`, and blog posts live in `_posts/`.
- `src/layouts/BaseLayout.astro` provides the shared page shell, while `src/layouts/PageLayout.astro` and `src/layouts/PostLayout.astro` layer on top of it for section pages and blog posts.
- `src/utils/posts.ts` imports Markdown posts from `_posts/`, derives URLs from filenames, normalizes categories, and builds excerpts.
- `src/pages/index.astro` renders the home page by iterating over `getPosts()`. `src/pages/feed.xml.js` separately iterates over posts to generate the RSS feed, so post front matter affects both the home page and the feed.
- Styling is centered on `css/main.scss`, which is the only Sass entrypoint and imports the partials in `_sass/`.
- `_site/` is committed in this repository as generated output. Treat it as a build artifact derived from the source files above.

## Key conventions

- Do not hand-edit `_site/` unless the task is explicitly about generated output. Make content, layout, include, config, or Sass changes in source files and regenerate the site instead.
- Markdown pages in `src/pages/` use front matter such as `layout: ../layouts/PageLayout.astro` or `layout: ../../layouts/PageLayout.astro` plus a `title`. Posts live in `_posts/YYYY-MM-DD-name.markdown` or `.md`.
- Navigation is defined explicitly in `src/data/site.ts`, so changing the site menu belongs there rather than in page front matter.
- Post listings and RSS entries are automatic. Adding or renaming a file in `_posts/` changes the home page and feed without needing any manual index updates.
- Keep shared site metadata in `src/data/site.ts` rather than duplicating it in templates.
- Asset paths in content currently use site-root paths like `/images/...`.
