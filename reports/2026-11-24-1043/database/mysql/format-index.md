# Format report: index

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/database/mysql/index.md`
- **Feature:** Create MySQL database capsule
- **Goal:** Expect to see the MySQL capsule running in the space
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Broken internal link: /gitbook-assets/get-started/create-sql-capsule.jpg Broken internal link: /gitbook-assets/get-started/sql-bind-env.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Broken internal link: /gitbook-assets/get-started/create-sql-capsule.jpg Broken internal link: /gitbook-assets/get-started/sql-bind-env.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Broken internal link: /gitbook-assets/get-started/create-sql-capsule.jpg
- Broken internal link: /gitbook-assets/get-started/sql-bind-env.png

## Tickets

### index-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-sql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Broken internal link: /gitbook-assets/get-started/create-sql-capsule.jpg
- Broken internal link: /gitbook-assets/get-started/sql-bind-env.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

