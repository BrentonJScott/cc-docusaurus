# Create react frontend capsule — platform audit

- **Run:** 2026-11-23T08:35:13Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** docs/guides/react.md
- **Manifest goal reached:** no

## Actions taken

1. **pass** — Open test-platform; Log in link if needed. _Actual:_ URL https://test-platform.codecapsules.io/auth/login
2. **pass** — Email and Password on Welcome back. _Actual:_ Credentials entered
3. **pass** — Click Log in. _Actual:_ Dashboard at https://test-platform.codecapsules.io/dash/overview/quick-start
4. **fail** — Create New Capsule and pick React. _Actual:_ No **Create New Capsule** control on Quick Start; **Deploy Now** on the React card was clicked but the URL stayed on `https://test-platform.codecapsules.io/dash/overview/quick-start` (wizard reached later via `/new/capsule?capsuleType=frontend` only to continue later steps). ([failure-step-4.jpg](/img/guides/create-react-frontend-capsule/failure-step-4.jpg))
5. **pass** — Capsule Details: capsule type, team, space, Next. _Actual:_ Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw
6. **pass** — Hosting: Static, Next. _Actual:_ Static hosting selected
7. **fail** — Plan: Starter, Next. _Actual:_ Guide expects Starter; screen shows Free plan ([failure-step-7.jpg](/img/guides/create-react-frontend-capsule/failure-step-7.jpg))
8. **fail** — Git: BrentonJScott/demo-react Team Repository, branch master. _Actual:_ Repo: BrentonJScott/demo-react Team Repository; Guide expects master; only main available; locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: /^main$/i })
 ([failure-step-8.jpg](/img/guides/create-react-frontend-capsule/failure-step-8.jpg))
9. **pass** — Build: npm run build, output build. _Actual:_ Filled build fields where visible
10. **fail** — Create Capsule. _Actual:_ locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /create capsule/i })
 ([failure-step-10.jpg](/img/guides/create-react-frontend-capsule/failure-step-10.jpg))
11. **blocked** — Goal: building on Deploy → Builds. _Actual:_ locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /create capsule/i })
; No Building/Queued/In progress on Deploy → Builds ([failure-step-11.jpg](/img/guides/create-react-frontend-capsule/failure-step-11.jpg))

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | pass | Open test-platform; Log in link if needed | URL https://test-platform.codecapsules.io/auth/login | — |
| 2 | pass | Email and Password on Welcome back | Credentials entered | — |
| 3 | pass | Click Log in | Dashboard at https://test-platform.codecapsules.io/dash/overview/quick-start | — |
| 4 | fail | Create New Capsule and pick React | No **Create New Capsule**; **Deploy Now** on React did not leave Quick Start (`…/quick-start`); wizard continued via direct URL only for later steps | [failure-step-4.jpg](/img/guides/create-react-frontend-capsule/failure-step-4.jpg) |
| 5 | pass | Capsule Details: capsule type, team, space, Next | Selected Frontend; Selected Personal Team; Selected space: Document Drift  customer-api-xkfw | — |
| 6 | pass | Hosting: Static, Next | Static hosting selected | — |
| 7 | fail | Plan: Starter, Next | Guide expects Starter; screen shows Free plan | [failure-step-7.jpg](/img/guides/create-react-frontend-capsule/failure-step-7.jpg) |
| 8 | fail | Git: BrentonJScott/demo-react Team Repository, branch master | Repo: BrentonJScott/demo-react Team Repository; Guide expects master; only main available; locator.click: Timeout 30000ms exceeded. Call log:   - waiting for getByRole('option', { name: /^main$/i })  | [failure-step-8.jpg](/img/guides/create-react-frontend-capsule/failure-step-8.jpg) |
| 9 | pass | Build: npm run build, output build | Filled build fields where visible | — |
| 10 | fail | Create Capsule | locator.click: Timeout 15000ms exceeded. Call log:   - waiting for getByRole('button', { name: /create capsule/i })  | [failure-step-10.jpg](/img/guides/create-react-frontend-capsule/failure-step-10.jpg) |
| 11 | blocked | Goal: building on Deploy → Builds | locator.click: Timeout 15000ms exceeded. Call log:   - waiting for getByRole('button', { name: /create capsule/i }) ; No Building/Queued/In progress on Deploy → Builds | [failure-step-11.jpg](/img/guides/create-react-frontend-capsule/failure-step-11.jpg) |

## Mismatches / issues

- **Action 4 (fail):** Guide: "Create New Capsule and pick React". Platform: Quick Start only; **Deploy Now** on React did not navigate to the wizard (URL remained `…/quick-start`).
- **Action 7 (fail):** Guide: "Plan: Starter, Next". Platform: Guide expects Starter; screen shows Free plan.
- **Action 8 (fail):** Guide: "Git: BrentonJScott/demo-react Team Repository, branch master". Platform: Repo: BrentonJScott/demo-react Team Repository; Guide expects master; only main available; locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: /^main$/i })
.
- **Action 10 (fail):** Guide: "Create Capsule". Platform: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /create capsule/i })
.
- **Action 11 (blocked):** Guide: "Goal: building on Deploy → Builds". Platform: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /create capsule/i })
; No Building/Queued/In progress on Deploy → Builds.

## Suggested fixes

- Replace **Create New Capsule** + framework picker with Quick Start **Deploy Now** on the React card, matching the live dashboard.
- Update plan step to **Free** (or whichever plan cards the test platform shows) instead of **Starter**.
- Document **main** as the deploy branch if **master** is not offered for `BrentonJScott/demo-react Team Repository`.