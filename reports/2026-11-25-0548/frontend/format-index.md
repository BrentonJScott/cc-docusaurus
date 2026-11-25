# Format report — frontend

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/frontend/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Frontend & Static Site Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`instruction`) under `(intro)` — Framework and static-site deployment guides for Frontend Capsules on Code
2. (`instruction`) under `(intro)` — Framework and static-site deployment guides for Frontend Capsules on Code Capsul…
3. (`instruction`) under `Overview` — Most guides deploy a **Frontend Capsule** with **Static** hosting. The server-re…
4. (`fact`) under `Deployment guides` — | Guide | Capsule type | Demo repository |
5. (`fact`) under `Deployment guides` — | --- | --- | --- |
6. (`fact`) under `Deployment guides` — | Angular | Frontend (static) | `codecapsules-io/demo-angular` |
7. (`fact`) under `Deployment guides` — | React | Frontend (static) | `codecapsules-io/demo-react` |
8. (`fact`) under `Deployment guides` — | Vue | Frontend (static) | `codecapsules-io/demo-vue` |
9. (`fact`) under `Deployment guides` — | Svelte | Frontend (static) | `codecapsules-io/demo-svelte` |
10. (`fact`) under `Deployment guides` — | Static HTML | Frontend (static) | `codecapsules-io/demo-html` |
11. (`fact`) under `Deployment guides` — | Next.js (server-rendered) | Backend | `codecapsules-io/demo-nextjs` |
12. (`instruction`) under `Related` — {type: 'link', href: '/frontend/angular', label: '🛠️ Angular', description: 'Dep…
13. (`instruction`) under `Related` — {type: 'link', href: '/frontend/react', label: '🛠️ React', description: 'Deploy …
14. (`instruction`) under `Related` — {type: 'link', href: '/frontend/vue', label: '🛠️ Vue', description: 'Deploy a Vu…
15. (`instruction`) under `Related` — {type: 'link', href: '/frontend/svelte', label: '🛠️ Svelte', description: 'Deplo…
16. (`instruction`) under `Related` — {type: 'link', href: '/frontend/static-html', label: '🛠️ Static HTML', descripti…
17. (`instruction`) under `Related` — {type: 'link', href: '/frontend/next.js', label: '🛠️ Next.js', description: 'Dep…
18. (`instruction`) under `Related` — {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '📋 Stati…
19. (`fact`) under `Related` — {type: 'link', href: '/products/frontend-capsule/supported-runtimes', label: '📋 …

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | pass | — |
| Format and style | fail | See tickets |

## Tickets

### frontend-1
- **Type:** Format fix
- **Title:** Align page with template section order
- **Problem:** Section headings or content do not fully match the current template.
- **Rule:** reference_format.md
- **Change:** Restructure headings and content to match the template section table.
- **Done when:** Template section check passes.

## Proposed outline

(Rewrite `docs/frontend/index.md` to match reference_format.md — see tickets above.)

- Frontmatter + DocCardList import + `#` title + description
- ## Overview
- ## Subject tables
- ## Related — 2+ cards
