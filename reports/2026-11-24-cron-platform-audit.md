# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T07:09:07Z**  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

| Feature | Guide on main | Doc type | Format check | Walkthrough | Goal reached |
|---------|---------------|----------|--------------|-------------|--------------|
| Create Angular frontend capsule | yes (`docs/b/angular.md`) | How-to | fail | not run (format fail) | **no** |
| Create React frontend capsule | yes (`docs/b/react.md`) | How-to | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | no | — | n/a | exploratory | **no** |
| Create NextJS backend capsule | no | — | n/a | exploratory | **no** |
| Create Static HTML capsule | no | — | n/a | exploratory | **no** |
| Create Svelte frontend capsule | no | — | n/a | exploratory | **no** |

**Manifest goals reached (all features): no**

## Cross-cutting findings

1. How-to guides on `main` are `docs/b/angular.md` and `docs/b/react.md`. Both fail format Check 3 because screenshot files are absent from `static/`.
2. Both how-tos place **Log in** inside `## Steps` (format Check 1 fail). Walkthroughs were not run per `FORMAT.MD`.
3. Quick Start is at `/dash/overview/quick-start`. **Create New Capsule** does not appear on that page in this run. `docs/b/react.md` still describes that path; live UI uses **Deploy Now** per framework card (verified for Angular, React, Vue, Static HTML, Node.js).
4. No **Svelte** Quick Start card. No **Next.js** card; backend wizard copy lists Node/Java/Go/Python only.
5. Four of six manifest features have no matching how-to on `main`.

## Format reports

- [2026-11-24-format-angular.md](./2026-11-24-format-angular.md) (+ `.json`)
- [2026-11-24-format-react.md](./2026-11-24-format-react.md) (+ `.json`)

## Walkthrough / exploratory reports

- [2026-11-24-create-vue-frontend-capsule.md](./2026-11-24-create-vue-frontend-capsule.md)
- [2026-11-24-create-nextjs-backend-capsule.md](./2026-11-24-create-nextjs-backend-capsule.md)
- [2026-11-24-create-static-html-capsule.md](./2026-11-24-create-static-html-capsule.md)
- [2026-11-24-create-svelte-frontend-capsule.md](./2026-11-24-create-svelte-frontend-capsule.md)

## Issue screenshots (this run)

Captured under `static/img/guides/explore-*` for exploratory findings only (not linked from how-to pages).