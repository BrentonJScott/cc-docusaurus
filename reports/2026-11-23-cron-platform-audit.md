# Cron platform audit — 2026-11-23

Run timestamp: **2026-11-23T08:35:13Z**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

| Feature | Guide on main | Format check | Walkthrough | Goal reached |
|---------|---------------|--------------|-------------|--------------|
| Create React frontend capsule | yes | fail | run | **no** |
| Create Angular frontend capsule | yes | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | no | n/a | exploratory | **no** |
| Create NextJS backend capsule | no | n/a | exploratory | **no** |
| Create Static HTML capsule | no | n/a | exploratory | **no** |
| Create Svelte frontend capsule | no | n/a | exploratory | **no** |

**Manifest goals reached (all features): no**

## Cross-cutting findings

1. Dashboard entry is **Quick Start** framework cards with **Deploy Now**, not **Create New Capsule** + framework picker (React guide).
2. In this run, **Deploy Now** on the React card did not leave Quick Start during automated testing (URL stayed on `…/quick-start`); direct navigation to `/new/capsule?capsuleType=frontend` still opens the wizard.
3. Plan step shows **Free** on the test platform; React guide specifies **Starter**.
4. Branch selector lists **main** with surrounding whitespace; guides that require **master** fail when that option is absent.
5. `docs/guides/angular.md` fails `STYLE.MD` / `FORMAT.MD`; no walkthrough against the rewritten structure this run.
6. No guides on `main` for Vue, Next.js, or Static HTML; Svelte has no Quick Start card (confirmed on Quick Start after login).

## Format reports

- [2026-11-23-format-create-react-frontend-capsule.md](./2026-11-23-format-create-react-frontend-capsule.md)
- [2026-11-23-format-create-angular-frontend-capsule.md](./2026-11-23-format-create-angular-frontend-capsule.md)

## Walkthrough / exploratory reports

- [2026-11-23-create-react-frontend-capsule.md](./2026-11-23-create-react-frontend-capsule.md)
- [2026-11-23-create-vue-frontend-capsule.md](./2026-11-23-create-vue-frontend-capsule.md)
- [2026-11-23-create-nextjs-backend-capsule.md](./2026-11-23-create-nextjs-backend-capsule.md)
- [2026-11-23-create-static-html-capsule.md](./2026-11-23-create-static-html-capsule.md)
- [2026-11-23-create-svelte-frontend-capsule.md](./2026-11-23-create-svelte-frontend-capsule.md)