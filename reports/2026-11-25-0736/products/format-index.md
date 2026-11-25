# Format report

- **Run timestamp:** 2026-11-25-0736
- **Doc file:** `docs/products/index.md`
- **Doc type:** Reference
- **Template used:** `reference_format.md`
- **Feature:** App, Database & WordPress Hosting Products (`docs/products/index.md`)
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|---|---|---|
| 1 | fact | (title) | Product guides for deploying and operating each Capsule type on Code Capsules. |
| 2 | fact | `## Overview` | Each Capsule type has its own product folder of guides. |
| 3 | instruction | `## Overview` | Start from the entry page for the type you use. |
| 4 | fact | `## Capsule types` | Table row: Backend → Backend Application Hosting |
| 5 | fact | `## Capsule types` | Table row: Docker → Docker Container Hosting |
| 6 | fact | `## Capsule types` | Table row: Frontend → Frontend App Hosting |
| 7 | fact | `## Capsule types` | Table row: Database → Managed Database Hosting |
| 8 | fact | `## Capsule types` | Table row: Storage → No guide published yet |
| 9 | fact | `## Capsule types` | Table row: WordPress → Routing and Performance |
| 10 | fact | `## Capsule types` | Table row: Agent → Agent Chat API Reference |
| 11 | fact | `## Related` | DocCardList links to backend, docker, frontend, database capsule entry pages |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Imperative instruction in `## Overview` (`Start from the entry page…`) belongs in a How-to guide, not on a Reference page. |
| Check 2: Prerequisites | not applicable | Reference page |
| Check 3: Links | pass | Every internal link and DocCardList `href` resolves to an existing doc slug under `docs/`. |
| Check 4: Format and style | fail | `reference_format.md` Overview: no steps; `writing_style.md`: Reference states facts only. |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Move to another doc
- **Title:** Remove navigation instruction from Overview
- **Problem:** Under `## Overview`, the doc tells the reader, "Start from the entry page for the type you use."
- **Rule:** `FORMAT.MD`, Check 1 (Reference: facts only); `reference_format.md`, Overview (no steps)
- **Change:** Delete that sentence from `## Overview`, or rewrite it as a neutral fact (for example, that each row in the table is the entry guide for that Capsule type). If the reader must be directed to a task, add a short How-to in `docs/products/` and link it from `## Related`.
- **Done when:** `## Overview` contains only factual statements with no imperatives directed at the reader, and Check 1 labels every statement `fact`.

## Proposed outline

```md
---
slug: "/products"
title: "App, Database & WordPress Hosting Products"
description: >-
  Product guides for deploying and operating each Capsule type on Code Capsules.
sidebar_label: "Products"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Product guides

<Same as description.>

## Overview

<Each Capsule type has its own product folder; the table lists the entry guide for each type.>

## Capsule types

| Capsule type | Entry guide |
| --- | --- |
| … | … |

## Related

<DocCardList items={[…]} />
```