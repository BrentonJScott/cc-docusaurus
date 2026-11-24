# Format report: configure

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/postgresql/configure.md`
- **Feature:** Configure PostgreSQL capsule
- **Goal:** Expect to see connection details and the capsule name updated
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.936)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/database-capsule/details/postgresql-details.png Broken internal link: /gitbook-assets/products/database-capsule/details/postgresql-details.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/database-capsule/details/postgresql-details.png Broken internal link: /gitbook-assets/products/database-capsule/details/postgresql-details.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/postgresql-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/postgresql-details.png

## Tickets

### configure-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/postgresql-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/postgresql-details.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

