# Format report: connect-locally

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/mysql/connect-locally.md`
- **Feature:** Connect to MySQL locally
- **Goal:** Expect the mysql client to connect through the proxy tunnel
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.168)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | pass | DocCardList prerequisites required. |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Troubleshooting`. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.

## Tickets

### connect-locally-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

