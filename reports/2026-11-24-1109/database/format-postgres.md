# Format report: postgres

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/database/postgres.md`
- **Feature:** Create PostgreSQL database capsule
- **Goal:** Expect to see the PostgreSQL capsule running in the space
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/create-postgresql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/postgresql-connection-string.png Broken internal link: /gitbook-assets/get-started/create-postgresql-capsule.jpg Broken internal link: /gitbook-assets/get-started/postgresql-connection-string.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/create-postgresql-capsule.jpg Image missing in static/: /gitbook-assets/get-started/postgresql-connection-string.png Broken internal link: /gitbook-assets/get-started/create-postgresql-capsule.jpg Broken internal link: /gitbook-assets/get-started/postgresql-connection-string.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-postgresql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/postgresql-connection-string.png
- Broken internal link: /gitbook-assets/get-started/create-postgresql-capsule.jpg
- Broken internal link: /gitbook-assets/get-started/postgresql-connection-string.png

## Tickets

### postgres-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/create-postgresql-capsule.jpg
- Image missing in static/: /gitbook-assets/get-started/postgresql-connection-string.png
- Broken internal link: /gitbook-assets/get-started/create-postgresql-capsule.jpg
- Broken internal link: /gitbook-assets/get-started/postgresql-connection-string.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

