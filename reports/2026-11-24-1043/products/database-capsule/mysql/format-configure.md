# Format report: configure

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/mysql/configure.md`
- **Feature:** Configure MySQL capsule
- **Goal:** Expect to see connection details and updated MySQL settings saved
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.012)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/database-capsule/details/mysql-details.png Image missing in static/: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png Broken internal link: /gitbook-assets/products/database-capsule/details/mysql-details.png Broken internal link: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/database-capsule/details/mysql-details.png Image missing in static/: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png Broken internal link: /gitbook-assets/products/database-capsule/details/mysql-details.png Broken internal link: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mysql-details.png
- Image missing in static/: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mysql-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png

## Tickets

### configure-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mysql-details.png
- Image missing in static/: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mysql-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/config/mysql-config-edit.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

