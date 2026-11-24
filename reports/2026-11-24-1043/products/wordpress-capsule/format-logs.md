# Format report: logs

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/wordpress-capsule/logs.md`
- **Feature:** View WordPress capsule logs
- **Goal:** Expect to see capsule logs and access logs
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.708)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/shared/logs.png Image missing in static/: /gitbook-assets/products/shared/access-logs.png Broken internal link: /gitbook-assets/products/shared/logs.png Broken internal link: /gitbook-assets/products/shared/access-logs.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/shared/logs.png Image missing in static/: /gitbook-assets/products/shared/access-logs.png Broken internal link: /gitbook-assets/products/shared/logs.png Broken internal link: /gitbook-assets/products/shared/access-logs.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/shared/logs.png
- Image missing in static/: /gitbook-assets/products/shared/access-logs.png
- Broken internal link: /gitbook-assets/products/shared/logs.png
- Broken internal link: /gitbook-assets/products/shared/access-logs.png

## Tickets

### logs-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/shared/logs.png
- Image missing in static/: /gitbook-assets/products/shared/access-logs.png
- Broken internal link: /gitbook-assets/products/shared/logs.png
- Broken internal link: /gitbook-assets/products/shared/access-logs.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

