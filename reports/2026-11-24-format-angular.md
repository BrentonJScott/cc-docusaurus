# Format report

- **Run:** 2026-11-24T08:21:00Z
- **Doc:** `docs/b/angular.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create Angular frontend capsule
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

1. [prerequisite] (## Prerequisites) Bullet list links for account, fork, Space, GitHub.
2. [remove] (## Goal) States Builds tab success criteria (belongs in intro/last step).
3. [prerequisite] (### Step 1: Log in) Open test platform and log in.
4. [goal] (### Step 2) Start Angular capsule from Quick Start.
5. [goal] (### Step 3) Choose Frontend, Team, Space.
6. [goal] (### Step 4) Choose Static hosting and plan (plan not named exactly).
7. [goal] (### Step 5) Connect demo-angular fork; branch such as `master`.
8. [goal] (### Step 6) Build `npm run build`, output `dist/ng4-complete-guide`.
9. [goal] (### Step 7) Check build status Building/Queued/In progress.
10. [remove] (## Screenshots) Three guide images.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Goal steps under `### Step N` and `## Goal`; login is in Steps. |
| Check 2: Prerequisites | fail | Prerequisites are bullets, not DocCardList. |
| Check 3: Links | fail | Links to `https://test-platform.codecapsules.io` instead of docs; images present. |
| Check 4: Format and style | fail | Forbidden sections Goal, Steps, Screenshots; no DocCardList import. |
| Walkthrough | not run | Format check fail. |

## Tickets

### angular-1 — Restructure to how_to_format.md sections
- **Type:** Format fix
- **Problem:** The page uses legacy headings (for example `## Goal`, `## Steps`, `## Setup`, or multiple task sections) instead of only Prerequisites, a `## <Verb> your <Thing>` steps section, and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Remove forbidden sections; add `import DocCardList`; use `## Prerequisites` with DocCardList; rename steps section to `## Deploy your …` (or equivalent verb); keep only a numbered list under it.
- **Done when:** The `##` headings match the template order and no extra sections remain.

### angular-2 — Move account, fork, Space, and Git setup to Prerequisites cards
- **Type:** Move to prerequisites
- **Problem:** Sign-up, fork, Space, Git connection, and log-in steps appear in the body instead of linked prerequisite cards.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites
- **Change:** Replace bullet prerequisites and Setup/login steps with one `DocCardList` linking to `/docs/shared/create-an-account`, `fork-a-demo-repo`, `create-a-space`, and `configure-git-for-code-capsules` (sources in `docs/e/`).
- **Done when:** Every prerequisite from Check 1 is a card with a working `/docs/shared/…` href and no step-by-step prerequisite text remains in the steps section.

### angular-3 — Convert steps to numbered list with bold titles
- **Type:** Format fix
- **Problem:** Steps use `### Step N:` headings or nested lists outside the template steps section.
- **Rule:** `how_to_format.md`, Steps
- **Change:** Use one numbered list; each item starts with a bold imperative title; screen names in bold; state exact plan, repo, branch, build command, and output directory where the goal depends on them.
- **Done when:** All goal-labelled Check 1 items sit under the steps `##` heading in the numbered list format.

### angular-4 — Remove screenshots and GitBook images
- **Type:** Remove content
- **Problem:** The page includes `## Screenshots` or inline images.
- **Rule:** `writing_style.md`, Links and images; `how_to_format.md`, Steps
- **Change:** Delete image markdown and the Screenshots section.
- **Done when:** No images remain on the page.

### angular-5 — Wrap Troubleshooting in details blocks
- **Type:** Format fix
- **Problem:** Troubleshooting uses `###` headings instead of styled `<details>` blocks.
- **Rule:** `writing_style.md`, Page pieces; `how_to_format.md`, Troubleshooting
- **Change:** Convert each symptom to the standard `<details style={…}>` block with a one-line `<summary>`.
- **Done when:** Every troubleshooting entry uses the template `<details>` opening tag.

### angular-6 — State exact plan and branch values
- **Type:** Format fix
- **Problem:** Step 4 says "select your plan"; Step 5 says branch "such as `master`."
- **Rule:** `how_to_format.md`, Steps
- **Change:** Name the plan tier used in the walkthrough (for example Starter) and the branch `master` without "such as".
- **Done when:** Plan and branch are stated as exact values.

### angular-7 — Remove test platform URL from steps
- **Type:** Broken link
- **Problem:** Step 1 links to `https://test-platform.codecapsules.io`.
- **Rule:** `FORMAT.MD`, Check 3
- **Change:** Delete login step; account access is covered by the Create an account prerequisite card.
- **Done when:** No step links to codecapsules.io or test-platform.

## Proposed outline

## Host Your Angular Application
- Intro matches description (build visible under Deploy → Builds)

## Prerequisites
- DocCardList: account, fork demo-angular, Space, Git configured

## Deploy your Angular app
1. Start capsule from Quick Start
2. Capsule Details: Frontend, Team, Space
3. Hosting Static; Plan (named tier)
4. Connect Git: demo-angular, branch `master`
5. Build & Deploy: `npm run build`, `dist/ng4-complete-guide`
6. Check Builds tab: Building / Queued / In progress

## Troubleshooting
- details: empty repo dropdown, no branch items, wrong output directory
