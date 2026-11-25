# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/database-capsule/mysql/versions/upgrades/index.md`
- **Doc type:** Reference (intended); frontmatter reads How-to
- **Template:** `reference_format.md`
- **Feature:** Upgrade MySQL Versions
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Same hub/type mismatch as MongoDB upgrades. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | How-to title on Reference-style hub. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Wrong doc type
- **Title:** Align type with Reference hub
- **Problem:** Intro says "Pick the guide" but `## Upgrade paths` rows are plain text without links.
- **Rule:** FORMAT.MD Step 1
- **Change:** Use Reference template or add linked How-to guides per row.
- **Done when:** Every linked upgrade path opens a real doc.

## Proposed outline

Reference hub: Overview, upgrade path table with hrefs, Related.
