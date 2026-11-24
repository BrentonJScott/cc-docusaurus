# Format report: configure

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/database-capsule/mongodb/configure.md`
- **Feature:** Configure MongoDB capsule
- **Goal:** Expect to see connection details and the MongoDB version set
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.979)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details.png Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png Image missing in static/: /gitbook-assets/products/database-capsule/config/mongodb-config.png Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details.png Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png Broken internal link: /gitbook-assets/products/database-capsule/config/mongodb-config.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details.png Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png Image missing in static/: /gitbook-assets/products/database-capsule/config/mongodb-config.png Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details.png Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png Broken internal link: /gitbook-assets/products/database-capsule/config/mongodb-config.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details.png
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png
- Image missing in static/: /gitbook-assets/products/database-capsule/config/mongodb-config.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png
- Broken internal link: /gitbook-assets/products/database-capsule/config/mongodb-config.png

## Tickets

### configure-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details.png
- Image missing in static/: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png
- Image missing in static/: /gitbook-assets/products/database-capsule/config/mongodb-config.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details.png
- Broken internal link: /gitbook-assets/products/database-capsule/details/mongodb-details-public-access.png
- Broken internal link: /gitbook-assets/products/database-capsule/config/mongodb-config.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

