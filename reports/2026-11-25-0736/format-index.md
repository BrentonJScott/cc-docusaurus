# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/index.md`
- **Doc type:** How-to guide (intended per feature); on-page structure is a section hub
- **Template:** `formats/how_to_format.md`
- **Feature:** Get Started: Deploy Your First App
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

Instructions and statements in order, with label and heading:

1. `remove` — (no heading) — "Code Capsules documentation for deploying full-stack apps, databases, containers, and AI agents to production."
2. `remove` — (no heading) — "Code Capsules is a platform-as-a-service (PaaS) for deploying full-stack apps… These docs take you from your first deployment to platform reference, product guides, and hands-on tutorials."
3. `instruction` — `## Overview` — "Use the sections below to pick a deployment guide by stack, look up a Capsule type, or follow an end-to-end tutorial."
4. `fact` — `## Deploy by language and framework` — Table row: Frontend section covers React, Vue, Angular, etc.
5. `fact` — `## Deploy by language and framework` — Table row: Databases section covers MySQL, PostgreSQL, MongoDB, Redis.
6. `fact` — `## Deploy by language and framework` — Table row: Full-Stack section covers Next.js stacks.
7. `fact` — `## Deploy by language and framework` — Table row: Persistent Storage section covers durable file storage.
8. `fact` — `## Understand the platform` — Table row: Products section is reference for every Capsule type.
9. `fact` — `## Understand the platform` — Table row: CLI section covers command-line management.
10. `fact` — `## Follow a tutorial` — Table row: Tutorials section covers step-by-step guides.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Wrong doc type; no goal steps toward first-app deploy; marketing and explanation under title; navigation instruction in Overview |
| Check 2: Prerequisites | fail | No `## Prerequisites`; not applicable content was not moved there |
| Check 3: Links | fail | Frontmatter `cover` points to missing file under `static/` |
| Check 4: Format and style | fail | Missing required How-to sections; extra sections; title/description rules broken |
| Walkthrough | not applicable | Format fail |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Wrong doc type
- **Title:** Rewrite or split the Get Started page to match How-to structure.
- **Problem:** Frontmatter title is "Get Started: Deploy Your First App" and the feature goal is first-app deployment, but the page is a section hub with overview tables and no deploy workflow. Sections are `## Overview`, `## Deploy by language and framework`, `## Understand the platform`, `## Follow a tutorial`, and `## Related` instead of Prerequisites, steps, and Troubleshooting.
- **Rule:** `FORMAT.MD`, Step 1: doc must not mix types; feature maps to a How-to guide.
- **Change:** Either (a) rewrite as a How-to that walks a reader through deploying a first app to the documented goal, or (b) reclassify the feature as a Reference hub and retitle frontmatter and `#` heading to match (for example "Documentation home"). If staying a hub, use `reference_format.md` throughout and drop deploy-first-app framing.
- **Done when:** The page matches one template type end to end and the feature line in the run summary uses the same type.

### index-2

- **ID:** index-2
- **Type:** Remove content
- **Title:** Remove marketing and platform explanation under the title.
- **Problem:** Under `# Deploy Your First App`, the doc has two extra paragraphs before `## Overview` (PaaS overview and doc scope). How-to guides allow only one or two sentences that repeat `description`.
- **Rule:** `how_to_format.md`, Title and description; `writing_style.md`, Every doc (`#` title and description repeat).
- **Change:** Delete both paragraphs. Replace with one or two sentences that repeat the frontmatter `description` and state what the reader will have after following this guide (deployed first app), aligned with the feature goal.
- **Done when:** Only the `#` title and one or two description sentences appear before the first `##` section.

### index-3

- **ID:** index-3
- **Type:** Move to another doc
- **Title:** Move Overview navigation instruction out of a Reference-style Overview.
- **Problem:** `## Overview` says "Use the sections below to pick a deployment guide…" which instructs the reader to act; that belongs on a How-to or is unnecessary on a task guide.
- **Rule:** `FORMAT.MD`, Check 1 Reference: statements labelled `instruction` fail; on a How-to, non-goal content should not sit in place of Prerequisites or steps.
- **Change:** If the page becomes a How-to, remove this section and replace with `## Prerequisites` and a steps section. If it becomes Reference, replace with factual scope only (no imperatives).
- **Done when:** Overview (if kept) contains facts only, or the section is removed in favor of How-to sections.

### index-4

- **ID:** index-4
- **Type:** Missing goal step
- **Title:** Add Prerequisites, deploy steps, and Troubleshooting.
- **Problem:** The doc has no `## Prerequisites`, no `## <Verb> your <Thing>` steps list, and no `## Troubleshooting`. The feature goal (every link opens an existing page / first deploy) is not reached by any on-page steps.
- **Rule:** `how_to_format.md`, Sections table (sections 2–4 must exist, in order).
- **Change:** Add `## Prerequisites` with a `DocCardList` linking shared pages (account, GitHub, Space, fork as needed). Add `## Deploy your first app` (or equivalent) with a numbered list from login through create capsule and build success. Add at least one `## Troubleshooting` `<details>` entry.
- **Done when:** All three sections exist in template order and the last step states what the reader sees when the first app is deployed.

### index-5

- **ID:** index-5
- **Type:** Format fix
- **Title:** Remove hub-only sections and Related from How-to layout.
- **Problem:** `## Deploy by language and framework`, `## Understand the platform`, `## Follow a tutorial`, and `## Related` are not allowed on a How-to guide (`how_to_format.md`: "No other sections").
- **Rule:** `how_to_format.md`, Sections.
- **Change:** Remove these sections from a How-to rewrite, or move their links into a separate Reference index if the product keeps a hub page.
- **Done when:** Only Title/description, Prerequisites, steps section, and Troubleshooting remain on the Get Started How-to.

### index-6

- **ID:** index-6
- **Type:** Broken link
- **Title:** Fix or remove missing cover image path.
- **Problem:** Frontmatter `cover: /gitbook-assets/get-started/generic-docs-banner.jpg` has no matching file under `static/`.
- **Rule:** `FORMAT.MD`, Check 3: images must exist in `static/`.
- **Change:** Remove `cover` and `coverY` from frontmatter, or add the asset under `static/gitbook-assets/get-started/` if covers are still required.
- **Done when:** The cover path resolves to a file in `static/` or the field is removed.

### index-7

- **ID:** index-7
- **Type:** Format fix
- **Title:** Align `#` title with How-to title pattern.
- **Problem:** `#` title is "Deploy Your First App" while How-to guides use "Host Your \<Framework\> Application" or an equivalent task title; frontmatter `title` and `#` differ slightly in framing.
- **Rule:** `how_to_format.md`, Title and description.
- **Change:** Set `#` and `title` to the chosen How-to pattern for the stack or path used in the guide (for example "Host Your First Application").
- **Done when:** `#` title follows the template pattern and matches frontmatter intent.

## Proposed outline

How-to rewrite (if feature stays deploy-first-app):

```md
---
slug: "/"
title: "How to Host Your First Application"
description: >-
  <One or two sentences: reader ends with first app deployed on Code Capsules.>
sidebar_label: "Get Started"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your First Application

<Same as description.>

## Prerequisites

<DocCardList items={[account, GitHub, Space, fork cards linking /docs/shared/...]} />

## Deploy your first app

1. **<First wizard screen>**
   On **<Screen>**, …
2. **…**
3. **Check the build**
   The first build is in progress / app URL is shown.

## Troubleshooting

<details>
<summary><Symptom></summary>

<Cause and fix.>

</details>
```

Reference hub alternative (if feature is reclassified):

```md
## Overview
<Scope facts only>

## <Subject A>
| Section | What it covers |
...

## Related
<DocCardList with 2–5 cards>
```