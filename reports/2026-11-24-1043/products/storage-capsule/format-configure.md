# Format report: configure

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/storage-capsule/configure.md`
- **Feature:** Configure storage capsule
- **Goal:** Expect to see public access on and a WebDAV client connected
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.979)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-details.png Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-public-access.png Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-details.png Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-public-access.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-details.png Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-public-access.png Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-details.png Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-public-access.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-details.png
- Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-public-access.png
- Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-details.png
- Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-public-access.png

## Tickets

### configure-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-details.png
- Image missing in static/: /gitbook-assets/products/storage-capsule/config/storage-public-access.png
- Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-details.png
- Broken internal link: /gitbook-assets/products/storage-capsule/config/storage-public-access.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

