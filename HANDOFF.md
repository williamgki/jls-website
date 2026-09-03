# Jenny Lind Singers Website Handoff

## Overview

This is a static HTML, CSS, and JavaScript website. There is no build step, package manager, database, or server application to run.

- Production site: `https://www.jennylindsingers.com`
- GitHub repository: `williamgki/jls-website`
- Publishing branch: `main`
- Hosting: GitHub Pages, served from the repository root
- Custom domain: `www.jennylindsingers.com` (declared in `CNAME`)

Pushing a committed change to `main` publishes it. GitHub Pages can take a minute or two to update, so verify the public page after each release.

## Local Development and Publishing

Preview the site from the repository directory:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765` in a browser. Before publishing, review `git diff`, run `git diff --check`, and confirm the expected files with `git status`.

Publish a reviewed change:

```bash
git add <changed-files>
git commit -m "Short description"
git push origin main
```

Do not change or remove `CNAME` unless the site domain is deliberately being moved. The GitHub and domain/DNS accounts are retained by the site owner.

## Forms

The website submits directly to Formspree; form routing is configured in Formspree, not in this repository.

- General enquiry form: `https://formspree.io/f/meervrzk` in `contact.html`
- Mailing-list forms: `https://formspree.io/f/xdawywwn` in `contact.html` and `index.html`

To change notification recipients, submission handling, spam settings, or view submissions, use the Formspree account that owns these endpoints. Keep the endpoint URLs unchanged unless the Formspree configuration is changed at the same time.

## Content and Event Updates

- Update both `index.html` and `events.html` when changing the next concert.
- Keep direct ticket links, festival programme links, date, time, and venue consistent between the two pages.
- Move completed events from `events.html` into the Past Performances area.
- New web assets should be committed alongside the page that uses them. Event images currently live in `extracted/`; editorial and performance images live in `photos/`.
- Verify external ticket links before publishing.

The current Elgar Festival ticket CTA uses Worcester Theatres. Future concert ticket links may be managed by the relevant festival or venue instead.

## Source Material and Access

Some useful source files are intentionally excluded from Git and must be requested from the site owner when needed:

- The style lookbook PDF
- Extended choir context notes
- Original PDFs and high-resolution source materials
- The original JPEG logo

The repository also contains historical source emails in `emails/`. Treat these as private working material; do not add new personal correspondence, credentials, or sensitive information to the repository.

Use separate personal accounts for GitHub and any coding agent. Do not share GitHub passwords, personal access tokens, SSH keys, Formspree credentials, or domain-registrar credentials. The site owner controls repository access, GitHub Pages, and the domain/DNS account.

## Recovery

GitHub commit history is the primary rollback mechanism. If a published change needs to be undone, create and push a normal `git revert` commit rather than rewriting shared history.
