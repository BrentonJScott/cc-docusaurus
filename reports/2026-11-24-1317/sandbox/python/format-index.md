# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/sandbox/python/index.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Sandbox SDK for Python
- **Goal:** Expect the reader to understand: The codecapsules-sandbox Python SDK for creating and managing Firecracker microVM sandboxes
- **Format check:** fail

## Content list

1. (`build`) under `SDK reference` — - [API Reference](/sandbox/python/api-reference/): `Sandbox`, `AsyncSandbox`, types, and exceptions
2. (`build`) under `Links` — - [PyPI · codecapsules-sandbox](https://pypi.org/project/codecapsules-sandbox/)
3. (`build`) under `Links` — - [GitHub · codecapsules-io/sandbox-python](https://github.com/codecapsules-io/sandbox-python)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | fail | See tickets |

## Tickets

### index-1
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### index-2
- **Type:** Format fix
- **Title:** Add ## Why it matters
- **Problem:** Explanation missing `## Why it matters`.
- **Rule:** explanation_format.md
- **Change:** Add Why it matters section with content.
- **Done when:** Section present with content.

### index-3
- **Type:** Format fix
- **Title:** Add ## How it works
- **Problem:** Explanation missing `## How it works`.
- **Rule:** explanation_format.md
- **Change:** Add How it works section with content.
- **Done when:** Section present with content.

### index-4
- **Type:** Format fix
- **Title:** Add ## When to use it
- **Problem:** Explanation missing `## When to use it`.
- **Rule:** explanation_format.md
- **Change:** Add When to use it section with content.
- **Done when:** Section present with content.

### index-5
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### index-6
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

### index-7
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### index-8
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/sandbox/python/index.md` to match explanation_format.md — see tickets above.)
