# Format report: index

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/database/index.md`
- **Doc type:** index
- **Feature:** View database hosting index
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | fail | Index has no DocCardList or link table for manifest goal. |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Index page is stub or nearly empty. Index has no DocCardList or link table for manifest goal. |

## Tickets

### index-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Index page is stub or nearly empty. Index has no DocCardList or link table for manifest goal.
- **Rule:** writing_style.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Index page is stub or nearly empty.
- Index has no DocCardList or link table for manifest goal.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Index page is stub or nearly empty.
- Index has no DocCardList or link table for manifest goal.
