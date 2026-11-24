# Format report: backups

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/wordpress-capsule/backups.md`
- **Feature:** Back up WordPress capsule
- **Goal:** Expect to see a completed backup listed
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.888)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.

## Tickets

### backups-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

