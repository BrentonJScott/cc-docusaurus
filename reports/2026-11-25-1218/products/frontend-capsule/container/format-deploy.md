# Format report — deploy

- **Run:** 2026-11-25-1218
- **Doc:** `docs/products/frontend-capsule/container/deploy.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Deploy a Container Frontend
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | `# Host Your Frontend With Container Hosting` | Deploy a static site or SPA with Container hosting; when you finish, the first build is in progress on the **Deploy** tab **Builds** section. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account → `/docs/shared/create-an-account` |
| 3 | prerequisite | `## Prerequisites` | A Space → `/docs/shared/create-a-space` |
| 4 | prerequisite | `## Prerequisites` | GitHub connected → `/docs/shared/configure-git-for-code-capsules` |
| 5 | prerequisite | `## Prerequisites` | Build settings → `/docs/products/frontend-capsule/deploy` |
| 6 | goal | `## Deploy your container frontend site` | **Open the capsule wizard** — Open your Space. Select **New Capsule**. |
| 7 | goal | `## Deploy your container frontend site` | **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, your Team, and Space. Click **Next**. |
| 8 | goal | `## Deploy your container frontend site` | **Choose container hosting** — On **Hosting**, **Container**. Click **Next**. |
| 9 | goal (vague value) | `## Deploy your container frontend site` | **Choose a plan** — On **Plan**, select a plan or **Custom** CPU, memory, and replicas. Click **Next**. |
| 10 | goal (vague value) | `## Deploy your container frontend site` | **Connect the repository** — On **Configure**, select a **Git Repository** and **Branch**; optional **Repo subpath**. Click **Next**. |
| 11 | goal (vague value) | `## Deploy your container frontend site` | **Set build settings** — On **Deploy**, set **Build Command**, **Path to static content** (for example `dist`), **Capsule Name**. Click **Build & Deploy**. |
| 12 | goal | `## Deploy your container frontend site` | **Check the build** — On **Builds**, confirm the first build is queued or in progress. |
| 13 | — | `## Troubleshooting` | Blank page after successful build — confirm **Path to static content**. |
| 14 | — | `## Troubleshooting` | Changes did not save — refresh; confirm **Save**. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | Plan, repository, branch, build command, and output path are not stated exactly; the goal depends on those wizard values. |
| Check 2: Prerequisites | pass | All prerequisites are DocCardList links to existing pages under `docs/shared/` and `docs/products/frontend-capsule/`. |
| Check 3: Links | pass | Every prerequisite `href` and slug resolves under `docs/`. |
| Check 4: Format and style | fail | `how_to_format.md`, Steps — plan, repository, branch, build command, and output folder are not named exactly. |

## Tickets

### deploy-1

- **Type:** Format fix
- **Title:** State exact plan, repository, branch, and build settings in the steps.
- **Problem:** Step **Choose a plan** says “select a plan or **Custom**” without a named tier. Step **Connect the repository** uses generic **Git Repository** and **Branch**. Step **Set build settings** uses field labels only, with `dist` as an example rather than the command and folder the walkthrough uses.
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly; `FORMAT.MD`, Check 1 — missing or unclear repo, branch, plan, build command, or output directory fails the check.
- **Change:** Name the plan tier (for example **Free** or **Paid**, matching `docs/products/frontend-capsule/static/deploy.md` and the test-platform walkthrough), the GitHub repository and branch (for example `main`), the **Build Command**, and **Path to static content** the reader must enter. Align values with the format walkthrough for Deploy a Container Frontend.
- **Done when:** Steps name plan, repository, branch, build command, and output path explicitly, with no “select a plan”, unnamed repo/branch, or “for example” placeholders for walkthrough values.

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

<Same one or two sentences as description — Builds goal only.>

## Prerequisites

<DocCardList — 👤 account, 📦 Space, 🔌 GitHub, 📋 Build settings />

## Deploy your container frontend site

1. **Open the capsule wizard** — Open your Space. Select **New Capsule**.

2. **Choose capsule details** — On **Capsule Details**, **Frontend Capsule**, Team, Space. Click **Next**.

3. **Choose container hosting** — On **Hosting**, **Container**. Click **Next**.

4. **Choose a plan** — On **Plan**, named plan tier (for example **Free** or **Paid**). Click **Next**.

5. **Connect the repository** — On **Configure**, named **Git Repository**, **Branch**, optional **Repo subpath**. Click **Next**.

6. **Set build settings** — On **Deploy**, exact **Build Command**, **Path to static content**, **Capsule Name**. Click **Build & Deploy**.

7. **Check the build** — On **Builds**, first build queued or in progress (goal).

## Troubleshooting

<details> — blank page / changes did not save
```