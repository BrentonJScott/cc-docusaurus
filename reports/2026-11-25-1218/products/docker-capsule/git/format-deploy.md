# Format report — deploy

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/docker-capsule/git/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Dockerfile From Git
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#` title) | Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the Deploy tab Builds section. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 5 | goal | `## Deploy your Docker capsule from Git` | **Open the capsule wizard** — Open your Space. Click **+** and select **New Capsule**. |
| 6 | goal | `## Deploy your Docker capsule from Git` | **Choose Docker Capsule** — On **Capsule Details**, select **Docker Capsule**, your Team, and Space. Click **Next**. |
| 7 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Choose plan** — On **Plan**, select a plan. Click **Next**. |
| 8 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Select Git source** — On **Source**, select **Git repository**, **Git Repository**, and **Branch**. Click **Next**. |
| 9 | goal | `## Deploy your Docker capsule from Git` | **Set build paths** — On **Deploy**, set **Dockerfile location** and **Docker build context** if the Dockerfile is not at the repository root, then enter **Capsule Name**. |
| 10 | goal | `## Deploy your Docker capsule from Git` | **Create the capsule** — Click **Create Capsule**. Code Capsules links the repo and assigns a hostname. |
| 11 | goal | `## Deploy your Docker capsule from Git` | **Confirm the first build** — Open the **Builds** section of the **Deploy** tab. The first build for the new capsule is in progress. |
| 12 | — | `## Troubleshooting` | The build fails immediately — check Builds log, Dockerfile path, container requirements. |
| 13 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Plan, repository, and branch are not stated exactly; goal-dependent values must be explicit per `FORMAT.MD` Check 1. |
| Check 2: Prerequisites | pass | All prerequisites are DocCardList links to existing `docs/shared/` pages. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps — plan, repository, and branch are not named exactly. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** State exact plan, repository, and branch in the steps.
- **Problem:** Step **Choose plan** says “On **Plan**, select a plan.” Step **Select Git source** says “**Git Repository**, and **Branch**” without naming the repository or branch the walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1 — missing or unclear repo, branch, or plan fails the check.
- **Change:** Name the plan tier (for example **Free** or **Paid**, matching the test path on test-platform), the GitHub repository, and branch (for example `main`) the reader must select. Align names with the values used in the format walkthrough for this feature.
- **Done when:** Steps name the plan, repository, and branch explicitly with no “select a plan” or unnamed **Git Repository** / **Branch**.

## Proposed outline

```md
---
slug: "/products/docker-capsule/git/deploy"
title: "How to Deploy a Dockerfile From Git"
description: >-
  Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first
  build is running on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Dockerfile From Git

Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🔌 GitHub connected />

## Deploy your Docker capsule from Git

1. **Open the capsule wizard**
   Open your Space. Click **+** and select **New Capsule**.

2. **Choose Docker Capsule**
   On **Capsule Details**, select **Docker Capsule**, Team, Space. Click **Next**.

3. **Choose plan**
   On **Plan**, select <named plan>. Click **Next**.

4. **Select Git source**
   On **Source**, select **Git repository**, repository <name>, branch <name>. Click **Next**.

5. **Set build paths**
   On **Deploy**, set **Dockerfile location**, **Docker build context**, and **Capsule Name** as needed.

6. **Create the capsule**
   Click **Create Capsule**.

7. **Confirm the first build**
   Open **Builds** on the **Deploy** tab; the first build for the new capsule is in progress.

## Troubleshooting

<details>
<summary>The build fails immediately</summary>

Open **Builds** and read the log. Confirm the Dockerfile path and container requirements.

</details>

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>
```