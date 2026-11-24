# Format report: supported-runtimes

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/products/backend-capsule/supported-runtimes.md`
- **Feature:** Check supported backend runtimes
- **Goal:** Expect to see supported runtimes and pin a runtime version
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.13)

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

### supported-runtimes-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing `## Prerequisites`.
- **Rule:** how_to_format.md
- **Change:** Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

