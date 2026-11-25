# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/docker-capsule/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** Docker Container Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Imperative in Choose how to deploy. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass | Linked docs resolve. |
| Check 4: Format and style | fail | Reference must not include wizard steps. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Move to another doc
- **Title:** Remove wizard instruction from Reference
- **Problem:** `## Choose how to deploy` ends with "On the **Source** step of the wizard, select **Git repository** or **Container image**."
- **Rule:** reference_format.md: no steps in subject sections
- **Change:** Delete imperatives; keep comparison table factual only.
- **Done when:** No instructions in Reference sections.

## Proposed outline

Reference: Overview, deploy comparison table, documentation tables, Related.
