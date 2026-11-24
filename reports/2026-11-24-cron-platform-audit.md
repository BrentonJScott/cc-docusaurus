# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T07:06:55Z**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

| Feature | Guide on main | Format check | Walkthrough | Goal reached |
|---------|---------------|--------------|-------------|--------------|
| Create Angular frontend capsule | `docs/b/angular.md` | fail | not run (format fail) | **no** |
| Create React frontend capsule | `docs/b/react.md` | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | no | n/a | exploratory (login blocked) | **no** |
| Create NextJS backend capsule | no | n/a | exploratory (login blocked) | **no** |
| Create Static HTML capsule | no | n/a | exploratory (login blocked) | **no** |
| Create Svelte frontend capsule | no | n/a | exploratory (login blocked) | **no** |

**Manifest goals reached (all features): no**

## Cross-cutting findings

1. How-to guides for Angular and React follow the new `how_to_format.md` structure on `docs/b/`, but every guide screenshot under `static/img/guides/` is still missing (format Check 3 fail).
2. React Step 3 omits **Space** selection although Space is a prerequisite (format Check 1 fail).
3. Vue, Next.js backend, Static HTML, and Svelte have no matching how-to on `main` (only mentioned on `docs/b/index.md`).
4. This run could not authenticate to the test platform: new signups require email verification and no verified automation account was available. See [2026-11-24-exploratory-common-login.md](./2026-11-24-exploratory-common-login.md).

## Format reports

- [2026-11-24-format-angular.md](./2026-11-24-format-angular.md) (+ `.json`)
- [2026-11-24-format-react.md](./2026-11-24-format-react.md) (+ `.json`)

## Walkthrough / exploratory reports

- Angular / React: walkthrough skipped (`FORMAT.MD` format gate).
- [2026-11-24-create-vue-frontend-capsule.md](./2026-11-24-create-vue-frontend-capsule.md)
- [2026-11-24-create-nextjs-backend-capsule.md](./2026-11-24-create-nextjs-backend-capsule.md)
- [2026-11-24-create-static-html-capsule.md](./2026-11-24-create-static-html-capsule.md)
- [2026-11-24-create-svelte-frontend-capsule.md](./2026-11-24-create-svelte-frontend-capsule.md)