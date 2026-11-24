# Format check — Create React frontend capsule

- **Run:** 2026-11-24T07:06:55Z
- **Doc file:** `docs/b/react.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create React frontend capsule
- **Feature goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|-------|---------|-------------|
| 1 | prerequisite | `## Prerequisites` | Code Capsules account (shared link) |
| 2 | prerequisite | `## Prerequisites` | GitHub account |
| 3 | prerequisite | `## Prerequisites` | Fork React demo repo (shared link) |
| 4 | prerequisite | `## Prerequisites` | Space (shared link) |
| 5 | prerequisite | `## Prerequisites` | GitHub connected (shared link) |
| 6 | goal | Step 1 | Open test platform and log in |
| 7 | goal | Step 2 | **Create New Capsule** and choose **React** |
| 8 | goal | Step 3 | **Frontend** and Team, **Next** (no Space selection) |
| 9 | goal | Step 4 | **Static** hosting, **Next** |
| 10 | goal | Step 5 | **Starter** plan, **Next** |
| 11 | goal | Step 6 | React repo and `master` branch, **Next** |
| 12 | goal | Step 7 | Build command `npm run build`, output `build` |
| 13 | goal | Step 8 | **Create Capsule** and confirm **Deploy** → **Builds** |
| 14 | remove | `## Screenshots` | Step images grouped in Screenshots section |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content | fail | Step 3 omits choosing a **Space** while the prerequisite requires one; wizard on test platform expects Team and Space before **Next** (see Angular guide Step 3). Steps may stop before the goal without a Space. |
| Check 2: Prerequisites | pass | Bullets link to existing shared pages. |
| Check 3: Links | fail | Eight screenshot paths under `/img/guides/create-react-frontend-capsule/` (`step-3.jpg` through `step-10.jpg`) are absent from `static/`. |
| Check 4: Format and style | pass | Template sections, step headings, and troubleshooting present; no images inside steps. |

## Tickets

### react-1

- **ID:** react-1
- **Type:** Broken link
- **Title:** Add missing React guide screenshot assets.
- **Problem:** `## Screenshots` lists eight JPEG paths with no files in `static/img/guides/create-react-frontend-capsule/`.
- **Rule:** `FORMAT.MD` Check 3.
- **Change:** Add the image files or update paths.
- **Done when:** Each Screenshots entry resolves under `static/`.

### react-2

- **ID:** react-2
- **Type:** Missing goal step
- **Title:** Add Space selection to Step 3.
- **Problem:** Under `### Step 3: Choose the Capsule type and Team`, the guide says choose **Frontend** and Team only; it does not tell the reader to choose a Space listed in Prerequisites.
- **Rule:** `FORMAT.MD` Check 1 (How-to goal steps); `how_to_format.md` Steps.
- **Change:** Extend Step 3 to select a Space (mirror `docs/b/angular.md` Step 3) before **Next**.
- **Done when:** A reader with only the guide can complete Capsule Details without guessing Space selection.

## Proposed outline

- **Prerequisites:** unchanged (shared links).
- **Steps:** … Step 3 adds Space selection; Steps 4–8 unchanged.
- **Screenshots:** after assets exist, captions aligned to step numbers.
- **Troubleshooting:** unchanged.