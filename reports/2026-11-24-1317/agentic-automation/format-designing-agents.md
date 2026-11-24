# Format report — designing-agents

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/agentic-automation/designing-agents.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Design AI Agents for Business Automation
- **Goal:** Expect to define an agent's responsibility, model and contract
- **Format check:** fail

## Content list

1. (`goal`) under `The single responsibility principle for agents` — - `marketing-agent` — runs marketing workflows
2. (`goal`) under `The single responsibility principle for agents` — - `data-agent` — processes data
3. (`goal`) under `The single responsibility principle for agents` — - `reporting-agent` — generates and sends reports
4. (`goal`) under `The single responsibility principle for agents` — - `gsc-fetcher` — fetches Google Search Console data for a given site and date range
5. (`goal`) under `The single responsibility principle for agents` — - `seo-analyser` — takes raw GSC data and produces a structured SEO report using Claude
6. (`goal`) under `The single responsibility principle for agents` — - `slack-notifier` — posts a formatted message to a Slack channel
7. (`goal`) under `The language does not matter` — - A data scientist can write an analysis agent in Python using the libraries they know
8. (`goal`) under `The language does not matter` — - A backend developer can write an integration agent in TypeScript
9. (`goal`) under `The language does not matter` — - A future developer can rewrite either one in a completely different language without touching the orchestrator or any 
10. (`goal`) under `The agent contract as a design discipline` — 1. **What is the input?** What fields in `request.input` does this agent read? Where do they come from?
11. (`goal`) under `The agent contract as a design discipline` — 2. **What is the output?** What does `result.output` contain when this agent succeeds?
12. (`goal`) under `The agent contract as a design discipline` — 3. **What are the failure modes?** What errors can this agent produce? How should the orchestrator respond to them?
13. (`goal`) under `The agent contract as a design discipline` — 4. **What does this agent *not* do?** What is explicitly out of scope?
14. (`goal`) under `An example: designing the SEO audit agent system` — - Google Search Console (external system)
15. (`goal`) under `An example: designing the SEO audit agent system` — - Claude Opus for analysis (LLM call)
16. (`goal`) under `An example: designing the SEO audit agent system` — - Slack (external system)
17. (`goal`) under `An example: designing the SEO audit agent system` — - `gsc-fetcher`: no LLM, pure API calls
18. (`goal`) under `An example: designing the SEO audit agent system` — - `seo-analyser`: Claude Opus (the reasoning step that produces the most value)
19. (`goal`) under `An example: designing the SEO audit agent system` — - `slack-notifier`: no LLM, format the report and call the Slack API

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | fail | See tickets |
| Format and style | fail | See tickets |

## Tickets

### designing-agents-1
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### designing-agents-2
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### designing-agents-3
- **Type:** Broken link
- **Title:** Fix broken internal links or images
- **Problem:** Broken targets: ../the-problem
- **Rule:** FORMAT.MD Check 3
- **Change:** Update links to existing docs paths or add missing pages.
- **Done when:** All internal links resolve under docs/ or static/.

### designing-agents-4
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/agentic-automation/designing-agents.md` to match how_to_format.md — see tickets above.)
