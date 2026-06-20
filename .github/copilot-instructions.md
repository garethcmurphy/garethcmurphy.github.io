# Copilot instructions for this repository

## Build, test, and lint commands

- This repository is a Jekyll site deployed with GitHub Pages. There is no `package.json`, `Gemfile`, CI workflow, or repo-local test/lint runner checked in.
- Local preview: `jekyll serve`
- Static build: `jekyll build`
- The build output goes to `_site/`.
- There is no automated test suite, lint command, or single-test command defined in this repository.

## High-level architecture

- The source of truth is the Jekyll source tree, not `_site/`. Content lives in root pages such as `index.html` and `about.md`, section pages such as `gallery/index.md` and `projects/index.md`, and blog posts in `_posts/`.
- `_layouts/default.html` provides the outer shell and includes `_includes/head.html`, `_includes/header.html`, and `_includes/footer.html`. `_layouts/page.html` and `_layouts/post.html` both layer on top of `default`, so most site-wide structural changes belong in the shared layout or includes.
- `_config.yml` holds site metadata (`title`, `email`, `description`, social usernames, base URL settings). That metadata is consumed in the shared includes for the page title, meta description, footer contact details, and social links.
- `index.html` renders the home page by iterating over `site.posts`. `feed.xml` separately iterates over posts to generate the RSS feed, so changes to post front matter affect both the home page and the feed.
- Styling is centered on `css/main.scss`, which is the only Sass entrypoint and imports the partials in `_sass/`.
- `_site/` is committed in this repository as generated output. Treat it as a build artifact derived from the source files above.

## Key conventions

- Do not hand-edit `_site/` unless the task is explicitly about generated output. Make content, layout, include, config, or Sass changes in source files and regenerate the site instead.
- Top-level pages and section index pages use front matter with `layout: page`, a `title`, and usually an explicit `permalink`. Posts use `layout: post` and live in `_posts/YYYY-MM-DD-name.markdown`.
- Navigation is auto-built in `_includes/header.html` by iterating over `site.pages` and showing any page that has a `title`. Adding a titled page can change the site navigation without touching the header include.
- Post listings and RSS entries are automatic. Adding or renaming a file in `_posts/` changes the home page and feed without needing any manual index updates.
- Keep shared site metadata in `_config.yml` rather than duplicating it in templates. When `_config.yml` changes, restart `jekyll serve`; the file itself notes that Jekyll does not reload it automatically.
- Asset paths are context-sensitive in the current content: posts typically use site-root paths like `/images/...`, while nested page content such as `gallery/index.md` uses relative paths like `../images/...`.
