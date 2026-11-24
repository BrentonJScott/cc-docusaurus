# Format report: backups

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/postgresql/backups.md`
- **Feature:** Back up PostgreSQL capsule
- **Goal:** Expect to see a completed backup listed under backups
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.874)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png Broken internal link: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png Broken internal link: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png
- Broken internal link: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png

## Tickets

### backups-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png
- Broken internal link: /gitbook-assets/products/database-capsule/backups/postgresql-backups.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

