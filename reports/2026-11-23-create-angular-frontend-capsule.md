# Create angular frontend capsule — platform audit

> **Note:** `FORMAT.MD` failed for `docs/guides/angular.md` on this run; walkthrough was not repeated. This file retains the prior legacy-guide exploratory record for reference only. See [format report](./2026-11-23-format-create-angular-frontend-capsule.md).

- **Run:** 2026-11-23T08:35:13Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** docs/guides/angular.md
- **Manifest goal reached:** no

## Actions taken

1. **not testable** — Fork codecapsules-io/demo-angular on GitHub. _Actual:_ GitHub fork not performed in audit run
2. **not testable** — Sign up on codecapsules.io production. _Actual:_ Using existing test-platform account instead
3. **not testable** — Navigate codecapsules.io Spaces tab after signup. _Actual:_ N/A on test-platform path
4. **pass** — Log in to Code Capsules (adapted to test-platform). _Actual:_ At https://test-platform.codecapsules.io/dash/overview/quick-start
5. **pass** — Spaces tab; yellow + to add Space. _Actual:_ Opened Spaces and activated + control ([step-5.jpg](/img/guides/create-angular-frontend-capsule/step-5.jpg))
6. **pass** — Create Frontend Capsule (adapted: Deploy Now Angular). _Actual:_ Wizard https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend
7. **pass** — Capsule Details: capsule type, team, space, Next. _Actual:_ Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw
8. **pass** — Hosting: Static, Next. _Actual:_ Static hosting selected
9. **fail** — Plan: Starter, Next. _Actual:_ Guide expects Starter; screen shows Free plan ([failure-step-9.jpg](/img/guides/create-angular-frontend-capsule/failure-step-9.jpg))
10. **fail** — Git: demo-angular, branch main. _Actual:_ Selected first available repo (explore path); Branch main not found:  main ,  cursor/app-features-documentation-83e8 ,  docs/documented-features ,  docs/sync-documented-features-2026-11-19 ,  fix/recipe-search-new-scale-2026-11-19 ,  fix/search-and-doc-features-2026-11-19  ([failure-step-10.jpg](/img/guides/create-angular-frontend-capsule/failure-step-10.jpg))
11. **pass** — Build: npm run build, output dist/ng4-complete-guide. _Actual:_ Filled build fields where visible
12. **pass** — Create Capsule. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/f051eea1-d58e-9453-a5a6-fb6ae3c3d338/details
13. **blocked** — Goal: building on Deploy → Builds. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/f051eea1-d58e-9453-a5a6-fb6ae3c3d338/details; No Building/Queued/In progress on Deploy → Builds ([failure-step-13.jpg](/img/guides/create-angular-frontend-capsule/failure-step-13.jpg))

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | not testable | Fork codecapsules-io/demo-angular on GitHub | GitHub fork not performed in audit run | — |
| 2 | not testable | Sign up on codecapsules.io production | Using existing test-platform account instead | — |
| 3 | not testable | Navigate codecapsules.io Spaces tab after signup | N/A on test-platform path | — |
| 4 | pass | Log in to Code Capsules (adapted to test-platform) | At https://test-platform.codecapsules.io/dash/overview/quick-start | — |
| 5 | pass | Spaces tab; yellow + to add Space | Opened Spaces and activated + control | [step-5.jpg](/img/guides/create-angular-frontend-capsule/step-5.jpg) |
| 6 | pass | Create Frontend Capsule (adapted: Deploy Now Angular) | Wizard https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend | — |
| 7 | pass | Capsule Details: capsule type, team, space, Next | Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw | — |
| 8 | pass | Hosting: Static, Next | Static hosting selected | — |
| 9 | fail | Plan: Starter, Next | Guide expects Starter; screen shows Free plan | [failure-step-9.jpg](/img/guides/create-angular-frontend-capsule/failure-step-9.jpg) |
| 10 | fail | Git: demo-angular, branch main | Selected first available repo (explore path); Branch main not found:  main ,  cursor/app-features-documentation-83e8 ,  docs/documented-features ,  docs/sync-documented-features-2026-11-19 ,  fix/recipe-search-new-scale-2026-11-19 ,  fix/search-and-doc-features-2026-11-19  | [failure-step-10.jpg](/img/guides/create-angular-frontend-capsule/failure-step-10.jpg) |
| 11 | pass | Build: npm run build, output dist/ng4-complete-guide | Filled build fields where visible | — |
| 12 | pass | Create Capsule | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/f051eea1-d58e-9453-a5a6-fb6ae3c3d338/details | — |
| 13 | blocked | Goal: building on Deploy → Builds | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/f051eea1-d58e-9453-a5a6-fb6ae3c3d338/details; No Building/Queued/In progress on Deploy → Builds | [failure-step-13.jpg](/img/guides/create-angular-frontend-capsule/failure-step-13.jpg) |

## Mismatches / issues

- **Action 9 (fail):** Guide: "Plan: Starter, Next". Platform: Guide expects Starter; screen shows Free plan.
- **Action 10 (fail):** Guide: "Git: demo-angular, branch main". Platform: Selected first available repo (explore path); Branch main not found:  main ,  cursor/app-features-documentation-83e8 ,  docs/documented-features ,  docs/sync-documented-features-2026-11-19 ,  fix/recipe-search-new-scale-2026-11-19 ,  fix/search-and-doc-features-2026-11-19 .
- **Action 13 (blocked):** Guide: "Goal: building on Deploy → Builds". Platform: URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/f051eea1-d58e-9453-a5a6-fb6ae3c3d338/details; No Building/Queued/In progress on Deploy → Builds.

## Suggested fixes

- Reconcile production narrative (codecapsules.io signup, yellow **+** in Spaces) with the test-platform Quick Start wizard used today.
- Document test-platform Spaces UI and capsule creation instead of GitBook-era screenshots.
- Align plan names and Git repo/branch steps with the current wizard (team repos, **main** vs legacy branch names).