# Create vue frontend capsule — platform audit

- **Run:** 2026-11-23T08:35:13Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** _No guide on `main` (exploratory audit)_
- **Manifest goal reached:** no

## Actions taken

2. **pass** — Explore: open dashboard to deploy Vue. _Actual:_ Logged in at https://test-platform.codecapsules.io/dash/overview/quick-start
3. **pass** — Quick Start Deploy Now for Vue. _Actual:_ Wizard at https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend
4. **pass** — Capsule Details: capsule type, team, space, Next. _Actual:_ Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw
5. **pass** — Hosting: Static, Next. _Actual:_ Static hosting selected
6. **fail** — Plan: Starter, Next. _Actual:_ Guide expects Starter; screen shows Free plan ([failure-step-6.jpg](/img/guides/create-vue-frontend-capsule/failure-step-6.jpg))
7. **fail** — Git: vue, branch main. _Actual:_ Selected first available repo (explore path); Branch main not found:  main  ([failure-step-7.jpg](/img/guides/create-vue-frontend-capsule/failure-step-7.jpg))
8. **pass** — Build: npm run build, output dist. _Actual:_ Filled build fields where visible
9. **pass** — Create Capsule. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0e108a2d-92a2-b66b-37a6-8d932dda5e25/details
10. **blocked** — Goal: building on Deploy → Builds. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0e108a2d-92a2-b66b-37a6-8d932dda5e25/details; No Building/Queued/In progress on Deploy → Builds ([failure-step-10.jpg](/img/guides/create-vue-frontend-capsule/failure-step-10.jpg))

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 2 | pass | Explore: open dashboard to deploy Vue | Logged in at https://test-platform.codecapsules.io/dash/overview/quick-start | — |
| 3 | pass | Quick Start Deploy Now for Vue | Wizard at https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend | — |
| 4 | pass | Capsule Details: capsule type, team, space, Next | Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw | — |
| 5 | pass | Hosting: Static, Next | Static hosting selected | — |
| 6 | fail | Plan: Starter, Next | Guide expects Starter; screen shows Free plan | [failure-step-6.jpg](/img/guides/create-vue-frontend-capsule/failure-step-6.jpg) |
| 7 | fail | Git: vue, branch main | Selected first available repo (explore path); Branch main not found:  main  | [failure-step-7.jpg](/img/guides/create-vue-frontend-capsule/failure-step-7.jpg) |
| 8 | pass | Build: npm run build, output dist | Filled build fields where visible | — |
| 9 | pass | Create Capsule | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0e108a2d-92a2-b66b-37a6-8d932dda5e25/details | — |
| 10 | blocked | Goal: building on Deploy → Builds | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0e108a2d-92a2-b66b-37a6-8d932dda5e25/details; No Building/Queued/In progress on Deploy → Builds | [failure-step-10.jpg](/img/guides/create-vue-frontend-capsule/failure-step-10.jpg) |

## Mismatches / issues

- **Action 6 (fail):** Guide: "Plan: Starter, Next". Platform: Guide expects Starter; screen shows Free plan.
- **Action 7 (fail):** Guide: "Git: vue, branch main". Platform: Selected first available repo (explore path); Branch main not found:  main .
- **Action 10 (blocked):** Guide: "Goal: building on Deploy → Builds". Platform: URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/0e108a2d-92a2-b66b-37a6-8d932dda5e25/details; No Building/Queued/In progress on Deploy → Builds.

## Suggested fixes

- Add a new guide on `main` under `docs/guides/` covering login, Quick Start **Deploy Now** (or capsule creation entry), capsule details, hosting/plan, Git connect, build settings, and confirming **Deploy → Builds** shows an in-progress build.