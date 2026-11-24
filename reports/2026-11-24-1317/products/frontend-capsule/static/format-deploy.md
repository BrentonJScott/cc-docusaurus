# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/frontend-capsule/static/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a Static Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Prerequisites` — - A [Code Capsules](/docs/shared/create-an-account) account with a Team and Space
2. (`goal`) under `Prerequisites` — - A repository with a site that builds to a folder of static files, or that already contains your `index.html`
3. (`goal`) under `Prerequisites` — - Your version control account linked under [Connect Version Control](/platform/account/connect-version-control/)
4. (`goal`) under `Prerequisites` — - For the **Paid** plan, a payment method on your Team. The **Free** plan doesn't need one.
5. (`goal`) under `How your site is served` — - **HTTPS**: every address gets its own SSL certificate, including [custom domains](/products/frontend-capsule/custom-do
6. (`goal`) under `How your site is served` — - **SPA routing**: requests for paths that don't match a file return your `index.html`, so client-side routers such as R
7. (`goal`) under `How your site is served` — - **Caching**: HTML pages are always revalidated, so visitors get your latest deploy. Assets with a content hash in the 
8. (`goal`) under `How your site is served` — - **Compression**: responses are compressed for faster loading.
9. (`goal`) under `How your site is served` — - **Safe deploys**: new assets are uploaded before your HTML is switched over, so visitors don't load a page that points
10. (`goal`) under `Next steps` — - [Free and Paid Plans](/products/frontend-capsule/static/plans/): limits, monthly traffic, and upgrading
11. (`goal`) under `Next steps` — - [Configure](/products/frontend-capsule/configure/): change build settings and environment variables
12. (`goal`) under `Next steps` — - [Custom Domains](/products/frontend-capsule/custom-domains/): serve your site from your own domain
13. (`goal`) under `Next steps` — - [Framework Guides](/products/frontend-capsule/deploy/): React, Angular, Vue, Svelte, and static HTML

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

(Rewrite `docs/products/frontend-capsule/static/deploy.md` to match how_to_format.md — see tickets above.)
