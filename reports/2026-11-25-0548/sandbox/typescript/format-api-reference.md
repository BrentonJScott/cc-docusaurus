# Format report — api-reference

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/sandbox/typescript/api-reference.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** TypeScript Sandbox SDK Methods & Types
- **Goal:** Expect to see each method, type and error class
- **Format check:** fail

## Content list

1. (`fact`) under `Error classes` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### api-reference-1
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### api-reference-2
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### api-reference-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/sandbox/typescript/api-reference.md` to match reference_format.md — see tickets above.)
