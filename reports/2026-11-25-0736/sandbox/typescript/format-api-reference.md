# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/sandbox/typescript/api-reference.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** TypeScript Sandbox SDK Methods & Types
- **Goal:** Expect to see each method, type and error class
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | API facts. |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | fail | Related `/sandbox/python/api-reference` missing. |
| Check 4: Format and style | pass |  |

## Tickets

### api-reference-1

- **ID:** api-reference-1
- **Type:** Broken link
- **Title:** Fix Python API Related link
- **Problem:** DocCardList includes `/sandbox/python/api-reference`.
- **Rule:** FORMAT.MD Check 3
- **Change:** Add Python API reference doc or remove the card until it exists.
- **Done when:** Link resolves or card removed.

## Proposed outline

Reference method/type sections and Related.
