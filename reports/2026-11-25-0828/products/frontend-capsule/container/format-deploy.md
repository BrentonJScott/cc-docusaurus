# Format report — deploy

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/frontend-capsule/container/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Container Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | (under `#` title) | Deploy with Container hosting when you want an always-on web server, runtime logs, metrics, and scaling. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account`. |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space`. |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules`. |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/products/frontend-capsule/supported-runtimes`. |
| 6 | goal | `## Deploy your container frontend site` | **Open the capsule wizard** — Open Space; click yellow **+**; **New Capsule**. |
| 7 | goal | `## Deploy your container frontend site` | **Choose capsule details** — **Frontend Capsule**, Team, Space; **Next**. |
| 8 | goal | `## Deploy your container frontend site` | **Choose container hosting** — On **Hosting**, **Container**; **Next**. |
| 9 | goal (vague value) | `## Deploy your container frontend site` | **Choose a plan** — select a plan or **Custom** CPU, memory, and replicas (no named plan). |
| 10 | goal (vague value) | `## Deploy your container frontend site` | **Connect the repository** — **Git Repository**, **Branch**, **Repo subpath** (no exact repo or branch). |
| 11 | goal (vague value) | `## Deploy your container frontend site` | **Set build settings** — **Build Command**, **Path to static content**, **Capsule Name** (no exact command or path). |
| 12 | goal (wrong end state) / remove | `## Deploy your container frontend site` | **Confirm the site** — open **Details** and capsule URL; HTTPS/SPA/compression; links to Scale, Monitor, Logs, Configure, Framework Guides. |
| 13 | — | `## Troubleshooting` | Blank page — confirm **Path to static content**; links Configure and Logs. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | `remove` marketing copy sits under the `#` title; step 7 holds non-goal cross-links; the last step ends on **Details** and the live URL, not the reader seeing the capsule building on **Builds**; `description`/intro goal wording does not match `DOCUMENTED_FEATURES.md` (builds tab vs Deploy tab and “container is running”). Plan, repository, branch, build command, and output path are not stated exactly. |
| Check 2: Prerequisites | fail | Account, Space, and GitHub cards link to missing `docs/shared/` pages. Build-settings card links to `supported-runtimes`, which has no file under `docs/`. |
| Check 3: Links | fail | Broken internal targets: three shared prerequisite paths; `/products/frontend-capsule/supported-runtimes`; Scale, Monitor, Logs, and Configure links in step 7; Configure and Logs in troubleshooting. |
| Check 4: Format and style | fail | Intro adds content beyond repeating `description`; `description`/intro omit the documented builds-tab goal; step 1 names a control by colour (“yellow **+**”); several step bodies do not open with the wizard screen name in bold (for example step 2). |

## Tickets

### deploy-1

- **Type:** Remove content
- **Title:** Drop marketing intro before the goal sentence.
- **Problem:** Under `# Host Your Frontend With Container Hosting`, the first sentence sells container hosting (“always-on web server, runtime logs, metrics, and scaling”) before the end-state sentence.
- **Rule:** `how_to_format.md`, Title and description — nothing else between the title and `## Prerequisites`; `FORMAT.MD`, Check 1 — content labelled `remove`.
- **Change:** Delete the marketing sentence. Keep one or two sentences that match frontmatter `description` and the documented feature goal.
- **Done when:** Only the goal-aligned intro appears under the `#` title.

### deploy-2

- **Type:** Format fix
- **Title:** Align `description`, intro, and feature goal with the builds tab.
- **Problem:** Frontmatter `description` says “the container is running and the first build appears on the **Deploy** tab.” `DOCUMENTED_FEATURES.md` goal is “Expect to see capsule building in builds tab.” The intro repeats the Deploy-tab wording, not **Builds**.
- **Rule:** `how_to_format.md`, Title and description — must match the feature goal; `writing_style.md`, Every doc — intro repeats `description`; `FORMAT.MD`, Check 1.
- **Change:** Rewrite `description` and the intro so both state that when the reader finishes, they see the first build queued or in progress on the **Deploy** tab **Builds** section (match UI labels used in `docs/products/frontend-capsule/static/deploy.md` step 7).
- **Done when:** `description`, intro, and `DOCUMENTED_FEATURES.md` goal agree on the builds-tab outcome.

### deploy-3

- **Type:** Missing goal step
- **Title:** End deployment steps on the builds-tab building state.
- **Problem:** Step 7 **Confirm the site** opens **Details** and the capsule URL after the build finishes and links to other product guides. It never has the reader confirm a build in progress on **Builds**.
- **Rule:** `FORMAT.MD`, Check 1 — last step must say what the reader sees when the goal is reached; `how_to_format.md`, Steps — last step ends with the reader seeing the goal.
- **Change:** Rewrite the final numbered step so the reader opens **Builds** (under **Deploy**) and sees the first build queued or building. Move post-deploy links (Scale, Monitor, and similar) out of the steps.
- **Done when:** The last step describes the reader seeing the capsule building on **Builds**, matching the feature goal.

### deploy-4

- **Type:** Remove content
- **Title:** Remove cross-guide links from step 7.
- **Problem:** Step 7 links to Scale, Monitor, Logs, Configure, and Framework Guides inside the numbered list.
- **Rule:** `how_to_format.md`, Converting an existing guide — other deployment guides removed from steps; `FORMAT.MD`, Check 1 — `remove` content must not sit inside `##` steps equivalent.
- **Change:** Delete those links from the deployment steps. Optional: mention only in troubleshooting if a symptom requires another doc.
- **Done when:** No non-goal guide links remain in the numbered list.

### deploy-5

- **Type:** Format fix
- **Title:** State exact plan, repository, branch, and build settings in the steps.
- **Problem:** Step 4 uses “a plan or **Custom**” without a named tier. Steps 5–6 use generic **Git Repository**, **Branch**, **Build Command**, and **Path to static content** without the values the walkthrough will use.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Name the plan (for example **Free** or a named paid tier), repository, branch (for example `main`), build command, and output folder (for example `dist`) the reader must select, consistent with the format walkthrough on test-platform.
- **Done when:** Steps name plan, repo, branch, build command, and output path with no “your plan” or unnamed repository.

### deploy-6

- **Type:** Format fix
- **Title:** Replace colour-based control wording in step 1.
- **Problem:** Step 1 says “Click the yellow **+**”.
- **Rule:** `writing_style.md`, Words — do not name UI controls by colour alone.
- **Change:** Use **New Capsule** or the control label shown in the product UI, as in `docs/products/docker-capsule/git/deploy.md` step 1.
- **Done when:** Step 1 describes the control by label or action, not colour.

### deploy-7

- **Type:** Format fix
- **Title:** Open each step with the wizard screen name in bold.
- **Problem:** Step 2 body starts with “Choose **Frontend Capsule**” without “On **Capsule Details**,” unlike the static frontend deploy guide.
- **Rule:** `how_to_format.md`, Steps — start descriptions with the screen name in bold.
- **Change:** Align steps 1–6 with the static deploy pattern (`On **Capsule Details**`, `On **Hosting**`, and so on).
- **Done when:** Each step body opens with `On **<Screen>**`.

### deploy-8

- **Type:** Shared page
- **Title:** Create shared account page (reference existing ticket).
- **Problem:** Prerequisite `href` `/docs/shared/create-an-account` has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See **shared-create-an-account** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`.
- **Done when:** That shared ticket is done and the card link resolves.

### deploy-9

- **Type:** Shared page
- **Title:** Create shared Space page (reference existing ticket).
- **Problem:** Prerequisite `href` `/docs/shared/create-a-space` has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See **shared-create-a-space** in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md`.
- **Done when:** That shared ticket is done and the card link resolves.

### deploy-10

- **Type:** Shared page
- **Title:** Create shared GitHub connection page (reference existing ticket).
- **Problem:** Prerequisite `href` `/docs/shared/configure-git-for-code-capsules` has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/git/format-deploy.md` (GitHub prerequisite).
- **Done when:** The shared configure-git page exists under `docs/shared/`.

### deploy-11

- **Type:** Broken link
- **Title:** Restore or replace supported-runtimes prerequisite target.
- **Problem:** Card and troubleshooting link `/products/frontend-capsule/supported-runtimes` — no matching file under `docs/` (content may exist only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links); `how_to_format.md`, Prerequisites.
- **Change:** Publish `docs/products/frontend-capsule/supported-runtimes.md` at that slug or point the card at an existing reference that lists build command and output folder per stack.
- **Done when:** The prerequisite `href` resolves in `docs/`.

### deploy-12

- **Type:** Broken link
- **Title:** Fix Scale, Monitor, Logs, and Configure links after those pages exist.
- **Problem:** Step 7 and troubleshooting reference product slugs with no files under `docs/products/frontend-capsule/` (only `container/deploy.md`, `static/deploy.md`, and `deploy.md` exist).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore or publish those pages from `docs.bak/` or remove the links from this guide per deploy-4.
- **Done when:** Every remaining internal link in the doc resolves, or the links are removed.

## Proposed outline

```md
---
slug: "/products/frontend-capsule/container/deploy"
title: "How to Deploy a Container Frontend"
description: >-
  Deploy a static site or SPA on Code Capsules with Container hosting. When you finish, the first build is in progress on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Frontend With Container Hosting

<Same one or two sentences as description — Builds section goal only.>

## Prerequisites

<DocCardList — account, Space, GitHub, build settings; all hrefs resolve.>

## Deploy your container frontend site

1. **Open the capsule wizard** — On **Quick Start** or Space view, open the Space; click **New Capsule** (or **+** per UI).

2. **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, named Team and Space; **Next**.

3. **Choose container hosting** — On **Hosting**, **Container**; **Next**.

4. **Choose a plan** — On **Plan**, named plan tier; **Next**.

5. **Connect the repository** — On **Configure**, named **Git Repository**, **Branch**, optional **Repo subpath**; **Next**.

6. **Set build settings** — On **Deploy**, exact **Build Command**, **Path to static content**, **Capsule Name**; **Build & Deploy**.

7. **Check the build** — On **Builds**, first build queued or in progress (goal state).

## Troubleshooting

<details> — blank page / changes did not save; only links that exist in docs/.
```