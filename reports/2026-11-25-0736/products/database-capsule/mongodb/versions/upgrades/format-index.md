# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/database-capsule/mongodb/versions/upgrades/index.md`
- **Doc type:** Reference (intended); frontmatter reads How-to
- **Template:** `reference_format.md`
- **Feature:** Upgrade MongoDB Versions
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Wrong doc type; hub text picks a guide but table rows lack links. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass | DocCardList hrefs resolve. |
| Check 4: Format and style | fail | Title `# MongoDB Major Version Upgrades` and intro imply How-to; sections are Reference hub, not template order. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Wrong doc type
- **Title:** Align type with Reference hub layout
- **Problem:** Frontmatter title is "How to Upgrade MongoDB Versions" but body is an upgrade path table and Related cards only.
- **Rule:** FORMAT.MD Step 1
- **Change:** Retitle to Reference pattern; add factual Overview and linked upgrade guides in the table, or rewrite as a single-path How-to.
- **Done when:** Frontmatter, `#` heading, and section order match one template.

## Proposed outline

Reference hub with Overview, `## Upgrade paths` table (linked guides), Related.
