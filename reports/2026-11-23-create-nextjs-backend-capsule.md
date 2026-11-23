# Create nextjs backend capsule — platform audit

- **Run:** 2026-11-23T08:35:13Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** _No guide on `main` (exploratory audit)_
- **Manifest goal reached:** no

## Actions taken

2. **pass** — Explore: open dashboard to deploy Node.js. _Actual:_ Logged in at https://test-platform.codecapsules.io/dash/overview/quick-start
3. **pass** — Quick Start Deploy Now for Node.js. _Actual:_ Wizard at https://test-platform.codecapsules.io/new/capsule?capsuleType=backend
4. **pass** — Capsule Details: capsule type, team, space, Next. _Actual:_ Selected Backend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw
5. **fail** — Plan: Starter, Next. _Actual:_ Starter plan card not found ([failure-step-5.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-5.jpg))
6. **fail** — Git: next, branch main. _Actual:_ Selected first available repo (explore path); Branch main not found:  main  ([failure-step-6.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-6.jpg))
7. **pass** — Build: npm run build, output .next. _Actual:_ Filled build fields where visible
8. **pass** — Create Capsule. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/7c35b4ed-605e-9b9f-9cac-0ee6e5dbb2d0/details
9. **pass** — Goal: building on Deploy → Builds. _Actual:_ URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/7c35b4ed-605e-9b9f-9cac-0ee6e5dbb2d0/details; Build in progress visible

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 2 | pass | Explore: open dashboard to deploy Node.js | Logged in at https://test-platform.codecapsules.io/dash/overview/quick-start | — |
| 3 | pass | Quick Start Deploy Now for Node.js | Wizard at https://test-platform.codecapsules.io/new/capsule?capsuleType=backend | — |
| 4 | pass | Capsule Details: capsule type, team, space, Next | Selected Backend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw | — |
| 5 | fail | Plan: Starter, Next | Starter plan card not found | [failure-step-5.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-5.jpg) |
| 6 | fail | Git: next, branch main | Selected first available repo (explore path); Branch main not found:  main  | [failure-step-6.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-6.jpg) |
| 7 | pass | Build: npm run build, output .next | Filled build fields where visible | — |
| 8 | pass | Create Capsule | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/7c35b4ed-605e-9b9f-9cac-0ee6e5dbb2d0/details | — |
| 9 | pass | Goal: building on Deploy → Builds | URL after create: https://test-platform.codecapsules.io/dash/spaces/customer-api-xkfw/capsules/7c35b4ed-605e-9b9f-9cac-0ee6e5dbb2d0/details; Build in progress visible | — |

## Mismatches / issues

- **Action 5 (fail):** Guide: "Plan: Starter, Next". Platform: Starter plan card not found.
- **Action 6 (fail):** Guide: "Git: next, branch main". Platform: Selected first available repo (explore path); Branch main not found:  main .

## Suggested fixes

- Add a new guide on `main` under `docs/guides/` covering login, Quick Start **Deploy Now** (or capsule creation entry), capsule details, hosting/plan, Git connect, build settings, and confirming **Deploy → Builds** shows an in-progress build.
- Publish a Next.js backend guide that states whether deploy uses **Node.js** backend capsules and which build/output fields apply.