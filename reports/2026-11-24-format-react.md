# Format report

- **Run:** 2026-11-24T08:21:00Z
- **Doc:** `docs/b/react.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create React frontend capsule
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list (Check 1)

1. [prerequisite] (## Prerequisites) Bullets; demo-react "such as".
2. [remove] (## Goal) Builds tab criteria.
3. [prerequisite] (### Step 1) Log in to test platform.
4. [goal] (### Step 2–8) Wizard through Create Capsule; Starter plan; `master`; `npm run build` / `build`.
5. [remove] (## Screenshots) Seven images.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Steps use `### Step N`; prerequisites inside Steps. |
| Check 2: Prerequisites | fail | Bullets instead of DocCardList to `docs/e/` shared slugs. |
| Check 3: Links | fail | test-platform URL; images in doc. |
| Check 4: Format and style | fail | Extra sections Goal, Steps, Screenshots. |
| Walkthrough | not run | Format check fail. |

## Tickets

### react-1 — Restructure to how_to_format.md sections
- **Type:** Format fix
- **Problem:** The page uses legacy headings (for example `## Goal`, `## Steps`, `## Setup`, or multiple task sections) instead of only Prerequisites, a `## <Verb> your <Thing>` steps section, and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Remove forbidden sections; add `import DocCardList`; use `## Prerequisites` with DocCardList; rename steps section to `## Deploy your …` (or equivalent verb); keep only a numbered list under it.
- **Done when:** The `##` headings match the template order and no extra sections remain.

### react-2 — Move account, fork, Space, and Git setup to Prerequisites cards
- **Type:** Move to prerequisites
- **Problem:** Sign-up, fork, Space, Git connection, and log-in steps appear in the body instead of linked prerequisite cards.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites
- **Change:** Replace bullet prerequisites and Setup/login steps with one `DocCardList` linking to `/docs/shared/create-an-account`, `fork-a-demo-repo`, `create-a-space`, and `configure-git-for-code-capsules` (sources in `docs/e/`).
- **Done when:** Every prerequisite from Check 1 is a card with a working `/docs/shared/…` href and no step-by-step prerequisite text remains in the steps section.

### react-3 — Convert steps to numbered list with bold titles
- **Type:** Format fix
- **Problem:** Steps use `### Step N:` headings or nested lists outside the template steps section.
- **Rule:** `how_to_format.md`, Steps
- **Change:** Use one numbered list; each item starts with a bold imperative title; screen names in bold; state exact plan, repo, branch, build command, and output directory where the goal depends on them.
- **Done when:** All goal-labelled Check 1 items sit under the steps `##` heading in the numbered list format.

### react-4 — Remove screenshots and GitBook images
- **Type:** Remove content
- **Problem:** The page includes `## Screenshots` or inline images.
- **Rule:** `writing_style.md`, Links and images; `how_to_format.md`, Steps
- **Change:** Delete image markdown and the Screenshots section.
- **Done when:** No images remain on the page.

### react-5 — Wrap Troubleshooting in details blocks
- **Type:** Format fix
- **Problem:** Troubleshooting uses `###` headings instead of styled `<details>` blocks.
- **Rule:** `writing_style.md`, Page pieces; `how_to_format.md`, Troubleshooting
- **Change:** Convert each symptom to the standard `<details style={…}>` block with a one-line `<summary>`.
- **Done when:** Every troubleshooting entry uses the template `<details>` opening tag.

### react-6 — Name exact demo repo and branch
- **Type:** Format fix
- **Problem:** Repo described as "such as `demo-react`"; flow differs from Quick Start Angular card path.
- **Rule:** `how_to_format.md`, Steps
- **Change:** Align with documented walkthrough: Quick Start **React** or named fork `demo-react`, branch `master`, Starter plan.
- **Done when:** Repo, branch, plan, build command, and output directory are exact.

## Proposed outline

Same structure as angular report with `## Deploy your React app` and six wizard-aligned steps.
