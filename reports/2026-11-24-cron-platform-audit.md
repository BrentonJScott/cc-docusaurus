# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T06:40:42Z**  
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

1. How-to guides live under `docs/b/` while `how_to_format.md` expects `docs/guides/` (both Angular and React fail doc-type check).
2. Screenshot assets for Angular and React guides are missing from `static/` (Check 3 fail).
3. Quick Start is at `/dash/overview/quick-start`. **`Create New Capsule`** does not appear on Quick Start in this run (React guide still describes it).
4. Quick Start **Deploy Now** on **React**, **Vue**, and **Static HTML** opens `/new/capsule?capsuleType=frontend`.
5. No **Svelte** or **Next.js** Quick Start cards; backend wizard at `capsuleType=backend` does not mention Next.js on the first screen.
6. Four of six manifest features have no matching how-to on `main`.

## Format reports

- [2026-11-24-format-angular.md](./2026-11-24-format-angular.md) (+ `.json`)
- [2026-11-24-format-react.md](./2026-11-24-format-react.md) (+ `.json`)

## Walkthrough / exploratory reports

- [2026-11-24-create-vue-frontend-capsule.md](./2026-11-24-create-vue-frontend-capsule.md)
- [2026-11-24-create-nextjs-backend-capsule.md](./2026-11-24-create-nextjs-backend-capsule.md)
- [2026-11-24-create-static-html-capsule.md](./2026-11-24-create-static-html-capsule.md)
- [2026-11-24-create-svelte-frontend-capsule.md](./2026-11-24-create-svelte-frontend-capsule.md)