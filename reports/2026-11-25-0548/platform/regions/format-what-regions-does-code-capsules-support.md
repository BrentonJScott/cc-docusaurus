# Format report — what-regions-does-code-capsules-support

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/platform/regions/what-regions-does-code-capsules-support.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Available Regions and Locations
- **Goal:** Expect the reader to understand: Deployment regions you can select when creating a Space on Code Capsules
- **Format check:** fail

## Content list

1. (`goal`) under `(intro)` — slug: "/platform/regions/what-regions-does-code-capsules-support"
2. (`goal`) under `(intro)` — title: "Available Regions and Locations"
3. (`goal`) under `(intro)` — Deployment regions you can select when creating a Space on Code Capsules.
4. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules a…
5. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', descript…
6. (`prerequisite`) under `Prerequisites` — {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 G…
7. (`prerequisite`) under `Prerequisites` — Deployment regions you can select when creating a Space on Code Capsules.
8. (`goal`) under `Overview` — You choose a region once per Space. Every Capsule in that Space runs in the same…
9. (`goal`) under `Regions` — | Region label | Location | Best for |
10. (`goal`) under `Regions` — | --- | --- | --- |
11. (`goal`) under `Regions` — | South Africa | Cape Town | Users in southern Africa |
12. (`goal`) under `Regions` — | Europe | North | Users in continental Europe |
13. (`goal`) under `Regions` — | United Kingdom | South | Users in the UK and Ireland |
14. (`goal`) under `Regions` — Pick the region closest to most of your users to reduce latency.
15. (`goal`) under `Related` — {type: 'link', href: '/docs/shared/create-a-space', label: '🛠️ Create a Space', …
16. (`goal`) under `Related` — {type: 'link', href: '/platform/spaces/what-is-a-space', label: '💡 What is a Spa…
17. (`goal`) under `Related` — {type: 'link', href: '/platform/spaces/how-do-i-add-remove-a-space', label: '🛠️ …
18. (`goal`) under `Troubleshooting` — Confirm you are signed in to the correct Team and Space, then run through the st…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### what-regions-does-code-capsules-support-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/platform/regions/what-regions-does-code-capsules-support.md` to match how_to_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Prerequisites — DocCardList cards
- ## Deploy your … — numbered bold steps to goal
- ## Troubleshooting — `<details>` entries
