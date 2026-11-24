# Format report: updates

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/docker-capsule/image/updates.md`
- **Feature:** Update deployed Docker image
- **Goal:** Expect to see the newer image version deployed
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.793)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png Broken internal link: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Image missing in static/: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png Broken internal link: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Image missing in static/: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png
- Broken internal link: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png

## Tickets

### updates-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Image missing in static/: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png
- Broken internal link: /gitbook-assets/products/docker-capsule/deploy/docker-deploy-tab-image.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

