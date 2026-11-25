# Format report — deploy

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/frontend-capsule/deploy.md`
- **Doc type:** Explanation
- **Template:** `formats/explanation_format.md`
- **Feature:** Frontend framework deployment guides index
- **Goal:** Expect every framework to link to an existing guide
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | explain | (under `#`) | Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules. |
| 2 | explain | `## Overview` | Frontend Capsules build static sites and SPAs from Git; each framework guide sets wizard build settings; same guides apply to Static and Container hosting (linked). |
| 3 | explain | `## Why it matters` | One hosting path covers many frameworks; teams pick the matching guide for a working deploy. |
| 4 | explain | `## How it works` | Build command, output directory, HTTPS; framework guides set values for forkable demos; static and container share build settings. |
| 5 | explain | `## When to use it` | Rows for new framework deploy, static vs container, and custom stack. |
| 6 | instruction | `## When to use it` | Custom stack: “build settings are set directly on a Frontend Capsule” with pointer to Static deploy. |
| 7 | explain | `## When to use it` | Use Docker Capsule (git deploy link) when a custom image is needed. |
| 8 | remove | `## Related` | Only one of six named frameworks (`static-html`) appears as a framework guide card; React, Angular, Vue, Next.js, and Svelte have no link on the page. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (understanding only) | fail | Custom-stack row tells the reader to set build settings on a capsule (instruction); title and intro name six frameworks but the page does not link each framework to a guide. |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | pass | Every `href` in the doc resolves under `docs/` (`static/deploy`, `container/deploy`, `frontend/static-html`, `docker-capsule/git/deploy`). |
| Check 4: Format and style | fail | Goal requires every named framework to link to an existing guide; only `docs/frontend/static-html.md` exists—five framework guide targets are absent from `docs/`. |

## Tickets

### deploy-1

- **Type:** Move to another doc
- **Title:** Move manual build settings to Static deploy how-to.
- **Problem:** Under `## When to use it`, the custom-stack row says “build settings are set directly on a Frontend Capsule (see [Static deploy](/docs/products/frontend-capsule/static/deploy/)).”
- **Rule:** `FORMAT.MD`, Check 1 (Explanation) — statements labelled `instruction` belong in a How-to guide; link the target from `## Related`.
- **Change:** Replace the imperative with a one-sentence pointer (for example that no framework guide exists yet). Put the wizard steps for custom build command and output path on `docs/products/frontend-capsule/static/deploy.md` or a dedicated how-to. Keep Static deploy in `## Related`.
- **Done when:** No row in `## When to use it` tells the reader to perform dashboard steps; the how-to holds those steps.

### deploy-2

- **Type:** Format fix
- **Title:** Link every named framework to its guide.
- **Problem:** Frontmatter, H1, and intro list React, Angular, Vue, Next.js, Svelte, and static HTML, but `## Related` includes only `🛠️ Host static HTML` → `/docs/frontend/static-html`. There is no link on the page for the other five frameworks.
- **Rule:** Feature goal — every framework must link to an existing guide; `explanation_format.md`, Related — cards point readers to How-to guides for the topic.
- **Change:** Add one `DocCardList` card (or equivalent in-body link) per framework that has a guide under `docs/frontend/`, using the same emoji and label pattern as `static-html`. Keep Related within two to five cards total or split hosting cards and framework cards per template limits (expand Related only if the template allows more than five by linking the index from prose and using the highest-priority guides in Related).
- **Done when:** Each framework named in the title or description has a working internal link on the page to its how-to guide slug.

### deploy-3

- **Type:** Broken link
- **Title:** Restore missing framework guide pages under `docs/frontend/`.
- **Problem:** Only `docs/frontend/static-html.md` exists. Slugs used elsewhere in the repo (`/frontend/react/`, `/frontend/angular/`, `/frontend/vue/`, `/frontend/next.js/`, `/frontend/svelte/`, `/frontend/`) have no files under `docs/` (content is in `docs.bak/frontend/`).
- **Rule:** `FORMAT.MD`, Check 3 — internal links must resolve; feature goal — guides must exist before this index can pass.
- **Change:** Restore `react.md`, `angular.md`, `vue.md`, `next.js.md`, `svelte.md`, and `index.md` from `docs.bak/frontend/` (or publish new how-tos with matching slugs and `doc_version: drift`). Run the format check on each restored guide before linking them from this page.
- **Done when:** Each framework link added in deploy-2 maps to a file under `docs/frontend/`.

## Proposed outline

```md
---
slug: "/products/frontend-capsule/deploy"
title: "Frontend Framework Deployment Guides"
description: >-
  Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules.
sidebar_label: "Framework Guides"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Frontend Framework Deployment Guides

<One or two sentences matching the description.>

## Overview

<What framework guides are; static and container hosting both use the same per-framework settings — link static and container deploy pages.>

## Why it matters

<Many stacks, one hosting path; audience picks the guide that matches the repo.>

## How it works

<Prose only: Git source, build command, output directory, HTTPS — no wizard steps.>

## When to use it

| Situation | What to expect |
| --- | --- |
| New framework deploy | Link or card per framework guide |
| Static vs container | Hosting mode first; same framework guide |
| Custom stack | No guide yet — pointer only; no manual wizard steps |

## Related

<DocCardList: static frontend deploy, container frontend deploy, plus one card per existing framework guide under /docs/frontend/ — React, Angular, Vue, Next.js, Svelte, static HTML as files exist.>
```