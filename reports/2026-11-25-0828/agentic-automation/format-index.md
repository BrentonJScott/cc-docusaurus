# Format report: index.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/agentic-automation/index.md`
- **Doc type:** Explanation
- **Template:** `formats/explanation_format.md`
- **Feature:** Agentic Automation for Business Processes
- **Goal:** Expect every link on the page to open an existing page (walkthrough)
- **Format check:** fail

## Content list

1. **explain** — Intro under `#` — Framework summary (orchestrator, agents, contracts, git deployment).
2. **explain** — `## Overview` — Why brittle workflows fail and what the guide series covers.
3. **explain** — `## Overview` (table) — Section index rows linking to four topic pages.
4. **explain** — `## Core ideas` (table) — Determinism, microservice agents, git as source of truth.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (understanding only) | fail | Required sections `## Why it matters`, `## How it works`, and `## When to use it` are missing (no content per `explanation_format.md`). |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | fail | Six internal `href` targets have no matching file under `docs/`. |
| Check 4: Format and style | fail | `##` headings do not follow the Explanation section table; intro under `#` does not repeat frontmatter `description` per `writing_style.md`. |

## Tickets

### index-1

- **Type:** Format fix
- **Title:** Restructure sections to match the Explanation template.
- **Problem:** Page has `## Overview`, `## Core ideas`, and `## Related`. It omits `## Why it matters`, `## How it works`, and `## When to use it`. The section table in Overview is not a substitute for those sections.
- **Rule:** `explanation_format.md`, Sections — required `##` headings in order; `FORMAT.MD`, Check 1 (Explanation) — those sections must have content.
- **Change:** Add `## Why it matters`, `## How it works`, and `## When to use it` with content drawn from the series (problem, framework, agent design, deployment). Fold or relocate material from `## Core ideas` into `## How it works` (subheadings per part if needed). Remove or rename `## Core ideas` so only template sections remain, in order.
- **Done when:** The page has Overview → Why it matters → How it works → When to use it → Related, in that order, each with prose per the template.

### index-2

- **Type:** Format fix
- **Title:** Repeat `description` under the `#` title.
- **Problem:** Frontmatter `description` begins with “A framework for building reliable agentic automation…” but the sentence under `#` is a different paraphrase.
- **Rule:** `writing_style.md`, Every doc — one or two sentences under the `#` title repeat `description`.
- **Change:** Copy or lightly align the `#` intro with the frontmatter `description` (one or two sentences).
- **Done when:** The intro matches `description` as required.

### index-3

- **Type:** Broken link
- **Title:** Fix or remove links to missing agentic-automation child pages.
- **Problem:** Overview table links to `/agentic-automation/the-problem`, `/agentic-automation/the-framework`, `/agentic-automation/designing-agents`, and `/agentic-automation/deployment`; none of those files exist under `docs/agentic-automation/` (only `index.md` is present).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add the four docs under `docs/agentic-automation/` with matching slugs, or remove/replace the table links until those pages exist.
- **Done when:** Every Overview table link resolves to a file in `docs/`.

### index-4

- **Type:** Broken link
- **Title:** Fix Related link to Agent Capsule deploy guide.
- **Problem:** `DocCardList` item `href: '/products/agent-capsule/deploy'` — no `docs/products/agent-capsule/deploy.md` in the repo.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/products/agent-capsule/deploy.md` or point the card at an existing page (for example `/products/agent-capsule/configure` if that is the correct target).
- **Done when:** The card `href` resolves to a file in `docs/`.

### index-5

- **Type:** Broken link
- **Title:** Fix Related link to agent tutorial.
- **Problem:** `DocCardList` item `href: '/tutorials/use-codecapsules-with-an-agent'` — no matching file under `docs/tutorials/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore or add `docs/tutorials/use-codecapsules-with-an-agent.md` with slug `/tutorials/use-codecapsules-with-an-agent`, or replace the card with a tutorial that exists.
- **Done when:** The tutorial card link resolves to a file in `docs/`.

## Proposed outline

```md
---
slug: "/agentic-automation"
title: "Agentic Automation for Business Processes"
description: >-
  A framework for building reliable agentic automation with git, simple code
  and cloud infrastructure, turning unpredictable AI into dependable automation.
sidebar_label: "Agentic Automation"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# <Title aligned with frontmatter>

<Same one or two sentences as description.>

## Overview

<2–4 sentences; optional short pointer to child Explanations once they exist.>

## Why it matters

<Problem from the reader’s side; who this is for.>

## How it works

<Orchestrator, agents, contracts, git deployment — include former Core ideas here as ### subheadings if needed.>

## When to use it

<When to adopt this framework vs alternatives; trade-offs table if useful.>

## Related

<DocCardList — 2–5 cards; every href exists under docs/>
```