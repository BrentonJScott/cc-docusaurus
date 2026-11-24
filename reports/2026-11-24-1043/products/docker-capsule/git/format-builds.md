# Format report: builds

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/docker-capsule/git/builds.md`
- **Feature:** Build Docker image from Git
- **Goal:** Expect to see a build triggered with the chosen branch, Dockerfile path and build context
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.753)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.

## Tickets

### builds-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

