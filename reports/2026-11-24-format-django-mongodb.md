# Format report

- **Run:** 2026-11-24T08:21:00Z
- **Doc:** `docs/database/mongodb/django-+-mongodb.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create Django with MongoDB capsules
- **Goal:** Expect to see the Django app load with MongoDB bound
- **Format check:** fail

## Content list (Check 1)

1. [prerequisite] (## Setup) Account, GitHub, fork demo repo.
2. [goal] (## Create the Capsules) Create data DB and backend capsules.
3. [goal] (## Connect the Capsules) Bind DATABASE_URL or connection string.
4. [goal] (## View Application) Open live URL.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Goal steps split across Setup and multiple `##` sections. |
| Check 2: Prerequisites | fail | Setup not in Prerequisites cards; fork explained inline. |
| Check 3: Links | fail | gitbook-assets images missing; codecapsules.io in Setup. |
| Check 4: Format and style | fail | Uses yellow `+` wording; no Troubleshooting `<details>`. |
| Walkthrough | not run | Format check fail. |

## Tickets

### django-mongodb-1 — Restructure to how_to_format.md sections
- **Type:** Format fix
- **Problem:** The page uses legacy headings (for example `## Goal`, `## Steps`, `## Setup`, or multiple task sections) instead of only Prerequisites, a `## <Verb> your <Thing>` steps section, and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Remove forbidden sections; add `import DocCardList`; use `## Prerequisites` with DocCardList; rename steps section to `## Deploy your …` (or equivalent verb); keep only a numbered list under it.
- **Done when:** The `##` headings match the template order and no extra sections remain.

### django-mongodb-2 — Move account, fork, Space, and Git setup to Prerequisites cards
- **Type:** Move to prerequisites
- **Problem:** Sign-up, fork, Space, Git connection, and log-in steps appear in the body instead of linked prerequisite cards.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites
- **Change:** Replace bullet prerequisites and Setup/login steps with one `DocCardList` linking to `/docs/shared/create-an-account`, `fork-a-demo-repo`, `create-a-space`, and `configure-git-for-code-capsules` (sources in `docs/e/`).
- **Done when:** Every prerequisite from Check 1 is a card with a working `/docs/shared/…` href and no step-by-step prerequisite text remains in the steps section.

### django-mongodb-3 — Convert steps to numbered list with bold titles
- **Type:** Format fix
- **Problem:** Steps use `### Step N:` headings or nested lists outside the template steps section.
- **Rule:** `how_to_format.md`, Steps
- **Change:** Use one numbered list; each item starts with a bold imperative title; screen names in bold; state exact plan, repo, branch, build command, and output directory where the goal depends on them.
- **Done when:** All goal-labelled Check 1 items sit under the steps `##` heading in the numbered list format.

### django-mongodb-4 — Remove screenshots and GitBook images
- **Type:** Remove content
- **Problem:** The page includes `## Screenshots` or inline images.
- **Rule:** `writing_style.md`, Links and images; `how_to_format.md`, Steps
- **Change:** Delete image markdown and the Screenshots section.
- **Done when:** No images remain on the page.

### django-mongodb-5 — Wrap Troubleshooting in details blocks
- **Type:** Format fix
- **Problem:** Troubleshooting uses `###` headings instead of styled `<details>` blocks.
- **Rule:** `writing_style.md`, Page pieces; `how_to_format.md`, Troubleshooting
- **Change:** Convert each symptom to the standard `<details style={…}>` block with a one-line `<summary>`.
- **Done when:** Every troubleshooting entry uses the template `<details>` opening tag.

### django-mongodb-6 — Replace codecapsules.io and missing gitbook images
- **Type:** Broken link
- **Problem:** Setup links to `https://www.codecapsules.io/`; build/deploy screenshots under `/gitbook-assets/` not in `static/`.
- **Rule:** `FORMAT.MD`, Check 3
- **Change:** Use `/docs/shared/…` prerequisites; remove images.
- **Done when:** Prerequisites use shared docs; no broken images.

### django-mongodb-7 — Fork prerequisite must link shared fork page
- **Type:** Format fix
- **Problem:** Fork steps inline instead of linking shared fork page for `demo-django-mongodb`.
- **Rule:** `how_to_format.md`, Prerequisites
- **Change:** Add fork card pointing to `/docs/shared/fork-a-demo-repo` with label naming `demo-django-mongodb`.
- **Done when:** No inline GitHub fork instructions in steps.

### django-mongodb-8 — Add doc_version to frontmatter
- **Type:** Format fix
- **Problem:** Frontmatter missing `doc_version` and `sidebar_label` pattern from template.
- **Rule:** `writing_style.md`
- **Change:** Add `doc_version: drift` and align title/description to How-to template.
- **Done when:** Frontmatter fields complete.

## Proposed outline

## Prerequisites: account, fork demo-django-mongodb, Space, Git connected
## Deploy your django mongodb stack
numbered steps: MySQL/Mongo capsule → backend capsule → bind → verify app loads
