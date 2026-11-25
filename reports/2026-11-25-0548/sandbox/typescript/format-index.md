# Format report — typescript

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/sandbox/typescript/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Sandbox SDK for TypeScript & Node.js
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `SDK reference` — - [API Reference](/sandbox/typescript/api-reference/): `Sandbox` class, all methods, types, and error classes
2. (`build`) under `Links` — - [npm · @codecapsules/sandbox](https://www.npmjs.com/package/@codecapsules/sandbox)
3. (`build`) under `Links` — - [GitHub · codecapsules-io/sandbox](https://github.com/codecapsules-io/sandbox)

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
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### index-2
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### index-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/sandbox/typescript/index.md` to match reference_format.md — see tickets above.)
