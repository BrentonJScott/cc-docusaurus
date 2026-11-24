# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T06:13:03Z**  
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

1. How-to guides live under `docs/b/` while `how_to_format.md` expects `docs/guides/`; both guides fail the doc-type check.
2. Screenshot assets for Angular and React guides were removed from `static/` on `main`; both guides fail Check 3.
3. Quick Start URL is `/dash/overview/quick-start`, not `/quick-start` (404).
4. **Static HTML** **Deploy Now** opens the frontend **New Capsule** wizard; **Svelte** has no Quick Start card.
5. **Next.js** is not named on Quick Start; backend flow starts via **Node.js** or `capsuleType=backend`.
6. React guide still describes **Create New Capsule** + **React**; live entry is Quick Start **Deploy Now** (per `angular.md`).

## Format reports

- [2026-11-24-format-angular.md](./2026-11-24-format-angular.md)
- [2026-11-24-format-react.md](./2026-11-24-format-react.md)

## Walkthrough / exploratory reports

- [2026-11-24-create-vue-frontend-capsule.md](./2026-11-24-create-vue-frontend-capsule.md)
- [2026-11-24-create-nextjs-backend-capsule.md](./2026-11-24-create-nextjs-backend-capsule.md)
- [2026-11-24-create-static-html-capsule.md](./2026-11-24-create-static-html-capsule.md)
- [2026-11-24-create-svelte-frontend-capsule.md](./2026-11-24-create-svelte-frontend-capsule.md)