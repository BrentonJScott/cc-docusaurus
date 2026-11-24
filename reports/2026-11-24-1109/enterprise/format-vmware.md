# Format report: vmware

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/enterprise/vmware.md`
- **Feature:** View enterprise on VMware
- **Goal:** Expect to see the coming soon notice
- **Doc type:** explanation
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.687)

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

### vmware-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** explanation_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing required section `## Why it matters`.
- Missing required section `## How it works`.
- Missing required section `## When to use it`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

