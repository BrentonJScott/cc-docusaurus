# Format report — deploy

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/docker-capsule/git/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Dockerfile From Git
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | (under `#` title) | Deploy from Git when Code Capsules should build your image from the repository `Dockerfile`. |
| 2 | remove | (under `#` title) | For a pre-built image, see [Deploy an existing image](/products/docker-capsule/image/deploy/). |
| 3 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 4 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 5 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 6 | prerequisite | `## Prerequisites` | Container requirements → `/products/docker-capsule/container-requirements` |
| 7 | goal | `## Deploy your Docker capsule from Git` | **Open the capsule wizard** — Open your Space. Click **+** and select **New Capsule**. |
| 8 | goal | `## Deploy your Docker capsule from Git` | **Choose Docker Capsule** — Select **Docker Capsule**, your Team, and Space. Click **Next**. |
| 9 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Choose plan** — On **Plan**, select a plan. Click **Next**. |
| 10 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Select Git source** — On **Source**, select **Git repository**, **Git Repository**, and **Branch**. Click **Next**. |
| 11 | goal | `## Deploy your Docker capsule from Git` | **Set build paths** — On **Deploy**, set **Dockerfile location** and **Docker build context** if the Dockerfile is not at the repository root, then enter **Capsule Name**. |
| 12 | goal | `## Deploy your Docker capsule from Git` | **Create and build** — Click **Create Capsule**. Code Capsules links the repo, assigns a hostname, and starts the first build on **Builds**. |
| 13 | remove | `## Deploy your Docker capsule from Git` | **Verify and continue** — Open the capsule URL on **Details**. Tune Builds & Auto-deploy, Deployments, and example tutorials (Flask, PHP, Laravel, Caddy). |
| 14 | — | `## Troubleshooting` | The build fails immediately — check Builds log, Dockerfile path, container requirements. |
| 15 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Intro does not repeat the feature goal; step 7 holds non-goal links and is the last step, so the numbered list does not end on the builds-tab outcome; plan, repository, and branch values are not stated exactly. |
| Check 2: Prerequisites | fail | Three prerequisite cards point at missing `docs/shared/` pages; container-requirements prerequisite has no file under `docs/`. |
| Check 3: Links | fail | Multiple internal targets have no file under `docs/` (shared pages, container-requirements, image/deploy, git/builds, deployments, backend/docker tutorials). |
| Check 4: Format and style | fail | H1 does not use the required “Host Your …” pattern; intro does not repeat `description` and adds a cross-link before `## Prerequisites`; steps contain removed-style “other guides” links in step 7. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** Repeat description under the H1 and remove the intro cross-link.
- **Problem:** Under `# Deploy Your Dockerfile From a Git Repository`, the text reads “Deploy from Git when Code Capsules should build your image from the repository `Dockerfile`. For a pre-built image, see [Deploy an existing image](/products/docker-capsule/image/deploy/).” It does not repeat frontmatter `description` (“When you finish, the first build is running on the Deploy tab Builds section.”).
- **Rule:** `how_to_format.md`, Title and description — one or two sentences repeat `description` and must match the feature goal; nothing else between title and `## Prerequisites`.
- **Change:** Replace the intro with the same one or two sentences as `description`, stating that when the reader finishes, the first build is running in the **Builds** section (use the exact tab wording from the UI). Remove the pre-built image sentence or move it out of the how-to (not between title and prerequisites).
- **Done when:** Intro matches `description` and names the builds-tab outcome; no extra paragraphs or links appear before `## Prerequisites`.

### deploy-2

- **Type:** Format fix
- **Title:** Align the H1 with the how-to title pattern.
- **Problem:** `#` title is “Deploy Your Dockerfile From a Git Repository” while `how_to_format.md` requires a form like “Host Your `<Framework>` Application.”
- **Rule:** `how_to_format.md`, Title and description — one `#` title in the prescribed form.
- **Change:** Rename the H1 to match the product pattern used for deployment how-tos (for example “Host Your Dockerfile From Git” or equivalent that keeps the feature title aligned with `How to Deploy a Dockerfile From Git`).
- **Done when:** The `#` heading follows the template rule and still matches the page purpose.

### deploy-3

- **Type:** Remove content
- **Title:** Remove tutorial and sibling-guide links from step 7.
- **Problem:** Step **Verify and continue** links to Builds & Auto-deploy, Deployments, and four backend/docker tutorials.
- **Rule:** `how_to_format.md`, Converting an existing guide — “Other deployment guides” links removed; `FORMAT.MD`, Check 1 — `remove` content must not sit inside steps.
- **Change:** Delete the “Tune … Example tutorials …” sentences from the numbered list. Keep only goal verification copy, or fold verification into the prior step.
- **Done when:** No step contains links to other guides except values required to finish the wizard.

### deploy-4

- **Type:** Missing goal step
- **Title:** End the steps on the builds-tab building state.
- **Problem:** Step 6 says the first build starts on **Builds**, but step 7 is last and focuses on **Details** and external links, not what the reader sees in the **Builds** tab while the capsule is building.
- **Rule:** `FORMAT.MD`, Check 1 — last step must say what the reader sees when the goal is reached; feature goal is capsule building visible in the builds tab.
- **Change:** Make the final numbered step open the **Builds** tab (or **Deploy** tab **Builds** section per product UI) and describe an in-progress build for the new capsule. Remove or merge step 7’s non-goal content per deploy-3.
- **Done when:** The last step’s description states that the reader sees the capsule building in the builds tab.

### deploy-5

- **Type:** Format fix
- **Title:** State exact plan, repository, and branch values in the steps.
- **Problem:** Step **Choose plan** says “select a plan.” Step **Select Git source** says “**Git Repository**” and “**Branch**” without naming the repository or branch the walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1 — missing or unclear repo, branch, or plan fails the check.
- **Change:** Name the plan tier (or “default plan” if that is the test path), the GitHub repository, and branch (for example `main`) the reader must select, matching what the format walkthrough will use on test-platform.
- **Done when:** Steps name the plan, repo, and branch explicitly with no “your plan” or unnamed repository.

### deploy-6

- **Type:** Shared page
- **Title:** Create shared page for a Space (reference existing account ticket).
- **Problem:** Prerequisite `href` `/docs/shared/create-a-space` has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/create-a-space.md` with slug `/shared/create-a-space`, frontmatter per `writing_style.md`, and steps to create a Space.
- **Done when:** `/docs/shared/create-a-space` resolves to an existing doc.

### deploy-7

- **Type:** Shared page
- **Title:** Create shared page for GitHub connection.
- **Problem:** Prerequisite `href` `/docs/shared/configure-git-for-code-capsules` has no file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 2 and Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/configure-git-for-code-capsules.md` with slug `/shared/configure-git-for-code-capsules` and steps to connect GitHub so repositories appear in the wizard.
- **Done when:** `/docs/shared/configure-git-for-code-capsules` resolves to an existing doc.

### deploy-8

- **Type:** Broken link
- **Title:** Fix account prerequisite after shared page exists.
- **Problem:** Card `href` `/docs/shared/create-an-account` has no matching file under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Depends on existing ticket **alerting-4** in `reports/2026-11-25-0828/products/format-alerting.md` (create `docs/shared/create-an-account.md`). No change on `deploy.md` if `href` stays `/docs/shared/create-an-account`.
- **Done when:** alerting-4 is done and the prerequisite link resolves.

### deploy-9

- **Type:** Broken link
- **Title:** Restore or link container requirements from `docs/`.
- **Problem:** Prerequisite and troubleshooting link `/products/docker-capsule/container-requirements` — no `docs/products/docker-capsule/container-requirements.md` in the active `docs/` tree (file exists only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore `docs/products/docker-capsule/container-requirements.md` from the backed-up doc or publish an equivalent reference page at that slug.
- **Done when:** Link target exists under `docs/` with matching slug.

### deploy-10

- **Type:** Broken link
- **Title:** Fix intro and step links to missing product and tutorial pages.
- **Problem:** Links to `/products/docker-capsule/image/deploy/`, `/products/docker-capsule/git/builds/`, `/products/docker-capsule/deployments/`, and `/backend/docker/*` tutorials have no counterparts under `docs/`.
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** After deploy-3 removes non-goal links from steps, remove or retarget the intro image-deploy link only if that page is restored; any remaining internal links must point at files that exist under `docs/`.
- **Done when:** Every remaining internal link in `deploy.md` resolves to a file under `docs/`.

## Proposed outline

```md
---
slug: "/products/docker-capsule/git/deploy"
title: "How to Deploy a Dockerfile From Git"
description: >-
  Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first
  build is running in the Builds section of the Deploy tab.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Dockerfile From Git

<Same one or two sentences as description.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🔌 GitHub, 📋 container requirements; all hrefs valid under docs/>

## Deploy your Docker capsule from Git

1. **Open the capsule wizard**
   Open your Space. Click **New Capsule**.

2. **Choose Docker Capsule**
   On **Capsule Details**, select **Docker Capsule**, Team, Space. Click **Next**.

3. **Choose plan**
   On **Plan**, select <named plan>. Click **Next**.

4. **Select Git source**
   On **Source**, select **Git repository**, repository <name>, branch <name>. Click **Next**.

5. **Set build paths**
   On **Deploy**, set **Dockerfile location** and **Docker build context** and **Capsule Name**.

6. **Create the capsule**
   Click **Create Capsule**.

7. **Confirm the first build**
   Open the **Builds** section; the first build for the new capsule is in progress.

## Troubleshooting

<details>
<summary>The build fails immediately</summary>

Open **Builds**, read the log, confirm Dockerfile path and container requirements.

</details>

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm **Save** on the correct section.

</details>
```