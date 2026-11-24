# Format report: health-checks

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/capsules/health-checks.md`
- **Doc type:** how-to
- **Feature:** Configure health checks
- **Goal:** Expect to see the capsule report healthy
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Broken internal link: /products/docker-capsule/scale/#horizontal-scaling Broken internal link: /products/backend-capsule/configure/ Broken internal link: /products/docker-capsule/configure/ Broken internal link: /products/agent-capsule/configure/ Broken internal link: /products/wordpress-capsule/configure/ Broken internal link: /products/docker-capsule/deployments/#deployment-strategy Broken internal link: /platform/security/basic-auth/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Broken internal link: /products/docker-capsule/scale/#horizontal-scaling Broken internal link: /products/backend-capsule/configure/ Broken internal link: /products/docker-capsule/configure/ Broken internal link: /products/agent-capsule/configure/ Broken internal link: /products/wordpress-capsule/configure/ Broken internal link: /products/docker-capsule/deployments/#deployment-strategy Broken internal link: /platform/security/basic-auth/ Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### health-checks-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Broken internal link: /products/docker-capsule/scale/#horizontal-scaling
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Broken internal link: /products/docker-capsule/scale/#horizontal-scaling
- Broken internal link: /products/backend-capsule/configure/
- Broken internal link: /products/docker-capsule/configure/
- Broken internal link: /products/agent-capsule/configure/
- Broken internal link: /products/wordpress-capsule/configure/
- Broken internal link: /products/docker-capsule/deployments/#deployment-strategy
- Broken internal link: /platform/security/basic-auth/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Broken internal link: /products/docker-capsule/scale/#horizontal-scaling
- Broken internal link: /products/backend-capsule/configure/
- Broken internal link: /products/docker-capsule/configure/
- Broken internal link: /products/agent-capsule/configure/
- Broken internal link: /products/wordpress-capsule/configure/
- Broken internal link: /products/docker-capsule/deployments/#deployment-strategy
- Broken internal link: /platform/security/basic-auth/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
