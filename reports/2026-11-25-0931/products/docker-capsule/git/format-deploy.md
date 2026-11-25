# Format report — deploy

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/docker-capsule/git/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Dockerfile From Git
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 2 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 3 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 4 | prerequisite (missing) | — | Fork of a Git repository that contains a `Dockerfile` (for example `codecapsules-io/docker-flask`) is required for the goal but not listed. |
| 5 | goal | `## Deploy your Docker capsule from Git` | **Open the capsule wizard** — Open your Space. Click **+** and select **New Capsule**. |
| 6 | goal | `## Deploy your Docker capsule from Git` | **Choose Docker Capsule** — On **Capsule Details**, select **Docker Capsule**, your Team, and Space. Click **Next**. |
| 7 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Choose plan** — On **Plan**, select a plan. Click **Next**. |
| 8 | goal (vague value) | `## Deploy your Docker capsule from Git` | **Select Git source** — On **Source**, select **Git repository**, **Git Repository**, and **Branch**. Click **Next**. |
| 9 | goal | `## Deploy your Docker capsule from Git` | **Set build paths** — On **Deploy**, set **Dockerfile location** and **Docker build context** if the Dockerfile is not at the repository root, then enter **Capsule Name**. |
| 10 | goal | `## Deploy your Docker capsule from Git` | **Create the capsule** — Click **Create Capsule**. Code Capsules links the repo and assigns a hostname. |
| 11 | goal | `## Deploy your Docker capsule from Git` | **Confirm the first build** — Open the **Builds** section of the **Deploy** tab. The first build for the new capsule is in progress. |
| 12 | — | `## Troubleshooting` | The build fails immediately — open **Builds**, read the log, confirm Dockerfile path and container requirements. |
| 13 | — | `## Troubleshooting` | Changes did not save — refresh and confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Plan, repository, and branch are not named exactly; a forked repo with a `Dockerfile` is a prerequisite but absent from the page. |
| Check 2: Prerequisites | fail | Missing prerequisite card for a forked demo repository (for example `docker-flask`). |
| Check 3: Links | pass | Every `href` in `DocCardList` resolves to a file under `docs/shared/`. |
| Check 4: Format and style | fail | Frontmatter `title` uses “Deploy” instead of the how-to “Host” pattern; step 1 names **+**; step 6 does not open with the wizard screen name; intro omits bold on **Deploy** tab **Builds** used elsewhere for the same goal. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** State exact plan, repository, and branch in the steps.
- **Problem:** Step **Choose plan** says “select a plan.” Step **Select Git source** lists **Git Repository** and **Branch** without naming the fork (for example `docker-flask`) or branch (for example `main`).
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Name the plan tier the walkthrough uses on test-platform (for example **Free**), the GitHub repository (for example your `docker-flask` fork), and branch `main`, matching `docs.bak/backend/docker/flask-docker-app.md`.
- **Done when:** Steps name plan, repository, and branch with no “a plan” or unnamed **Git Repository**.

### deploy-2

- **Type:** Move to prerequisites
- **Title:** Add a fork prerequisite for the Docker demo repository.
- **Problem:** The guide assumes a repository with a `Dockerfile` but lists only account, Space, and GitHub cards.
- **Rule:** `how_to_format.md`, Prerequisites — list everything the reader must have before the first goal step; `FORMAT.MD`, Check 2.
- **Change:** Add a `DocCardList` item linking to `/docs/shared/fork-a-demo-repo` with label `🍴 Fork docker-flask` and description naming `codecapsules-io/docker-flask`, consistent with other Git deploy guides.
- **Done when:** `## Prerequisites` includes the fork card and Check 2 passes.

### deploy-3

- **Type:** Format fix
- **Title:** Replace **+** control wording in step 1.
- **Problem:** Step 1 says “Click **+** and select **New Capsule**.”
- **Rule:** `writing_style.md`, Words — do not name UI controls by colour or position alone.
- **Change:** Match `docs/products/frontend-capsule/static/deploy.md` step 1: open the Space and select **New Capsule** without **+**.
- **Done when:** Step 1 describes the control by label only.

### deploy-4

- **Type:** Format fix
- **Title:** Open step 6 with the wizard screen name.
- **Problem:** Step **Create the capsule** starts with “Click **Create Capsule**” without “On **<Screen>**,”.
- **Rule:** `how_to_format.md`, Steps — one step per wizard screen; start the description with the screen name in bold.
- **Change:** Prefix the body with `On **Deploy**` (or the screen that shows **Create Capsule** on test-platform), then the click action.
- **Done when:** Step 6 opens with `On **<Screen>**`.

### deploy-5

- **Type:** Format fix
- **Title:** Align frontmatter title and intro with the how-to pattern and builds-tab goal.
- **Problem:** `title` is “How to Deploy a Dockerfile From Git” while the template uses “How to Host …”; the intro repeats `description` but does not bold **Deploy** tab **Builds** like `docs/products/frontend-capsule/static/deploy.md`.
- **Rule:** `how_to_format.md`, Title and description; `writing_style.md`, Every doc — intro repeats `description` and matches the feature goal.
- **Change:** Rename `title` to “How to Host a Dockerfile From Git” (or equivalent Host wording). Bold **Deploy** tab **Builds** in `description` and the intro sentence.
- **Done when:** Frontmatter and intro match the Host pattern and the builds-tab outcome wording.

### deploy-6

- **Type:** Format fix
- **Title:** State default Dockerfile path when the file is at the repository root.
- **Problem:** Step **Set build paths** only describes non-root paths conditionally and does not give the root case value (for example `Dockerfile`).
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** For the docker-flask walkthrough path, set **Dockerfile location** to `Dockerfile` and **Docker build context** to `.` when deploying from the repo root.
- **Done when:** Step 5 names concrete path values for the standard demo repo layout.

## Proposed outline

```md
---
slug: "/products/docker-capsule/git/deploy"
title: "How to Host a Dockerfile From Git"
description: >-
  Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first
  build is in progress on the **Deploy** tab **Builds** section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Dockerfile From Git

<Same one or two sentences as description, with **Deploy** tab **Builds** bolded.>

## Prerequisites

<DocCardList — 👤 account, 🍴 Fork docker-flask, 📦 Space, 🔌 GitHub; hrefs under docs/shared/>

## Deploy your Docker capsule from Git

1. **Open the capsule wizard**
   Open your Space. Select **New Capsule**.

2. **Choose Docker Capsule**
   On **Capsule Details**, select **Docker Capsule**, Team, Space. Click **Next**.

3. **Choose plan**
   On **Plan**, select <named plan>. Click **Next**.

4. **Select Git source**
   On **Source**, select **Git repository**, your `docker-flask` fork, and branch `main`. Click **Next**.

5. **Set build paths**
   On **Deploy**, set **Dockerfile location** to `Dockerfile`, **Docker build context** to `.`, and **Capsule Name**. Click **Next** or **Create Capsule** per UI.

6. **Create the capsule**
   On **Deploy**, click **Create Capsule**.

7. **Confirm the first build**
   On **Builds**, confirm the first build for the new capsule is in progress.

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