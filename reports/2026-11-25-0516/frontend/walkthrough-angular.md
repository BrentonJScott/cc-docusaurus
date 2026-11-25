# Walkthrough report: angular

- **Run timestamp:** 2026-11-25T05:16:14Z (walkthrough completed after login via `EMAIL` / `PASSWORD` env vars)
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs/frontend/angular.md`
- **Goal reached:** no

## Actions taken

1. (not testable) Prerequisites from guide — account, fork, Space, GitHub
   - **Actual:** Signed in with `EMAIL` and `PASSWORD` environment variables; used existing team, space, and GitHub connection on the account.
2. (pass) Open the Space, click **+**, **New Capsule**
   - **Actual:** Landed on `https://test-platform.codecapsules.io/new/capsule`.
3. (fail) **Capsule Details** — **Frontend Capsule**, Team, Space, **Next**
   - **Actual:** No **Capsule Details** heading after starting from the Space capsules list; selected **Frontend** from the capsule-type dropdown with Team and Space filled.
4. (pass) **Hosting** — **Static**, **Next**
5. (pass) **Plan** — **Free**, **Next**
6. (fail) **Configure** — `codecapsules-io/demo-angular`, `main`, **Next**
   - **Actual:** Repository not in dropdown; selected `BrentonJScott/demo-angular-22` as best effort.
7. (fail) **Deploy** — build settings, click **Build & Deploy**
   - **Actual:** Primary control is **Create Capsule** (no **Build & Deploy** button). Filled **Capsule Name**, build command, and output path per guide.
8. (pass) **Deploy** tab **Builds** — in progress or queued
   - **Actual:** Status **Building** on Deploy tab (used substitute repo).

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites | `EMAIL` / `PASSWORD` login | — |
| 2 | pass | Space, **+**, **New Capsule** | Wizard opened | — |
| 3 | fail | **Capsule Details**, **Frontend Capsule** | No **Capsule Details** heading at this entry point | [failure-step-4.jpg](screenshots-angular/failure-step-4.jpg) |
| 4 | pass | **Static** hosting | Selected Static | — |
| 5 | pass | **Free** plan | Selected Free | — |
| 6 | fail | `codecapsules-io/demo-angular` | Repo missing; used `BrentonJScott/demo-angular-22` | [failure-step-7.jpg](screenshots-angular/failure-step-7.jpg) |
| 7 | fail | Click **Build & Deploy** | **Create Capsule** only | [failure-step-8.jpg](screenshots-angular/failure-step-8.jpg) |
| 8 | pass | Build in progress or queued | **Building** | — |

## Mismatches / issues

- Step 3: Guide names **Capsule Details** and **Frontend Capsule**; wizard shows capsule type selection without that step title when opened from the Space list.
- Step 6: Guide names `codecapsules-io/demo-angular`; connected GitHub accounts on the test platform do not list that org.
- Step 7: Guide says **Build & Deploy**; submit control is **Create Capsule** and **Capsule Name** is required.

## Tickets

### angular-wt-1: Align capsule-type step labels

- **Type:** Guide fix
- **Title:** Replace **Capsule Details** / **Frontend Capsule** with current wizard labels.
- **Problem:** Action 3 — guide text does not match the screen after **New Capsule** from a Space.
- **Change:** Describe **Choose a Capsule** (or equivalent) and option **Frontend**; keep Team and Space steps.
- **Done when:** Action 3 passes without label drift.

### angular-wt-2: Point Configure step at the reader's fork

- **Type:** Guide fix
- **Title:** Do not require `codecapsules-io/demo-angular` in the dropdown.
- **Problem:** Action 6 — repository value from the guide is not selectable.
- **Change:** Tell readers to select their fork from prerequisites.
- **Done when:** Configure action passes using only guide-named values (fork on their GitHub).

### angular-wt-3: Document **Capsule Name** and **Create Capsule**

- **Type:** Missing step
- **Title:** Match Deploy step to **Create Capsule**.
- **Problem:** Action 7 — **Build & Deploy** button not present.
- **Change:** Add **Capsule Name**; click **Create Capsule**.
- **Done when:** Deploy action passes using guide wording only.