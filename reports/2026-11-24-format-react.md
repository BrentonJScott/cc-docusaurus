# Format check — Host Your React Application

- **Run:** 2026-11-24T07:09:07Z
- **Doc file:** `docs/b/react.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create React frontend capsule
- **Goal (manifest):** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | Intro paragraph |
| 2 | prerequisite | ## Prerequisites | Account, GitHub, fork, Space, Git bullets |
| 3 | goal | ## Goal | Builds tab status sentence |
| 4 | prerequisite | ### Step 1: Log in | Test platform login |
| 5 | goal | ### Step 2 | **Create New Capsule** + **React** |
| 6 | goal | ### Step 3 | Frontend + Team (no Space step) |
| 7 | goal | ### Step 4–8 | Hosting, plan, repo, build, create, Builds |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single how-to under `docs/b/`; allowed per `how_to_format.md`. |
| Check 1: Content | fail | Login is a prerequisite inside **Steps**; steps omit **Space** selection on **Capsule Details**. |
| Check 2: Prerequisites | pass | Shared prerequisite links resolve to `docs/e/` pages by slug. |
| Check 3: Links | fail | Eight screenshot files under `/img/guides/create-react-frontend-capsule/` missing from `static/`. |
| Check 4: Format and style | fail | Login in steps, missing Space step, missing images; Step 2 UI path may not match Quick Start. |

## Tickets

### react-1

- **Type:** Move to prerequisites
- **Title:** Remove login from **Steps**.
- **Problem:** `### Step 1: Log in` is prerequisite content in **Steps**.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** Remove Step 1; link account creation / login from **Prerequisites**; renumber steps.
- **Done when:** First step is a goal action.

### react-2

- **Type:** Missing goal step
- **Title:** Add Space selection to steps.
- **Problem:** Step 3 names Team but not Space; the wizard requires a Space before **Next** (see `docs/b/angular.md`).
- **Rule:** `FORMAT.MD` Check 1 — values the goal depends on must be clear.
- **Change:** Add choosing a Space on **Capsule Details** (match `angular.md`).
- **Done when:** A reader with prerequisites can complete the wizard using only **Steps**.

### react-3

- **Type:** Broken link
- **Title:** Restore React guide screenshot assets.
- **Problem:** All eight `step-*.jpg` references lack files in `static/`.
- **Rule:** `FORMAT.MD` Check 3.
- **Change:** Add images or update paths.
- **Done when:** Images exist in `static/`.

### react-4

- **Type:** Format fix
- **Title:** Align React entry path with Quick Start UI.
- **Problem:** Step 2 says **Create New Capsule** then **React**; on `https://test-platform.codecapsules.io` Quick Start at `/dash/overview/quick-start` has no **Create New Capsule** control (verified this run). **React** uses **Deploy Now** on the **React** card and opens `/new/capsule?capsuleType=frontend`, same pattern as `docs/b/angular.md`.
- **Rule:** `how_to_format.md` — steps must describe actions needed to reach the goal.
- **Change:** In steps, replace dashboard **Create New Capsule** with Quick Start **Deploy Now** on the **React** card; update screenshots section after re-capture.
- **Done when:** Step text matches Quick Start; re-run format check passes.

### react-5

- **Type:** Format fix
- **Title:** Complete React how-to template compliance.
- **Problem:** Aggregate failures above.
- **Rule:** `how_to_format.md` section table.
- **Change:** Checklist: react-1 through react-4.
- **Done when:** Format check re-run passes.

## Proposed outline

Same section order as `how_to_format.md`, with Quick Start **Deploy Now** on **React**, Space on Capsule Details, six goal steps after prerequisite cleanup, and restored screenshots under `static/img/...`.