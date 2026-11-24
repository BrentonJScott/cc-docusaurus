# Format report: schema-migrations

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/mysql/schema-migrations.md`
- **Feature:** Run MySQL schema migrations
- **Goal:** Expect to see the migration applied to the database
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.177)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/configure-tab.png Image missing in static/: /gitbook-assets/products/sql-files.png Image missing in static/: /gitbook-assets/products/configure-tab-run-command.png Broken internal link: /gitbook-assets/products/configure-tab.png Broken internal link: /gitbook-assets/products/sql-files.png Broken internal link: /gitbook-assets/products/configure-tab-run-command.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/configure-tab.png Image missing in static/: /gitbook-assets/products/sql-files.png Image missing in static/: /gitbook-assets/products/configure-tab-run-command.png Broken internal link: /gitbook-assets/products/configure-tab.png Broken internal link: /gitbook-assets/products/sql-files.png Broken internal link: /gitbook-assets/products/configure-tab-run-command.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/configure-tab.png
- Image missing in static/: /gitbook-assets/products/sql-files.png
- Image missing in static/: /gitbook-assets/products/configure-tab-run-command.png
- Broken internal link: /gitbook-assets/products/configure-tab.png
- Broken internal link: /gitbook-assets/products/sql-files.png
- Broken internal link: /gitbook-assets/products/configure-tab-run-command.png

## Tickets

### schema-migrations-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/configure-tab.png
- Image missing in static/: /gitbook-assets/products/sql-files.png
- Image missing in static/: /gitbook-assets/products/configure-tab-run-command.png
- Broken internal link: /gitbook-assets/products/configure-tab.png
- Broken internal link: /gitbook-assets/products/sql-files.png
- Broken internal link: /gitbook-assets/products/configure-tab-run-command.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

