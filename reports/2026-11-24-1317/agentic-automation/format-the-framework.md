# Format report — the-framework

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/agentic-automation/the-framework.md`
- **Doc type:** explanation
- **Template:** explanation_format.md
- **Feature:** The Agentic Automation Framework
- **Goal:** Expect to know the orchestrator and agent roles
- **Format check:** fail

## Content list

1. (`build`) under `The orchestrator` — - Stores **workflow definitions** — ordered sequences of agent steps with cron schedules
2. (`build`) under `The orchestrator` — - Uses **BullMQ** to fire scheduled workflows reliably, with retry logic and deduplication
3. (`build`) under `The orchestrator` — - Calls the **Code Capsules API** to wake an agent capsule when it has work to do
4. (`build`) under `The orchestrator` — - Waits for the agent to report healthy, then sends it the job via a REST call
5. (`build`) under `The orchestrator` — - Receives results via a **webhook** when the agent finishes
6. (`build`) under `The orchestrator` — - Scales the agent capsule back to zero and advances to the next step — or marks the run complete
7. (`build`) under `An agent` — - Implements a standard REST API contract (`GET /health`, `GET /status`, `POST /run`)
8. (`build`) under `An agent` — - Accepts an `AgentRunRequest` and returns an `AgentRunResult` via webhook
9. (`build`) under `An agent` — - Contains all the logic for one specific task — and nothing else
10. (`build`) under `An agent` — - Can be written in any language, use any model, call any API
11. (`build`) under `An agent` — - Costs nothing when it is not running
12. (`build`) under `What the orchestrator does not do` — - No business logic
13. (`build`) under `What the orchestrator does not do` — - No LLM calls
14. (`build`) under `What the orchestrator does not do` — - No data transformation
15. (`build`) under `What the orchestrator does not do` — - No direct database queries
16. (`build`) under `What the orchestrator does not do` — - No knowledge of what any agent does internally

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | fail | See tickets |

## Tickets

### the-framework-1
- **Type:** Format fix
- **Title:** Add ## Overview
- **Problem:** Explanation missing `## Overview`.
- **Rule:** explanation_format.md
- **Change:** Add Overview section with content.
- **Done when:** Section present with content.

### the-framework-2
- **Type:** Format fix
- **Title:** Add ## Related
- **Problem:** Explanation missing `## Related`.
- **Rule:** explanation_format.md
- **Change:** Add Related section with content.
- **Done when:** Section present with content.

### the-framework-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** explanation_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

### the-framework-4
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/agentic-automation/the-framework.md` to match explanation_format.md — see tickets above.)
