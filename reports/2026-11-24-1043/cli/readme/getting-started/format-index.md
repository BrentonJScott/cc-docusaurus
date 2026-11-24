# Format report: index

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/cli/readme/getting-started/index.md`
- **Feature:** View CLI getting started index
- **Goal:** Expect every link on the page to open an existing page
- **Doc type:** reference
- **Format check:** fail
- **Guide match:** curated (score 1.0)

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

### index-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** reference_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Done when:** FORMAT.MD re-check passes for this doc type.

