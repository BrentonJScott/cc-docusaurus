# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T07:22:37Z** (extended run; initial pass **2026-11-24T07:09:07Z**)  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (9 features)

## Manifest goals reached

| Feature | Guide on main | Doc type | Format check | Walkthrough / read | Goal reached |
|---------|---------------|----------|--------------|-------------------|--------------|
| Create Angular frontend capsule | yes (`docs/b/angular.md`) | How-to | fail | not run (format fail) | **no** |
| Create React frontend capsule | yes (`docs/b/react.md`) | How-to | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | no | — | n/a | exploratory | **no** |
| Create NextJS backend capsule | no | — | n/a | exploratory | **no** |
| Create Static HTML capsule | no | — | n/a | exploratory | **no** |
| Create Svelte frontend capsule | no | — | n/a | exploratory | **no** |
| Build a MERN job board | yes (`docs/d/build-a-mern-job-board.md`) | Tutorial | fail | not run (format fail) | **no** |
| How does pricing work | yes (`docs/c/how-does-the-pricing-work.md`) | Reference | pass | read audit | **yes** |
| Enterprise AWS | yes (`docs/a/enterprise-aws.md`) | Explanation | fail | read audit | **no** |

**Manifest goals reached (all features): no**

## Cross-cutting findings

1. How-to guides on `main` for Angular and React (`docs/b/angular.md`, `docs/b/react.md`) both fail format Check 1 (**Log in** inside **Steps**) and Check 3 (screenshot files under `static/img/guides/create-*` are absent on this branch). Walkthroughs were not run per `FORMAT.MD`.
2. Quick Start at `/dash/overview/quick-start` uses **Deploy Now** per framework card. `docs/b/react.md` still describes **Create New Capsule** + **React** (verified in earlier exploratory pass).
3. Four frontend capsule features (Vue, Next.js, Static HTML, Svelte) have no matching how-to on `main`.
4. MERN tutorial fails format on missing prerequisite guide (`/docs/guides/mern-stack`) and missing `job-board-ui.png`.
5. Enterprise AWS explanation fails format and read coherence due to `Content needed` placeholders.
6. Pricing reference passes format; read audit reached the manifest goal with a minor gap (MongoDB pricing not listed).

## Format reports

- [2026-11-24-format-angular.md](./2026-11-24-format-angular.md) (+ `.json`)
- [2026-11-24-format-react.md](./2026-11-24-format-react.md) (+ `.json`)
- [2026-11-24-format-build-a-mern-job-board.md](./2026-11-24-format-build-a-mern-job-board.md) (+ `.json`)
- [2026-11-24-format-how-does-the-pricing-work.md](./2026-11-24-format-how-does-the-pricing-work.md) (+ `.json`)
- [2026-11-24-format-enterprise-aws.md](./2026-11-24-format-enterprise-aws.md) (+ `.json`)

## Walkthrough / exploratory / read reports

- [2026-11-24-create-vue-frontend-capsule.md](./2026-11-24-create-vue-frontend-capsule.md)
- [2026-11-24-create-nextjs-backend-capsule.md](./2026-11-24-create-nextjs-backend-capsule.md)
- [2026-11-24-create-static-html-capsule.md](./2026-11-24-create-static-html-capsule.md)
- [2026-11-24-create-svelte-frontend-capsule.md](./2026-11-24-create-svelte-frontend-capsule.md)
- [2026-11-24-how-does-the-pricing-work.md](./2026-11-24-how-does-the-pricing-work.md)
- [2026-11-24-enterprise-aws.md](./2026-11-24-enterprise-aws.md)

## Issue screenshots (this run)

Exploratory screenshots under `static/img/guides/explore-*` (Vue, Static HTML, Next.js, Svelte). How-to screenshot assets referenced by Angular/React guides are not present under `static/` on this branch.