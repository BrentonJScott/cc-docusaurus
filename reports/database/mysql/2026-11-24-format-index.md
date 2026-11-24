# Format report: index

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/database/mysql/index.md`
- **Doc type:** how-to
- **Feature:** Create MySQL database capsule
- **Goal:** Expect to see the MySQL capsule running in the space
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### index-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
