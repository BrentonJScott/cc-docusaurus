# Format report: prerequisites

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/cli/readme/getting-started/prerequisites.md`
- **Feature:** Check CLI prerequisites
- **Goal:** Expect every requirement installed before installing the CLI
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.022)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.

## Tickets

### prerequisites-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- **Done when:** FORMAT.MD re-check passes for this doc type.

