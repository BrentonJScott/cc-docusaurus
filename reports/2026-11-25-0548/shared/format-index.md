# Format report — shared

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/shared/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Shared Prerequisites Reference
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`fact`) under `(intro)` — Pages that guides link to for the setup they need before their first step.
2. (`fact`) under `(intro)` — Pages that guides link to for the setup they need before their first step.
3. (`fact`) under `Overview` — Each page covers one prerequisite. Guides link here instead of repeating the ste…
4. (`fact`) under `Pages` — | Page | Covers |
5. (`fact`) under `Pages` — |---|---|
6. (`instruction`) under `Pages` — | [Create an Account](/docs/shared/create-an-account) | Signing up for Code Caps…
7. (`instruction`) under `Pages` — | [Create a Space](/docs/shared/create-a-space) | Creating a Space to deploy int…
8. (`fact`) under `Pages` — | [Connect GitHub](/docs/shared/connect-github) | Giving Code Capsules access to…
9. (`instruction`) under `Pages` — | [Fork a Demo Repo](/docs/shared/fork-a-demo-repo) | Forking a Code Capsules de…
10. (`instruction`) under `Related` — {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Find …
11. (`fact`) under `Related` — {type: 'link', href: '/platform/spaces/what-is-a-space', label: '💡 What is a Spa…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### shared-1
- **Type:** Format fix
- **Title:** Align page with template section order
- **Problem:** Section headings or content do not fully match the current template.
- **Rule:** reference_format.md
- **Change:** Restructure headings and content to match the template section table.
- **Done when:** Template section check passes.

## Proposed outline

(Rewrite `docs/shared/index.md` to match reference_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Overview
- ## Subject tables
- ## Related — 2+ cards
