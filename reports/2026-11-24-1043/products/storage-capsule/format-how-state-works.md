# Format report: how-state-works

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/storage-capsule/how-state-works.md`
- **Feature:** Understand how storage state works
- **Goal:** Expect to know which data persists across redeploys
- **Doc type:** explanation
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.131)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | pass | OK |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing required section `## Why it matters`. Missing required section `## How it works`. Missing required section `## When to use it`. |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing required section `## Why it matters`.
- Missing required section `## How it works`.
- Missing required section `## When to use it`.

## Tickets

### how-state-works-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** explanation_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing required section `## Why it matters`.
- Missing required section `## How it works`.
- Missing required section `## When to use it`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

