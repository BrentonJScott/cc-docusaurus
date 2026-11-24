# Format report — quickstart

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/sandbox/quickstart.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Sandbox SDK Quick Start
- **Goal:** Expect the reader to understand: Install the Sandbox SDK, set your API key, and run your first command in a Firecracker microVM
- **Format check:** fail

## Content list

1. (`build`) under `Next steps` — - [Environments](/sandbox/environments/): choose the right flavor for your workload
2. (`build`) under `Next steps` — - [TypeScript SDK reference](/sandbox/typescript/api-reference/)
3. (`build`) under `Next steps` — - [Python SDK reference](/sandbox/python/api-reference/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### quickstart-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** explanation_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### quickstart-2
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### quickstart-3
- **Type:** Format fix
- **Title:** Add ## Why it matters
- **Problem:** Explanation missing `## Why it matters`.
- **Rule:** explanation_format.md
- **Change:** Add Why it matters section with content.
- **Done when:** Section present with content.

### quickstart-4
- **Type:** Format fix
- **Title:** Add ## How it works
- **Problem:** Explanation missing `## How it works`.
- **Rule:** explanation_format.md
- **Change:** Add How it works section with content.
- **Done when:** Section present with content.

### quickstart-5
- **Type:** Format fix
- **Title:** Add ## When to use it
- **Problem:** Explanation missing `## When to use it`.
- **Rule:** explanation_format.md
- **Change:** Add When to use it section with content.
- **Done when:** Section present with content.

### quickstart-6
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### quickstart-7
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/sandbox/quickstart.md` to match explanation_format.md — see tickets above.)
