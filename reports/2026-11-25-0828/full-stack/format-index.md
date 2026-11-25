# Format report: index.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/full-stack/index.md`
- **Doc type:** Explanation
- **Template:** `formats/explanation_format.md`
- **Feature:** Full-Stack Application Hosting
- **Goal:** Expect every link on the page to open an existing page (walkthrough)
- **Format check:** fail

## Content list

1. **explain** — `#` intro — Deploy full-stack applications on Code Capsules with guides for MEAN, MERN, Next.js, Flask, and more.
2. **explain** — `## Overview` — Full-stack guides deploy two or more capsules in one Space (database or storage plus Backend from GitHub; some add Frontend or Docker).
3. **fact** — `## Guides` (table row) — MEAN stack guide link, stack column values, demo repo `codecapsules-io/mean-stack`.
4. **fact** — `## Guides` (table row) — MERN stack guide link, stack column values, demo repo `codecapsules-io/mern-stack`.
5. **fact** — `## Guides` (table row) — Flask + HTMX guide link, stack column values, demo repo `codecapsules-io/demo-flask-htmx`.
6. **fact** — `## Guides` (table row) — Next.js guide links (table cell and “See Next.js guides” text).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (understanding only) | fail | Required sections `## Why it matters`, `## How it works`, and `## When to use it` are missing; `## Guides` is a full-section lookup table (`fact`), not explanation prose. |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | fail | Seven internal link targets have no matching file under `docs/` (four guide pages plus three Related card hrefs). |
| Check 4: Format and style | fail | `##` headings do not follow the Explanation section table (`## Guides` is non-template); `#` title does not match frontmatter `title`. |

## Tickets

### index-1

- **Type:** Format fix
- **Title:** Restructure sections to match the Explanation template.
- **Problem:** Page has `## Overview`, `## Guides`, and `## Related`. It omits `## Why it matters`, `## How it works`, and `## When to use it`. The guides table is not a substitute for those sections.
- **Rule:** `explanation_format.md`, Sections — required `##` headings in order; `FORMAT.MD`, Check 1 (Explanation) — required sections must have content; `fact` lists must not occupy a whole section.
- **Change:** Add `## Why it matters`, `## How it works`, and `## When to use it` describing full-stack deployment on Code Capsules (multi-capsule Spaces, when to add Frontend or Docker capsules, trade-offs vs single-capsule stacks). Move guide discovery into `## Related` and/or link individual how-to guides from `## How it works` once those pages exist; remove standalone `## Guides` or fold its prose into `## How it works` with a short pointer table only if still needed after how-tos are restored.
- **Done when:** The page has Overview → Why it matters → How it works → When to use it → Related, in that order, each with explanation prose per the template.

### index-2

- **Type:** Format fix
- **Title:** Align the `#` title with frontmatter `title`.
- **Problem:** Frontmatter `title` is `Full-Stack Application Hosting` but the `#` heading is `Full-stack hosting`.
- **Rule:** `writing_style.md`, Every doc — one `#` title; keep page title consistent with frontmatter `title`.
- **Change:** Set the `#` heading to `Full-Stack Application Hosting` (or align both fields to the same string).
- **Done when:** The visible `#` title matches `title` in frontmatter.

### index-3

- **Type:** Broken link
- **Title:** Fix or restore links to missing full-stack guide pages.
- **Problem:** The `## Guides` table links to `/full-stack/mean-stack/`, `/full-stack/mern-stack/`, `/full-stack/flask-+-htmx/`, and `/full-stack/next.js/` (twice in the Next.js row). Only `docs/full-stack/index.md` exists under `docs/full-stack/`; none of those slugs resolve in `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore or add `docs/full-stack/mean-stack.md`, `mern-stack.md`, `flask-+-htmx.md`, and `next.js.md` with matching slugs (content may be ported from `docs.bak/full-stack/`), or remove/replace table rows until those pages exist.
- **Done when:** Every link in the guides table (including both Next.js hrefs) resolves to a file in `docs/`.

### index-4

- **Type:** Broken link
- **Title:** Fix Related link to Database hosting.
- **Problem:** `DocCardList` item `href: '/database'` — no `docs/` file with slug `/database` (only present under `docs.bak/database/index.md`).
- **Rule:** `FORMAT.MD`, Check 3 (Links); `explanation_format.md`, Related — every card href must exist.
- **Change:** Add `docs/database/index.md` with slug `/database`, or point the card at an existing database doc (for example a database-capsule index page if that is the correct target).
- **Done when:** The Database hosting card `href` resolves to a file in `docs/`.

### index-5

- **Type:** Broken link
- **Title:** Fix Related link to Backend hosting.
- **Problem:** `DocCardList` item `href: '/backend'` — no matching file under `docs/` (only `docs.bak/backend/index.md`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/backend/index.md` with slug `/backend`, or replace the card with an existing backend guide index path.
- **Done when:** The Backend hosting card `href` resolves to a file in `docs/`.

### index-6

- **Type:** Broken link
- **Title:** Fix Related link to Frontend hosting.
- **Problem:** `DocCardList` item `href: '/frontend'` — no matching file under `docs/` (only `docs.bak/frontend/index.md`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Add `docs/frontend/index.md` with slug `/frontend`, or replace the card with an existing frontend guide index path.
- **Done when:** The Frontend hosting card `href` resolves to a file in `docs/`.

## Proposed outline

```md
---
slug: "/full-stack"
title: "Full-Stack Application Hosting"
description: >-
  Deploy full-stack applications on Code Capsules with guides for MEAN, MERN,
  Next.js, Flask, and more.
sidebar_label: "Full Stack"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Full-Stack Application Hosting

<Same one or two sentences as description.>

## Overview

<What full-stack deployment means on Code Capsules — multiple capsules in one Space.>

## Why it matters

<Who needs multi-capsule deploys; problems solved vs single-repo stacks.>

## How it works

<Database/storage + Backend from GitHub; optional Frontend or Docker; link to each stack how-to when restored.>

## When to use it

<When to pick MEAN/MERN/Flask/Next.js patterns; trade-offs table if useful.>

## Related

<DocCardList — 2–5 cards; every href exists under docs/; include stack how-tos and hosting indexes once pages exist.>
```