# Format report: index

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/products/database-capsule/mysql/versions/upgrades/index.md`
- **Feature:** Find a MySQL upgrade guide
- **Goal:** Expect every link on the page to open an existing guide
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.808)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | pass | OK |
| Format and style | fail | Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Mechanical findings

- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.

## Tickets

### index-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing `## Prerequisites`.
- **Rule:** how_to_format.md
- **Change:** Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

