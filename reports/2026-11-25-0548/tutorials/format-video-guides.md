# Format report — video-guides

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/tutorials/video-guides.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Video Tutorials — Deploy Apps Step by Step
- **Goal:** Expect every video on the page to play
- **Format check:** fail

## Content list

1. (`prerequisite`) under `(intro)` — YouTube video links for Code Capsules deployment tutorials.
2. (`prerequisite`) under `(intro)` — title: "Video Tutorials — Deploy Apps Step by Step"
3. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 G…
6. (`prerequisite`) under `Prerequisites` — YouTube video links for Code Capsules deployment tutorials.
7. (`prerequisite`) under `Overview` — Videos cover the same flows as written guides. Open a link to watch the deploy o…
8. (`prerequisite`) under `Videos` — | Topic | YouTube |
9. (`prerequisite`) under `Videos` — | --- | --- |
10. (`prerequisite`) under `Videos` — | Python Telegram Bot | [Watch](https://www.youtube.com/watch?v=z-K9rVfhd5c) |
11. (`prerequisite`) under `Videos` — | MERN Job Board | [Watch](https://www.youtube.com/watch?v=iHl-pFlLWk0) |
12. (`prerequisite`) under `Videos` — | Angular | [Watch](https://www.youtube.com/watch?v=9UYugPpxlMQ) |
13. (`prerequisite`) under `Videos` — | React | [Watch](https://www.youtube.com/watch?v=qQ0Y-3JEeZ0) |
14. (`prerequisite`) under `Videos` — | Express and Mongo | [Watch](https://www.youtube.com/watch?v=Jt52C0xIiA8) |
15. (`prerequisite`) under `Videos` — | Express | [Watch](https://www.youtube.com/watch?v=P42D4IBtTVY) |
16. (`prerequisite`) under `Videos` — | MEAN Stack | [Watch](https://www.youtube.com/watch?v=aVyMru2nrP4) |
17. (`prerequisite`) under `Related` — {type: 'link', href: '/tutorials', label: '🎓 Tutorials index', description: 'Wri…
18. (`prerequisite`) under `Related` — {type: 'link', href: '/frontend/angular', label: '🛠️ Angular', description: 'Dep…
19. (`prerequisite`) under `Related` — {type: 'link', href: '/frontend/react', label: '🛠️ React', description: 'Deploy …
20. (`prerequisite`) under `Troubleshooting` — Confirm you are signed in to the correct Team and Space, then run through the st…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### video-guides-1
- **Type:** Format fix
- **Title:** Add ## What You'Ll Build
- **Problem:** Missing `## What You'Ll Build`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## What You'Ll Build` present.

### video-guides-2
- **Type:** Format fix
- **Title:** Add ## Summary
- **Problem:** Missing `## Summary`.
- **Rule:** tutorial_format.md
- **Change:** Add section per template.
- **Done when:** `## Summary` present.

### video-guides-3
- **Type:** Format fix
- **Title:** Add Part sections
- **Problem:** Tutorial has no `## Part N:` sections.
- **Rule:** tutorial_format.md
- **Change:** Split build steps into parts with checkpoints.
- **Done when:** At least one Part section exists.

## Proposed outline

(Rewrite `docs/tutorials/video-guides.md` to match tutorial_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## What you'll build
- ## Prerequisites
- ## Part N: … — steps + ### Checkpoint
- ## Summary
- ## Troubleshooting
