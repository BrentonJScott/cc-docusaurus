# Format report — products

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/products/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** App, Database & WordPress Hosting Products
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`instruction`) under `(intro)` — Product guides for deploying and operating each Capsule type on Code Capsules.
2. (`fact`) under `(intro)` — title: "App, Database & WordPress Hosting Products"
3. (`instruction`) under `(intro)` — Product guides for deploying and operating each Capsule type on Code Capsules.
4. (`instruction`) under `Overview` — Each Capsule type has deploy, configure, scale, monitor, and logs pages under it…
5. (`fact`) under `Capsule types` — | Capsule type | Entry guide |
6. (`fact`) under `Capsule types` — | --- | --- |
7. (`fact`) under `Capsule types` — | Backend | [/products/backend-capsule/index](/products/backend-capsule/index) |
8. (`fact`) under `Capsule types` — | Docker | [/products/docker-capsule/index](/products/docker-capsule/index) |
9. (`fact`) under `Capsule types` — | Frontend | [/products/frontend-capsule/index](/products/frontend-capsule/index…
10. (`fact`) under `Capsule types` — | Database | [/products/database-capsule/index](/products/database-capsule/index…
11. (`instruction`) under `Capsule types` — | Storage | [/products/storage-capsule/deploy](/products/storage-capsule/deploy)…
12. (`instruction`) under `Capsule types` — | WordPress | [/products/wordpress-capsule/deploy](/products/wordpress-capsule/d…
13. (`instruction`) under `Capsule types` — | Agent | [/products/agent-capsule/deploy](/products/agent-capsule/deploy) |
14. (`instruction`) under `Related` — {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend depl…
15. (`instruction`) under `Related` — {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Fron…
16. (`instruction`) under `Related` — {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL…
17. (`fact`) under `Related` — {type: 'link', href: '/products/alerting', label: '🛠️ Alerting', description: 'N…
18. (`fact`) under `Related` — {type: 'link', href: '/platform/index', label: '📋 Platform guides', description:…

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### products-1
- **Type:** Format fix
- **Title:** Align page with template section order
- **Problem:** Section headings or content do not fully match the current template.
- **Rule:** reference_format.md
- **Change:** Restructure headings and content to match the template section table.
- **Done when:** Template section check passes.

## Proposed outline

(Rewrite `docs/products/index.md` to match reference_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Overview
- ## Subject tables
- ## Related — 2+ cards
