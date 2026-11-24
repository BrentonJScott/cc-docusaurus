# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/agentic-automation/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Agentic Automation for Business Processes
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`fact`) under `Troubleshooting` — (prose)

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
- **Type:** Broken link
- **Title:** Fix broken internal links or images
- **Problem:** Broken targets: ./the-problem, ./the-framework, ./designing-agents, ./deployment
- **Rule:** FORMAT.MD Check 3
- **Change:** Update links to existing docs paths or add missing pages.
- **Done when:** All internal links resolve under docs/ or static/.

### index-4
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/agentic-automation/index.md` to match reference_format.md — see tickets above.)
