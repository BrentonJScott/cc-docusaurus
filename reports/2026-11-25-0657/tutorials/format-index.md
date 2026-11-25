# Format report — tutorials

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/tutorials/index.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Deployment Tutorials & Step-by-Step Guides
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`prerequisite`) under `(intro)` — Step-by-step tutorials for building and deploying applications on Code Capsules.
2. (`prerequisite`) under `(intro)` — title: "Deployment Tutorials & Step-by-Step Guides"
3. (`prerequisite`) under `(intro)` — Step-by-step tutorials for building and deploying applications on Code Capsules.
4. (`prerequisite`) under `Overview` — Each tutorial walks through one project and ends with a deploy on Code Capsules.
5. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials/build-a-mern-job-board', label: '🎓 MERN job boa…
6. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials/how-to-create-and-host-a-telegram-bot-on-code-c…
7. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials/heroku-migration-guide', label: '🎓 Heroku migra…
8. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials/video-guides', label: '📋 Video guides', descrip…
9. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials/use-codecapsules-with-an-agent', label: '🎓 Depl…
10. (`prerequisite`) under `Related` — {type: 'link', href: '/frontend/index', label: '📋 Frontend guides', description:…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### tutorials-1
- **Type:** Format fix
- **Title:** Add ## What You'Ll Build
- **Problem:** Missing `## What You'Ll Build`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## What You'Ll Build` present.

### tutorials-2
- **Type:** Format fix
- **Title:** Add ## Prerequisites
- **Problem:** Missing `## Prerequisites`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## Prerequisites` present.

### tutorials-3
- **Type:** Format fix
- **Title:** Add ## Summary
- **Problem:** Missing `## Summary`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## Summary` present.

### tutorials-4
- **Type:** Format fix
- **Title:** Add ## Troubleshooting
- **Problem:** Missing `## Troubleshooting`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## Troubleshooting` present.

### tutorials-5
- **Type:** Format fix
- **Title:** Add Part sections
- **Problem:** Tutorial has no `## Part N:` sections.
- **Rule:** tutorial_format.md
- **Change:** Split build steps into parts with checkpoints.
- **Done when:** At least one Part section exists.

## Proposed outline

(Rewrite `docs/tutorials/index.md` to match tutorial_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## What you'll build
- ## Prerequisites
- ## Part N: … — steps + ### Checkpoint
- ## Summary
- ## Troubleshooting
