# Format report: 7-0-to-8-0

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md`
- **Feature:** Upgrade MongoDB 7.0 to 8.0
- **Goal:** Expect to see the capsule version show 8.0
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.633)

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

### 7-0-to-8-0-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing `## Prerequisites`.
- **Rule:** how_to_format.md
- **Change:** Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

