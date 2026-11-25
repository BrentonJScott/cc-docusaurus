# Format report: Designing Agents

- **Run timestamp:** 2026-11-25-0736
- **Doc file:** `docs/agentic-automation/designing-agents.md`
- **Doc type:** How-to guide (per documented feature); on-page structure is predominantly Explanation
- **Template used:** `formats/how_to_format.md`
- **Feature:** Design AI Agents for Business Automation
- **Goal:** Expect to define an agent's responsibility, model and contract
- **Format check:** fail

## Content list

Instructions and statements in order, with label and heading:

| # | Label | Heading | Statement (summary) |
|---|---|---|---|
| 1 | remove | (under `#`) | Large agents are a common mistake; link to The Problem |
| 2 | explain | (under `#`) | Over-scoped agent is a monolith with an AI API call |
| 3 | prerequisite | `## Prerequisites` | Framework card (orchestrator and agent roles) |
| 4 | prerequisite | `## Prerequisites` | Code Capsules account card |
| 5 | remove | (after Prerequisites) | Page describes how to think about agent design |
| 6 | explain | `## The single responsibility principle for agents` | One thing per agent; too broad vs correctly scoped examples |
| 7 | explain | `## The single responsibility principle for agents` | Scoped agents are reusable across workflows |
| 8 | explain | `## Drawing the right boundaries` | Heuristic: one agent per external system or per model call |
| 9 | explain | `## Drawing the right boundaries` | SEO workflow table mapping steps to agents |
| 10 | explain | `## Choosing the right model for each task` | Match model to task type (reasoning, extraction, routing, validation) |
| 11 | fact | `## Choosing the right model for each task` | Recommended model table for Code Capsules platform |
| 12 | explain | `## The language does not matter` | Agent is JSON in/out; language is implementation detail |
| 13 | instruction | `## Keeping agents thin` | When adding a new agent: copy scaffolding, replace job logic, update contract docs, register with orchestrator |
| 14 | instruction | `## The agent contract as a design discipline` | Before coding, answer four contract questions (input, output, failures, out of scope) |
| 15 | explain | `## An example: designing the SEO audit agent system` | Walkthrough of gsc-fetcher, seo-analyser, slack-notifier contracts |
| 16 | remove | `## Troubleshooting` | Advice to define fields and validate output (not framed as reader symptom/fix) |

No `goal` steps appear under a `## <Verb> your <Thing>` steps section.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Wrong doc type mix; no numbered goal steps; explanatory and reference tables dominate; goal not reached on-page |
| Check 2: Prerequisites | fail | Prerequisites not placed directly after title/description; framework prerequisite links to missing doc |
| Check 3: Links | fail | `/agentic-automation/the-problem` and `/agentic-automation/the-framework` have no files under `docs/` |
| Check 4: Format and style | fail | Section set, title/description, and layout do not match `how_to_format.md` or `writing_style.md` |
| Walkthrough | not run (format fail) | How-to guide |

## Tickets

### designing-agents-1

- **ID:** designing-agents-1
- **Type:** Wrong doc type
- **Title:** Rewrite as a How-to or split Explanation from the task guide.
- **Problem:** The documented feature is a How-to whose goal is defining responsibility, model, and contract, but the page is a long Explanation (SRP, boundaries, models, language, contracts, SEO example) with only a thin Prerequisites and Troubleshooting wrapper.
- **Rule:** `FORMAT.MD`, Step 1: doc must not mix types; feature maps to How-to (`cc_documented_features.md` / `DOCUMENTED_FEATURES.MD`).
- **Change:** Either (a) rewrite as a How-to with Prerequisites, a single steps section that walks the reader through defining responsibility, choosing a model, and documenting the contract, ending with the stated goal, or (b) move conceptual content to a new Explanation (for example under the same folder) and keep this file as the short How-to. Link the Explanation from Related if split.
- **Done when:** One primary template type covers the feature goal end to end; mixed-type sections are removed or relocated.

### designing-agents-2

- **ID:** designing-agents-2
- **Type:** Missing goal step
- **Title:** Add steps that reach define responsibility, model, and contract.
- **Problem:** There is no `## <Verb> your <Thing>` section and no numbered list whose last step shows the reader has defined responsibility, model, and contract for an agent.
- **Rule:** `how_to_format.md`, Steps; `FORMAT.MD`, Check 1 (How-to: goal steps).
- **Change:** Add a steps section (for example `## Design your agent`) with a numbered list: scope single responsibility, pick model for the task, document `AgentRunRequest` / `AgentRunResult` input and output, and state failure modes; end with the reader seeing a written agent definition matching the feature goal.
- **Done when:** The last step explicitly matches the documented goal and every goal-labelled action lives only in that steps section.

### designing-agents-3

- **ID:** designing-agents-3
- **Type:** Format fix
- **Title:** Fix title, description, and section order for How-to layout.
- **Problem:** Frontmatter `title` is "How to Design AI Agents for Business Automation" but `#` is "Design Agents That Actually Work"; there is no one- or two-sentence repeat of `description` under `#`; a long paragraph and a horizontal rule sit before and between non-template sections; sections include many `##` headings other than Prerequisites, steps, and Troubleshooting.
- **Rule:** `how_to_format.md`, Sections and Title and description; `writing_style.md`, Every doc (`#` title and description repeat).
- **Change:** Align `#` and `title`; put only the description repeat under `#`; remove `---` rule dividers and relocate or delete non-template `##` sections per ticket 1; order must be Title/description → Prerequisites → steps → Troubleshooting only.
- **Done when:** Section table in `how_to_format.md` is satisfied in order with no extra `##` headings on the How-to.

### designing-agents-4

- **ID:** designing-agents-4
- **Type:** Remove content
- **Title:** Remove or relocate non-goal explanation from the How-to.
- **Problem:** Sections such as "The single responsibility principle for agents," "Drawing the right boundaries," "Choosing the right model," "The language does not matter," "Keeping agents thin," and the SEO design example are labelled `remove` or `explain` for a How-to and do not belong in the steps path.
- **Rule:** `FORMAT.MD`, Check 1 (How-to: `remove` outside steps); `how_to_format.md`, "No other sections."
- **Change:** Delete from the How-to or move to an Explanation doc; retain only prerequisite links and goal steps plus Troubleshooting on this page.
- **Done when:** Check 1 labels no `explain`/`remove` body content on the How-to except under Troubleshooting details.

### designing-agents-5

- **ID:** designing-agents-5
- **Type:** Broken link
- **Title:** Fix or remove link to The Problem.
- **Problem:** Under `#`, the doc links `[The Problem](/agentic-automation/the-problem)` but `docs/agentic-automation/the-problem.md` does not exist.
- **Rule:** `FORMAT.MD`, Check 3: internal links must resolve under `docs/`.
- **Change:** Publish `docs/agentic-automation/the-problem.md` with matching slug, remove the link until the page exists, or point to an existing Explanation that covers the same topic.
- **Done when:** The href resolves to a doc in `docs/` or the link is removed.

### designing-agents-6

- **ID:** designing-agents-6
- **Type:** Broken link
- **Title:** Fix framework prerequisite link.
- **Problem:** Prerequisites card uses `href: '/agentic-automation/the-framework'` but `docs/agentic-automation/the-framework.md` does not exist.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/agentic-automation/the-framework.md`, or change the card to an existing shared or explanation page that covers orchestrator and agent roles.
- **Done when:** The prerequisite card opens an existing doc in `docs/`.

### designing-agents-7

- **ID:** designing-agents-7
- **Type:** Format fix
- **Title:** Reframe Troubleshooting as symptom and fix.
- **Problem:** The only `<details>` entry reads as general design advice ("Define the AgentRunRequest… before implementation") rather than a symptom the reader sees while following the guide.
- **Rule:** `how_to_format.md`, Troubleshooting; `writing_style.md`, gray boxes.
- **Change:** Rewrite `<summary>` as an observable problem (for example malformed payload breaks the next workflow step) and keep cause/fix to one or two sentences.
- **Done when:** Each Troubleshooting entry matches the template pattern and relates to the How-to steps.

## Proposed outline

How-to rewrite aligned to the feature goal:

```md
---
slug: "/agentic-automation/designing-agents"
title: "How to Design an Agent for Business Automation"
description: >-
  Define one agent's responsibility, pick a model for its task, and document its
  input and output contract before you implement it.
sidebar_label: "Designing Agents"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Design Your Agent

<Same one or two sentences as description — reader ends with responsibility, model, and contract defined.>

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/agentic-automation/the-framework', label: '💡 The framework', description: 'Orchestrator and agent roles.'},
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up to deploy agents.'},
  ]}
/>

## Design your agent

1. **Name the single responsibility**

   State the one thing this agent does and what is out of scope.

2. **Choose the model (or no LLM)**

   Pick the model tier or deterministic code for that responsibility; record the choice and why.

3. **Define the contract**

   Document `request.input` fields, successful `result.output`, failure modes, and what the agent does not do.

4. **Confirm the design**

   Reader has a written agent definition (responsibility, model, contract) ready to implement and register.

## Troubleshooting

<details>
<summary>The orchestrator rejects the agent's output</summary>

Output failed schema validation before webhook POST. Fix field names and types in the contract doc and validate in the agent before sending.

</details>
```

Explanation split (optional), if conceptual sections are kept as a separate page:

```md
## Overview
## Why it matters
## How it works
### Single responsibility
### Boundaries and models
## When to use it
## Related
<DocCardList — link to this How-to and framework/problem pages when they exist>
```