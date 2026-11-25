# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/sandbox/typescript/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** Sandbox SDK for TypeScript & Node.js
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass |  |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | fail | `/sandbox/quickstart` missing in Related. |
| Check 4: Format and style | pass |  |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Broken link
- **Title:** Fix quickstart Related link
- **Problem:** Related card href `/sandbox/quickstart`.
- **Rule:** FORMAT.MD Check 3
- **Change:** Create quickstart or point to installation-and-usage equivalent.
- **Done when:** Href resolves.

## Proposed outline

Reference: Overview, Installation table, Lifecycle patterns, Related.
