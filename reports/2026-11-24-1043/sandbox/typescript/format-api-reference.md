# Format report: api-reference

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/sandbox/typescript/api-reference.md`
- **Feature:** View TypeScript sandbox SDK reference
- **Goal:** Expect to see each method, type and error class
- **Doc type:** reference
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.85)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Links to live codecapsules.io instead of internal docs paths. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Links to live codecapsules.io instead of internal docs paths.

## Tickets

### api-reference-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** reference_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Links to live codecapsules.io instead of internal docs paths.
- **Done when:** FORMAT.MD re-check passes for this doc type.

