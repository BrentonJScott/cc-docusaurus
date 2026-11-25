# Format report — deploy

- **Run:** 2026-11-25-0931
- **Doc:** `docs/products/frontend-capsule/container/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Container Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | (intro) | (under `#` title) | Deploy a static site or SPA on Code Capsules with Container hosting; when you finish, the first build is in progress on the **Deploy** tab **Builds** section. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account`. |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space`. |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules`. |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/docs/products/frontend-capsule/deploy`. |
| 6 | goal | `## Deploy your container frontend site` | **Open the capsule wizard** — Open your Space. Select **New Capsule**. |
| 7 | goal | `## Deploy your container frontend site` | **Choose capsule details** — On **Capsule Details**, choose **Frontend Capsule**, your Team, and Space. Click **Next**. |
| 8 | goal | `## Deploy your container frontend site` | **Choose container hosting** — On **Hosting**, select **Container**. Click **Next**. |
| 9 | goal (vague value) | `## Deploy your container frontend site` | **Choose a plan** — On **Plan**, select a plan or **Custom** CPU, memory, and replicas (no named plan tier). |
| 10 | goal (vague value) | `## Deploy your container frontend site` | **Connect the repository** — On **Configure**, select **Git Repository** and **Branch**; optional **Repo subpath** (no named repo or branch). |
| 11 | goal (vague value) | `## Deploy your container frontend site` | **Set build settings** — On **Deploy**, set **Build Command**, **Path to static content** (for example `dist`), and **Capsule Name**. Click **Build & Deploy**. |
| 12 | goal | `## Deploy your container frontend site` | **Check the build** — On **Builds**, confirm the first build is queued or in progress. |
| 13 | — | `## Troubleshooting` | Blank page after successful build — confirm **Path to static content** matches build output folder. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh, confirm **Save** on the correct section. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Steps 4–6 do not name plan, repository, branch, build command, or output folder exactly. |
| Check 2: Prerequisites | pass | Every prerequisite is a `DocCardList` link; shared targets exist under `docs/shared/`. |
| Check 3: Links | pass | All prerequisite `href` values resolve to files under `docs/`. |
| Check 4: Format and style | fail | Frontmatter `title` uses “Deploy” instead of the how-to “Host” pattern; `description` omits bold on **Deploy** tab **Builds** while the intro includes it. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** Use the Host title pattern in frontmatter.
- **Problem:** `title` is “How to Deploy a Container Frontend” while `how_to_format.md` and peer guides use “How to Host …”; the H1 already follows Host wording.
- **Rule:** `how_to_format.md`, Title and description — page **must** have one `#` title in the form “Host Your &lt;Framework&gt; Application”; `writing_style.md`, Every doc.
- **Change:** Set `title` to “How to Host a Container Frontend” (or equivalent Host wording), keeping `sidebar_label: Deploy`.
- **Done when:** Frontmatter `title` uses Host wording and stays aligned with the H1.

### deploy-2

- **Type:** Format fix
- **Title:** State exact plan, repository, branch, and build settings in the steps.
- **Problem:** Step **Choose a plan** says “select a plan or **Custom**.” Steps **Connect the repository** and **Set build settings** name fields but not the repository, branch, `npm run build`, or output path the walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on **must** be stated exactly; `FORMAT.MD`, Check 1.
- **Change:** Name the plan tier used on test-platform (for example **Free** or **Paid**, matching `docs/products/frontend-capsule/static/deploy.md`), the GitHub repository and branch (for example a named fork and `main`), **Build Command**, **Path to static content**, and **Capsule Name** from the framework guide the reader prepared via the build-settings prerequisite.
- **Done when:** Steps 4–6 name plan, repo, branch, build command, and output path with no “a plan” or unnamed **Git Repository**.

### deploy-3

- **Type:** Format fix
- **Title:** Bold **Deploy** tab **Builds** in frontmatter `description`.
- **Problem:** `description` reads “Deploy tab Builds section” without bold UI labels; the intro under `#` bolds **Deploy** and **Builds**.
- **Rule:** `writing_style.md`, Words — UI labels in bold; `writing_style.md`, Every doc — intro repeats `description`.
- **Change:** Match `docs/products/frontend-capsule/static/deploy.md`: bold **Deploy** tab and **Builds** in `description` so it matches the intro sentence.
- **Done when:** `description` and the intro use the same bold UI labels for the goal state.

## Proposed outline

```md
---
slug: "/products/frontend-capsule/container/deploy"
title: "How to Host a Container Frontend"
description: >-
  Deploy a static site or SPA on Code Capsules with Container hosting. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Frontend With Container Hosting

<Same one or two sentences as description, with **Deploy** tab **Builds** bolded.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🔌 GitHub, 📋 Build settings; hrefs unchanged.>

## Deploy your container frontend site

1. **Open the capsule wizard**
   Open your Space. Select **New Capsule**.

2. **Choose capsule details**
   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose container hosting**
   On **Hosting**, select **Container**. Click **Next**.

4. **Choose a plan**
   On **Plan**, select <named plan tier>. Click **Next**.

5. **Connect the repository**
   On **Configure**, select <named GitHub repository>, branch `main`, and **Repo subpath** if needed. Click **Next**.

6. **Set build settings**
   On **Deploy**, set **Build Command** to `<exact command>`, **Path to static content** to `<exact folder>`, and **Capsule Name**. Click **Build & Deploy**.

7. **Check the build**
   On **Builds**, confirm the first build is queued or in progress.

## Troubleshooting

<details>
<summary>The page is blank after a successful build</summary>

Confirm **Path to static content** matches the build output folder.

</details>

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>
```