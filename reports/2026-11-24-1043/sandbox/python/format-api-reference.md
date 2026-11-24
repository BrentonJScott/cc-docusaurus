# Format report: api-reference

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/sandbox/python/api-reference.md`
- **Feature:** View Python sandbox SDK reference
- **Goal:** Expect to see each method, type and exception
- **Doc type:** reference
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.885)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.

## Tickets

### api-reference-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** reference_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Done when:** FORMAT.MD re-check passes for this doc type.

