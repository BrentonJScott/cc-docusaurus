# Format report: scale

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/docker-capsule/scale.md`
- **Feature:** Scale Docker capsule
- **Goal:** Expect to see new resources saved and the capsule stop and start
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.85)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/docker-capsule/scale/docker-scale.png Broken internal link: /gitbook-assets/products/docker-capsule/scale/docker-scale.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/docker-capsule/scale/docker-scale.png Broken internal link: /gitbook-assets/products/docker-capsule/scale/docker-scale.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/docker-capsule/scale/docker-scale.png
- Broken internal link: /gitbook-assets/products/docker-capsule/scale/docker-scale.png

## Tickets

### scale-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/docker-capsule/scale/docker-scale.png
- Broken internal link: /gitbook-assets/products/docker-capsule/scale/docker-scale.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

