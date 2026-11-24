# Format check — Host Your Angular Application

- **Run:** 2026-11-24T07:09:07Z
- **Doc file:** `docs/b/angular.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create Angular frontend capsule
- **Goal (manifest):** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | Short intro repeating description |
| 2 | prerequisite | ## Prerequisites | Account, GitHub, fork, Space, Git connected bullets |
| 3 | goal | ## Goal | Builds tab shows Building / Queued / In progress |
| 4 | prerequisite | ### Step 1: Log in | Open test platform and log in |
| 5 | goal | ### Step 2 | **Deploy Now** on **Angular** card |
| 6 | goal | ### Step 3 | Frontend, Team, Space, **Next** |
| 7 | goal | ### Step 4 | Static hosting and plan |
| 8 | goal | ### Step 5 | `demo-angular`, branch such as `master` |
| 9 | goal | ### Step 6 | Build command and output directory |
| 10 | goal | ### Step 7 | **Deploy** → **Builds** status |
| 11 | remove | ## Screenshots | Image embeds (section correct; files missing) |
| 12 | remove | ## Troubleshooting | Symptom entries (valid section; not part of goal path) |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single how-to; structure matches template. Folder `docs/b/` is allowed per `how_to_format.md`. |
| Check 1: Content (goal steps) | fail | Step 1 **Log in** is a `prerequisite` inside `## Steps`. |
| Check 2: Prerequisites | pass | Every prerequisite is a linked bullet; targets exist under `docs/e/` with `/docs/shared/…` slugs. |
| Check 3: Links | fail | Three screenshot paths under `/img/guides/create-angular-frontend-capsule/` have no files in `static/`. |
| Check 4: Format and style | fail | Login in steps; missing screenshot assets. |

## Tickets

### angular-1

- **Type:** Move to prerequisites
- **Title:** Remove login from `## Steps`.
- **Problem:** `### Step 1: Log in` explains signing in on the test platform inside **Steps**.
- **Rule:** `FORMAT.MD` Check 1 — prerequisite instructions must not appear inside `## Steps`.
- **Change:** Drop Step 1 from **Steps**; cover login via **Prerequisites** (link to [Create an account](/docs/shared/create-an-account)). Renumber remaining steps.
- **Done when:** **Steps** start at the first goal action (Quick Start **Deploy Now**).

### angular-2

- **Type:** Broken link
- **Title:** Restore Angular guide screenshot assets.
- **Problem:** `step-4.jpg`, `step-9.jpg`, and `step-12.jpg` are referenced but absent from `static/img/guides/create-angular-frontend-capsule/`.
- **Rule:** `FORMAT.MD` Check 3 — images must exist in `static/`.
- **Change:** Add the three image files or update captions to match new filenames after capture.
- **Done when:** Every `## Screenshots` image loads in the doc build.

### angular-3

- **Type:** Format fix
- **Title:** Align Angular guide structure with `how_to_format.md`.
- **Problem:** Combined step and asset issues above.
- **Rule:** `how_to_format.md` section table.
- **Change:** Checklist: (1) fix steps per angular-1, (2) restore images per angular-2, (3) confirm only allowed `##` headings and `### Step N` numbering 1–6 after login removal.
- **Done when:** All checklist items verified; format check re-run passes.

## Proposed outline

```md
## Prerequisites
- Account, GitHub, fork demo-angular, Space, Git connected (linked bullets)

## Goal
- Builds tab shows first build in progress

## Steps
### Step 1: Start the Angular capsule
### Step 2: Choose Frontend, Team, and Space
### Step 3: Choose Static hosting and plan
### Step 4: Connect demo-angular and branch
### Step 5: Set build settings
### Step 6: Check the build on Deploy → Builds

## Screenshots
(three images with captions)

## Troubleshooting
(existing three entries)
```