# Format report

- **Run:** 2026-11-24T08:21:00Z
- **Doc:** `docs/database/mysql/index.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Create MySQL database capsule
- **Goal:** Expect to see the MySQL capsule running in the space
- **Format check:** fail

## Content list (Check 1)

1. [instruction] (## Create a MySQL Data Capsule) Login, yellow +, create capsule.
2. [instruction] (## Connecting…) Bind DATABASE_URL; Python/Node samples.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Instructions mixed across multiple `##` sections; includes connection code samples. |
| Check 2: Prerequisites | fail | Login and Space navigation in body; not linked prerequisites. |
| Check 3: Links | fail | Internal link `/products/database-capsule/mysql/versions/` missing; `/gitbook-assets/…` images missing from `static/`. |
| Check 4: Format and style | fail | Legacy GitBook layout; yellow `+` wording; images; no Troubleshooting template. |
| Walkthrough | not run | Format check fail. |

## Tickets

### mysql-1 — Restructure to how_to_format.md sections
- **Type:** Format fix
- **Problem:** The page uses legacy headings (for example `## Goal`, `## Steps`, `## Setup`, or multiple task sections) instead of only Prerequisites, a `## <Verb> your <Thing>` steps section, and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections
- **Change:** Remove forbidden sections; add `import DocCardList`; use `## Prerequisites` with DocCardList; rename steps section to `## Deploy your …` (or equivalent verb); keep only a numbered list under it.
- **Done when:** The `##` headings match the template order and no extra sections remain.

### mysql-2 — Move account, fork, Space, and Git setup to Prerequisites cards
- **Type:** Move to prerequisites
- **Problem:** Sign-up, fork, Space, Git connection, and log-in steps appear in the body instead of linked prerequisite cards.
- **Rule:** `FORMAT.MD`, Check 2; `how_to_format.md`, Prerequisites
- **Change:** Replace bullet prerequisites and Setup/login steps with one `DocCardList` linking to `/docs/shared/create-an-account`, `fork-a-demo-repo`, `create-a-space`, and `configure-git-for-code-capsules` (sources in `docs/e/`).
- **Done when:** Every prerequisite from Check 1 is a card with a working `/docs/shared/…` href and no step-by-step prerequisite text remains in the steps section.

### mysql-3 — Convert steps to numbered list with bold titles
- **Type:** Format fix
- **Problem:** Steps use `### Step N:` headings or nested lists outside the template steps section.
- **Rule:** `how_to_format.md`, Steps
- **Change:** Use one numbered list; each item starts with a bold imperative title; screen names in bold; state exact plan, repo, branch, build command, and output directory where the goal depends on them.
- **Done when:** All goal-labelled Check 1 items sit under the steps `##` heading in the numbered list format.

### mysql-4 — Remove screenshots and GitBook images
- **Type:** Remove content
- **Problem:** The page includes `## Screenshots` or inline images.
- **Rule:** `writing_style.md`, Links and images; `how_to_format.md`, Steps
- **Change:** Delete image markdown and the Screenshots section.
- **Done when:** No images remain on the page.

### mysql-5 — Wrap Troubleshooting in details blocks
- **Type:** Format fix
- **Problem:** Troubleshooting uses `###` headings instead of styled `<details>` blocks.
- **Rule:** `writing_style.md`, Page pieces; `how_to_format.md`, Troubleshooting
- **Change:** Convert each symptom to the standard `<details style={…}>` block with a one-line `<summary>`.
- **Done when:** Every troubleshooting entry uses the template `<details>` opening tag.

### mysql-8 — Move version matrix out of guide
- **Type:** Move to another doc
- **Problem:** :::info links to MySQL Versions on `/products/…`.
- **Rule:** `FORMAT.MD`, Reference vs How-to
- **Change:** Link a Reference page from Related; keep create steps only.
- **Done when:** Create guide has no version reference block.

### mysql-6 — Fix or remove /products/ and missing static images
- **Type:** Broken link
- **Problem:** Internal link `/products/database-capsule/mysql/versions/` missing; `/gitbook-assets/…` images missing from `static/`.
- **Rule:** `FORMAT.MD`, Check 3
- **Change:** Replace `/products/…` with in-repo docs paths or remove; remove or relocate images until assets exist under `static/`.
- **Done when:** All internal links resolve under `docs/`; images exist under `static/` or are removed.

### mysql-7 — Add doc_version and remove tutorial framing
- **Type:** Format fix
- **Problem:** Description says "tutorial"; missing `doc_version: drift`.
- **Rule:** `writing_style.md`
- **Change:** Set `doc_version: drift`; rewrite intro as How-to outcome (capsule running in the Space).
- **Done when:** Frontmatter complete; intro matches feature goal.

## Proposed outline

## Host Your …
## Prerequisites (DocCardList: account, Space)
## Create your … capsule (numbered wizard steps)
## Troubleshooting
