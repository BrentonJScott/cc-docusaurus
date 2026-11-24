# Format report: templates

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/agent-capsule/templates.md`
- **Feature:** Create agent capsule from a template
- **Goal:** Expect to see the agent running with a vector store set up
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.806)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.

## Tickets

### templates-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

