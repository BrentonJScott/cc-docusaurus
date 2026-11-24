# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T07:58:00Z** (extended run; prior passes **2026-11-24T07:09:07Z** / **07:22:37Z**)  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (**13 features** after sync)

## Manifest goals reached

| Feature | Guide on main | Doc type | Format check | Walkthrough / read | Goal reached |
|---------|---------------|----------|--------------|-------------------|--------------|
| Create a Code Capsules account | yes (`docs/e/create-an-account.md`) | How-to | fail | not run (format fail) | **no** |
| Fork a demo repo | yes (`docs/e/fork-a-demo-repo.md`) | How-to | fail | not run (format fail) | **no** |
| Create a Space | yes (`docs/e/create-a-space.md`) | How-to | fail | not run (format fail) | **no** |
| Configure Git for Code Capsules | yes (`docs/e/configure-git-for-code-capsules.md`) | How-to | fail | not run (format fail) | **no** |
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

1. `cc-site/DOCUMENTED_FEATURES.MD` now lists four shared setup features with goals; matching pages live under `docs/e/` with `/docs/shared/…` slugs. All four fail format (missing **Prerequisites** / **Troubleshooting**, plain lists instead of `### Step N`). Walkthroughs were not run per `FORMAT.MD`.
2. **Configure Git** manifest goal cites the **Repos** tab; `docs/e/configure-git-for-code-capsules.md` ends on the **Git Repository** dropdown in the capsule wizard. Needs product/docs alignment (ticket in format report).
3. How-to guides for Angular and React (`docs/b/angular.md`, `docs/b/react.md`) still fail format Check 1 (**Log in** inside **Steps**) and Check 3 (screenshot files under `static/img/guides/create-*` are not tracked on this branch). Walkthroughs were not run.
4. Quick Start at `/dash/overview/quick-start` uses **Deploy Now** per framework card. `docs/b/react.md` still describes **Create New Capsule** + **React** (exploratory reports).
5. Four frontend capsule features (Vue, Next.js, Static HTML, Svelte) have no matching how-to on `main`.
6. MERN tutorial fails format on missing prerequisite guide and assets.
7. Enterprise AWS explanation fails format and read coherence due to `Content needed` placeholders.
8. Pricing reference passes format; read audit reached the manifest goal with a minor gap (MongoDB pricing not listed).

## Format reports

### Shared / setup (`docs/e/`)

- [2026-11-24-format-create-an-account.md](./2026-11-24-format-create-an-account.md) (+ `.json`)
- [2026-11-24-format-fork-a-demo-repo.md](./2026-11-24-format-fork-a-demo-repo.md) (+ `.json`)
- [2026-11-24-format-create-a-space.md](./2026-11-24-format-create-a-space.md) (+ `.json`)
- [2026-11-24-format-configure-git-for-code-capsules.md](./2026-11-24-format-configure-git-for-code-capsules.md) (+ `.json`)

### Capsules, tutorial, reference, explanation

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