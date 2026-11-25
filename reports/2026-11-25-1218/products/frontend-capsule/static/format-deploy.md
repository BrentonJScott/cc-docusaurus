# Format report — deploy

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/frontend-capsule/static/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Static Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | `# Host Your Static Frontend Site` | Deploy a static site or SPA with Static hosting; when you finish, the first build is in progress on the **Deploy** tab **Builds** section. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/docs/products/frontend-capsule/deploy` |
| 6 | goal | `## Deploy your static frontend site` | **Open the capsule wizard** — Open the Space for this site. Select **New Capsule**. |
| 7 | goal | `## Deploy your static frontend site` | **Choose capsule details** — On **Capsule Details**, choose **Frontend Capsule**, Team, and Space. Click **Next**. |
| 8 | goal | `## Deploy your static frontend site` | **Choose static hosting** — On **Hosting**, select **Static**. Click **Next**. |
| 9 | goal | `## Deploy your static frontend site` | **Choose a plan** — On **Plan**, select **Free** or **Paid**. Click **Next**. |
| 10 | goal (vague value) | `## Deploy your static frontend site` | **Connect the repository** — On **Configure**, select a **Git Repository** and **Branch**. Optional **Repo subpath**. Click **Next**. |
| 11 | goal (vague value) | `## Deploy your static frontend site` | **Set build settings** — On **Deploy**, set **Build Command** (e.g. `npm run build` or empty), **Path to static content** (e.g. `dist`), and **Capsule Name**. Click **Build & Deploy**. |
| 12 | goal | `## Deploy your static frontend site` | **Check the build** — On **Builds**, confirm the first build is queued or in progress. |
| 13 | — | `## Troubleshooting` | Blank page after successful build — check **Path to static content**; Framework Guides link. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh and **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Repository, branch, build command, and output folder are not stated exactly; goal-dependent values must be explicit per `FORMAT.MD` Check 1. |
| Check 2: Prerequisites | fail | Build settings card links to `/docs/products/frontend-capsule/deploy`, not a page under `docs/shared/`. |
| Check 3: Links | pass | All prerequisite and troubleshooting `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Prerequisites — shared-page rule; Steps — repository, branch, build command, and output path are not named exactly. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** State exact repository and branch in step 5.
- **Problem:** Step **Connect the repository** says “select a **Git Repository** and **Branch**” without naming the repository or branch the walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1 — missing or unclear repo or branch fails the check.
- **Change:** Name the GitHub repository and branch (for example `main`) the reader must select. Align names with the values used in the format walkthrough for Deploy a Static Frontend.
- **Done when:** Step 5 names the repository and branch explicitly with no unnamed **Git Repository** or **Branch**.

### deploy-2

- **Type:** Format fix
- **Title:** State exact build command and static content path in step 6.
- **Problem:** Step **Set build settings** uses “for example `npm run build`” and “for example `dist`” instead of the exact **Build Command** and **Path to static content** the walkthrough requires.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; don't write “such as” for build command or output folder.
- **Change:** Replace examples with the exact build command and output folder for the test path (or state explicitly when the command is empty for pre-built static files). Match framework guide values from the walkthrough repo when one applies.
- **Done when:** Step 6 states the build command and path to static content exactly, with no “for example” wording.

### deploy-3

- **Type:** Format fix
- **Title:** Point build-settings prerequisite at `docs/shared/` or remove it.
- **Problem:** The **Build settings** prerequisite card uses `href: '/docs/products/frontend-capsule/deploy'`, which is not under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 — How-to prerequisites link to shared pages; `how_to_format.md`, Prerequisites — `href` targets the shared page that explains the prerequisite.
- **Change:** If build settings stay a prerequisite, link to an existing shared page that covers them, or drop the card once steps 5–6 state exact repo, branch, build command, and output path. Do not leave a product how-to as the only prerequisite target.
- **Done when:** Every prerequisite `href` is `/docs/shared/<page>` or the card is removed and Check 1 still passes.

## Proposed outline

```md
---
slug: "/products/frontend-capsule/static/deploy"
title: "How to Host a Static Frontend Site"
description: >-
  Deploy a static site or SPA on Code Capsules with Static hosting. When you
  finish, the first build is in progress on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Static Frontend Site

Deploy a static site or SPA on Code Capsules with Static hosting. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🔌 GitHub connected (shared pages only) />

## Deploy your static frontend site

1. **Open the capsule wizard** — Open the Space. Select **New Capsule**.

2. **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, Team, Space → **Next**.

3. **Choose static hosting** — On **Hosting**, **Static** → **Next**.

4. **Choose a plan** — On **Plan**, **Free** or **Paid** → **Next**.

5. **Connect the repository** — On **Configure**, repository `<name>`, branch `<name>`, optional **Repo subpath** → **Next**.

6. **Set build settings** — On **Deploy**, **Build Command** `<exact>`, **Path to static content** `<exact>`, **Capsule Name** → **Build & Deploy**.

7. **Check the build** — On **Builds**, first build queued or in progress.

## Troubleshooting

<details> blank page — path to static content; Framework Guides when needed </details>
<details> changes did not save — refresh and Save </details>
```