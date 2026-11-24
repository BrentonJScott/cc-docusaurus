# Format report: what-regions-does-code-capsules-support

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/regions/what-regions-does-code-capsules-support.md`
- **Feature:** View available regions
- **Goal:** Expect to see each supported region
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/regions/region-options.jpg Broken internal link: /gitbook-assets/platform/platform/regions/region-options.jpg |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/platform/platform/regions/region-options.jpg Broken internal link: /gitbook-assets/platform/platform/regions/region-options.jpg |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/regions/region-options.jpg
- Broken internal link: /gitbook-assets/platform/platform/regions/region-options.jpg

## Tickets

### what-regions-does-code-capsules-support-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/regions/region-options.jpg
- Broken internal link: /gitbook-assets/platform/platform/regions/region-options.jpg
- **Done when:** FORMAT.MD re-check passes for this doc type.

