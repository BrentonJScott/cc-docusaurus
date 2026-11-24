# Format report — the-problem

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/agentic-automation/the-problem.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Why Business Automation Fails at Scale
- **Goal:** Expect to know the failure modes the framework addresses
- **Format check:** fail

## Content list

1. (`build`) under `What a solution looks like` — - **Isolated, single-purpose agents** so failures are contained and components are independently replaceable
2. (`build`) under `What a solution looks like` — - **A typed contract between agents** so output from one step is validated before it becomes input to the next
3. (`build`) under `What a solution looks like` — - **A persistent orchestration layer** that tracks workflow state and can resume, retry, or alert on failure
4. (`build`) under `What a solution looks like` — - **Git-based deployment** so every change to agent logic is reviewed, versioned, and reversible
5. (`build`) under `What a solution looks like` — - **Cost-efficient infrastructure** that does not charge for idle agents between runs

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | fail | See tickets |

## Tickets

### the-problem-1
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### the-problem-2
- **Type:** Format fix
- **Title:** Add ## Why it matters
- **Problem:** Explanation missing `## Why it matters`.
- **Rule:** explanation_format.md
- **Change:** Add Why it matters section with content.
- **Done when:** Section present with content.

### the-problem-3
- **Type:** Format fix
- **Title:** Add ## How it works
- **Problem:** Explanation missing `## How it works`.
- **Rule:** explanation_format.md
- **Change:** Add How it works section with content.
- **Done when:** Section present with content.

### the-problem-4
- **Type:** Format fix
- **Title:** Add ## When to use it
- **Problem:** Explanation missing `## When to use it`.
- **Rule:** explanation_format.md
- **Change:** Add When to use it section with content.
- **Done when:** Section present with content.

### the-problem-5
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### the-problem-6
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

### the-problem-7
- **Type:** Format fix
- **Title:** Add frontmatter field sidebar_label
- **Problem:** Missing frontmatter `sidebar_label`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `sidebar_label` to frontmatter.
- **Done when:** All required frontmatter fields present.

### the-problem-8
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### the-problem-9
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/agentic-automation/the-problem.md` to match explanation_format.md — see tickets above.)
