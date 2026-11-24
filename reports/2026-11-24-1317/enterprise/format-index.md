# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/enterprise/index.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** Enterprise PaaS on Your Own Cloud
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`explain`) under `When to use it` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

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
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### index-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/enterprise/index.md` to match explanation_format.md — see tickets above.)
