# Create static html capsule — platform audit

- **Run:** 2026-11-23T07:10:00Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** _No guide on `main` (exploratory audit)_
- **Manifest goal reached:** no

## Actions taken

1. **not testable** — No guide on main. _Actual:_ Manual exploration for static site capsule
2. **pass** — Capsule Details: capsule type, team, space, Next. _Actual:_ Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw
3. **pass** — Hosting: Static, Next. _Actual:_ Static hosting selected
4. **fail** — Plan: Starter, Next. _Actual:_ Guide expects Starter; screen shows Free plan ([failure-step-4.jpg](/img/guides/create-static-html-capsule/failure-step-4.jpg))
5. **fail** — Git: html, branch main. _Actual:_ Selected first available repo (explore path); Branch main not found:  main  ([failure-step-5.jpg](/img/guides/create-static-html-capsule/failure-step-5.jpg))
6. **pass** — Build: npm run build, output dist. _Actual:_ Filled build fields where visible
7. **pass** — Create Capsule. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0309bf3f-5eb2-abfe-6607-72117b5768f2/details
8. **blocked** — Goal: building on Deploy → Builds. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0309bf3f-5eb2-abfe-6607-72117b5768f2/details; No Building/Queued/In progress on Deploy → Builds ([failure-step-8.jpg](/img/guides/create-static-html-capsule/failure-step-8.jpg))

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | not testable | No guide on main | Manual exploration for static site capsule | — |
| 2 | pass | Capsule Details: capsule type, team, space, Next | Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw | — |
| 3 | pass | Hosting: Static, Next | Static hosting selected | — |
| 4 | fail | Plan: Starter, Next | Guide expects Starter; screen shows Free plan | [failure-step-4.jpg](/img/guides/create-static-html-capsule/failure-step-4.jpg) |
| 5 | fail | Git: html, branch main | Selected first available repo (explore path); Branch main not found:  main  | [failure-step-5.jpg](/img/guides/create-static-html-capsule/failure-step-5.jpg) |
| 6 | pass | Build: npm run build, output dist | Filled build fields where visible | — |
| 7 | pass | Create Capsule | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0309bf3f-5eb2-abfe-6607-72117b5768f2/details | — |
| 8 | blocked | Goal: building on Deploy → Builds | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0309bf3f-5eb2-abfe-6607-72117b5768f2/details; No Building/Queued/In progress on Deploy → Builds | [failure-step-8.jpg](/img/guides/create-static-html-capsule/failure-step-8.jpg) |

## Mismatches / issues

- **Action 4 (fail):** Guide: "Plan: Starter, Next". Platform: Guide expects Starter; screen shows Free plan.
- **Action 5 (fail):** Guide: "Git: html, branch main". Platform: Selected first available repo (explore path); Branch main not found:  main .
- **Action 8 (blocked):** Guide: "Goal: building on Deploy → Builds". Platform: URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0309bf3f-5eb2-abfe-6607-72117b5768f2/details; No Building/Queued/In progress on Deploy → Builds.

## Suggested fixes

- Add a new guide on `main` under `docs/guides/` covering login, Quick Start **Deploy Now** (or capsule creation entry), capsule details, hosting/plan, Git connect, build settings, and confirming **Deploy → Builds** shows an in-progress build.
- Add explicit Quick Start or wizard entry for static HTML/sites; avoid relying on the word "static" inside unrelated Frontend copy.