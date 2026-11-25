# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/database-capsule/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** Managed Database Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | MongoDB section includes opinion/marketing: "the **recommended** option". |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass | Linked paths resolve. |
| Check 4: Format and style | fail | Reference Overview/subjects must be factual only. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Remove content
- **Title:** Remove recommendation language
- **Problem:** `## MongoDB` states Atlas clusters are "the **recommended** option".
- **Rule:** reference_format.md Overview/Subject: no marketing
- **Change:** State factually that MongoDB Capsules use Atlas; move preference language to Explanation or delete.
- **Done when:** No opinion labels remain in Reference sections.

## Proposed outline

Reference: Overview, engine sections as tables, Related DocCardList.
