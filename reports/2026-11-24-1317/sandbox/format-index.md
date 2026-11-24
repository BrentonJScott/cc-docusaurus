# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/sandbox/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** AI Agent Sandboxes: Firecracker microVMs
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `What's in this section` — - [Quick start](/sandbox/quickstart/): install, set your API key, run your first command
2. (`build`) under `What's in this section` — - [Environments](/sandbox/environments/): available flavors and what's preinstalled
3. (`build`) under `What's in this section` — - [TypeScript SDK](/sandbox/typescript/): `@codecapsules/sandbox` on npm
4. (`build`) under `What's in this section` — - [Python SDK](/sandbox/python/): `codecapsules-sandbox` on PyPI

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

(Rewrite `docs/sandbox/index.md` to match reference_format.md — see tickets above.)
