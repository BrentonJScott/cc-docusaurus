# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/frontend-capsule/container/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a Container Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Prerequisites` — - A [Code Capsules](/docs/shared/create-an-account) account with a Team and Space
2. (`goal`) under `Prerequisites` — - A payment method on your Team
3. (`goal`) under `Prerequisites` — - A repository with a site that builds to a folder of static files, or that already contains your `index.html`
4. (`goal`) under `Prerequisites` — - Your version control account linked under [Connect Version Control](/platform/account/connect-version-control/)
5. (`goal`) under `How your site is served` — - Serves your site over HTTPS on the capsule's address and any [custom domains](/products/frontend-capsule/custom-domain
6. (`goal`) under `How your site is served` — - Returns your `index.html` for paths that don't match a file, so client-side routers such as React Router and Vue Route
7. (`goal`) under `How your site is served` — - Compresses responses for faster loading
8. (`goal`) under `Next steps` — - [Scale](/products/frontend-capsule/scale/): change CPU, memory, and replicas
9. (`goal`) under `Next steps` — - [Monitor](/products/frontend-capsule/monitor/) and [Logs](/products/frontend-capsule/logs/): watch performance and tra
10. (`goal`) under `Next steps` — - [Configure](/products/frontend-capsule/configure/): change build settings and environment variables
11. (`goal`) under `Next steps` — - [Custom Domains](/products/frontend-capsule/custom-domains/): serve your site from your own domain
12. (`goal`) under `Next steps` — - [Framework Guides](/products/frontend-capsule/deploy/): React, Angular, Vue, Svelte, and static HTML

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### deploy-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** how_to_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### deploy-2
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### deploy-3
- **Type:** Format fix
- **Title:** Use DocCardList for prerequisites
- **Problem:** Prerequisites not a DocCardList.
- **Rule:** writing_style.md
- **Change:** Replace bullet prerequisites with DocCardList cards linking to shared pages.
- **Done when:** Prerequisites use DocCardList only.

### deploy-4
- **Type:** Wrong doc type
- **Title:** How-to has non-how-to sections
- **Problem:** Extra sections: Next steps
- **Rule:** how_to_format.md Sections
- **Change:** Remove or retype page.
- **Done when:** Only template sections remain.

## Proposed outline

(Rewrite `docs/products/frontend-capsule/container/deploy.md` to match how_to_format.md — see tickets above.)
