# Format check — Host Your React Application

- **Run:** 2026-11-24T06:52:19Z
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
| Step 1: Doc type | fail | File is `docs/b/react.md`, not `docs/guides/`. |
| Check 1: Content | fail | Login is a prerequisite inside **Steps**; steps omit **Space** selection on **Capsule Details**. |
| Check 2: Prerequisites | pass | Shared prerequisite links resolve to `docs/e/` pages by slug. |
| Check 3: Links | fail | Eight screenshot files under `/img/guides/create-react-frontend-capsule/` missing from `static/`. |
| Check 4: Format and style | fail | Wrong folder, login in steps, missing images. |

## Tickets

### react-1

- **Type:** Wrong doc type
- **Title:** Move React how-to to `docs/guides/`.
- **Problem:** Path is `docs/b/react.md`.
- **Rule:** `FORMAT.MD` Step 1.
- **Change:** Move to `docs/guides/react.md`.
- **Done when:** File location matches how-to template.

### react-2

- **Type:** Move to prerequisites
- **Title:** Remove login from **Steps**.
- **Problem:** `### Step 1: Log in` is prerequisite content in **Steps**.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** Remove Step 1; link account creation / login from **Prerequisites**; renumber steps.
- **Done when:** First step is a goal action.

### react-3

- **Type:** Missing goal step
- **Title:** Add Space selection to steps.
- **Problem:** Step 3 names Team but not Space; the wizard requires a Space before **Next**.
- **Rule:** `FORMAT.MD` Check 1 — values the goal depends on must be clear.
- **Change:** Add choosing a Space on **Capsule Details** (match `angular.md`).
- **Done when:** A reader with prerequisites can complete the wizard using only **Steps**.

### react-4

- **Type:** Broken link
- **Title:** Restore React guide screenshot assets.
- **Problem:** All eight `step-*.jpg` references lack files in `static/`.
- **Rule:** `FORMAT.MD` Check 3.
- **Change:** Add images or update paths.
- **Done when:** Images exist in `static/`.

### react-5

- **Type:** Format fix
- **Title:** Align React entry path with Quick Start UI.
- **Problem:** Step 2 says **Create New Capsule** then **React**; on `https://test-platform.codecapsules.io` Quick Start at `/dash/overview/quick-start` has no **Create New Capsule** control (0 matches in this run). **React** uses **Deploy Now** and opens `/new/capsule?capsuleType=frontend`, same pattern as `angular.md`.
- **Rule:** `WALKTHROUGH.md` — guide values must match the live UI once format is fixed.
- **Change:** In steps, replace dashboard **Create New Capsule** with Quick Start **Deploy Now** on the **React** card; update screenshots section after re-capture.
- **Done when:** Step text matches Quick Start; re-run format check passes.

## Proposed outline

Same section order as `how_to_format.md`, with Quick Start **Deploy Now** on **React**, Space on Capsule Details, six goal steps after prerequisite cleanup, and restored screenshots under `static/img/...`.