# Walkthrough report: vue

- **Run timestamp:** 2026-11-25T05:16:14Z (walkthrough with `EMAIL` / `PASSWORD` env vars)
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs/frontend/vue.md`
- **Goal reached:** no

## Actions taken

1. (not testable) Prerequisites — signed in via environment variables.
2. (pass) Open Space flow and **New Capsule** — wizard reached (overview URL before wizard in one branch of navigation).
3. (fail) **Capsule Details** / **Frontend Capsule** — no **Capsule Details** heading.
4. (pass) **Static** hosting and **Free** plan.
5. (fail) **Configure** — `codecapsules-io/demo-vue` missing; used `BrentonJScott/demo-vue`.
6. (fail) **Deploy** — **Create Capsule** instead of **Build & Deploy**.
7. (fail) **Builds** goal — UI showed “Failed to fetch your builds, please try again later.”

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites | Env login | — |
| 2 | pass | Open wizard | New Capsule flow | — |
| 3 | fail | **Capsule Details** | Heading absent | [failure-step-4.jpg](screenshots-vue/failure-step-4.jpg) |
| 4 | pass | **Static** / **Free** | Selected | — |
| 5 | fail | `codecapsules-io/demo-vue` | Substitute BrentonJScott/demo-vue | [failure-step-7.jpg](screenshots-vue/failure-step-7.jpg) |
| 6 | fail | **Build & Deploy** | **Create Capsule** | [failure-step-8.jpg](screenshots-vue/failure-step-8.jpg) |
| 7 | fail | Build in progress or queued | Builds fetch error | [failure-step-9.jpg](screenshots-vue/failure-step-9.jpg) |

## Mismatches / issues

- Same label drift as Angular for capsule type step and deploy button.
- Repository `codecapsules-io/demo-vue` not in dropdown.
- Builds panel error prevented confirming in-progress build for this run.

## Tickets

### vue-wt-1: Align capsule-type and deploy steps (same pattern as Angular)

- **Type:** Guide fix
- **Problem:** Steps 3, 6 — labels and submit control do not match the wizard.
- **Change:** Match **Create Capsule**, **Capsule Name**, and frontend option naming on the live UI.
- **Done when:** Steps 3 and 6 pass.

### vue-wt-2: Use forked demo-vue in Configure

- **Type:** Guide fix
- **Problem:** Step 5 — `codecapsules-io/demo-vue` not listed.
- **Change:** Select reader’s fork from prerequisites.
- **Done when:** Step 5 passes without substitution.

### vue-wt-3: Builds tab failed to load on test platform

- **Type:** Site issue
- **Problem:** Step 7 — “Failed to fetch your builds”.
- **Change:** Investigate API or permissions for Builds list on test platform after capsule create.
- **Done when:** First build shows **Building**, **Queued**, or success per guide.