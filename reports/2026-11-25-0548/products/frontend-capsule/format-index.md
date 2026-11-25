# Format report — frontend-capsule

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/products/frontend-capsule/index.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Frontend App Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — Static and container hosting for frontends on Code Capsules.
2. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
3. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 G…
5. (`prerequisite`) under `Prerequisites` — Static and container hosting for frontends on Code Capsules.
6. (`goal`) under `Overview` — Frontend Capsules build from Git and serve files over HTTPS. **Static** hosting …
7. (`goal`) under `Hosting options` — | Option | Guide |
8. (`goal`) under `Hosting options` — | --- | --- |
9. (`goal`) under `Hosting options` — | Static deploy | [/products/frontend-capsule/static/deploy](/products/frontend-…
10. (`goal`) under `Hosting options` — | Container deploy | [/products/frontend-capsule/container/deploy](/products/fro…
11. (`goal`) under `Hosting options` — | Plans | [/products/frontend-capsule/static/plans](/products/frontend-capsule/s…
12. (`goal`) under `Related` — {type: 'link', href: '/frontend/index', label: '📋 Framework guides', description…
13. (`goal`) under `Related` — {type: 'link', href: '/products/frontend-capsule/configure', label: '🛠️ Configur…
14. (`goal`) under `Related` — {type: 'link', href: '/products/frontend-capsule/supported-runtimes', label: '📋 …
15. (`goal`) under `Related` — {type: 'link', href: '/products/frontend-capsule/custom-domains', label: '🛠️ Cus…
16. (`goal`) under `Troubleshooting` — Confirm you are signed in to the correct Team and Space, then run through the st…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### frontend-capsule-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/products/frontend-capsule/index.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
