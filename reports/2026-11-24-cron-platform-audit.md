# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T06:52:19Z** (cron trigger)  
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

1. How-to guides live under `docs/b/` while templates and examples still reference `docs/guides/`. Angular and React fail format Check 3 because screenshot files were removed from `static/`.
2. Quick Start is at `/dash/overview/quick-start`. **Create New Capsule** does not appear on Quick Start in this run (`createNewCapsule` count 0). The React how-to still describes that path; live UI uses **Deploy Now** per framework card (verified for Angular, React, Vue, Static HTML → `capsuleType=frontend`).
3. No **Svelte** Quick Start card. No **Next.js** card label; backend wizard first screen mentions Node/Java/Go/Python only.
4. Four of six manifest features have no matching how-to on `main`.

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