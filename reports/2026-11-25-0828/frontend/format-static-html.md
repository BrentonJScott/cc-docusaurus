# Format report: static-html.md

- **Run:** 2026-11-25-0828
- **Doc file:** `docs/frontend/static-html.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host a Static HTML Website
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. **prerequisite** — Card: Code Capsules account — `## Prerequisites`
2. **prerequisite** — Card: Fork demo-html — `## Prerequisites`
3. **prerequisite** — Card: A Space — `## Prerequisites`
4. **prerequisite** — Card: GitHub connected — `## Prerequisites`
5. **goal** — Open the Space, click **+**, select **New Capsule** — `## Deploy your static HTML site` (step 1)
6. **goal** — On **Capsule Details**, choose **Frontend Capsule**, Team, Space — step 2
7. **goal** — On **Hosting**, select **Static** — step 3
8. **goal** — On **Plan**, select **Free** — step 4
9. **goal** — On **Configure**, select **Git Repository** `codecapsules-io/demo-html`, branch `main` — step 5
10. **goal** — On **Deploy**, empty **Build Command**, **Path to static content** `/`, **Build & Deploy** — step 6
11. **goal** — On **Deploy** tab **Builds**, first build in progress or queued — step 7
12. **remove** (troubleshooting only) — Symptom/fix pairs for empty repo dropdown and missing index — `## Troubleshooting`

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Goal steps live under the deploy section; last step states build in progress/queued on **Builds**, matching the documented goal. |
| Check 2: Prerequisites | fail | All four prerequisite cards point at `docs/shared/` pages that do not exist in `docs/`. |
| Check 3: Links | fail | Five internal targets missing: `create-an-account`, `fork-a-demo-repo`, `create-a-space`, `configure-git-for-code-capsules` (cards and troubleshooting). |
| Check 4: Format and style | fail | Step 1 names the control by colour (“yellow **+**”), which `writing_style.md` forbids. |

## Tickets

### static-html-1

- **Type:** Format fix
- **Title:** Name the new-capsule control by label, not colour.
- **Problem:** Step 1 says “Click the yellow **+** and select **New Capsule**.”
- **Rule:** `writing_style.md`, Words: “Don't name UI controls by colour or position alone.”
- **Change:** Rewrite step 1 to direct the reader to **New Capsule** (or the control’s on-screen label) without “yellow.”
- **Done when:** Step 1 describes the action using bold UI labels only, with no colour or position wording.

### shared-create-an-account

- **Type:** Shared page
- **Title:** Create `docs/shared/create-an-account.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-an-account`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/platform/capsules/format-health-checks.md` (shared-create-an-account).
- **Done when:** That shared page exists and this guide’s account card resolves.

### shared-create-a-space

- **Type:** Shared page
- **Title:** Create `docs/shared/create-a-space.md`.
- **Problem:** Prerequisites link to `/docs/shared/create-a-space`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** See the same ticket in `reports/2026-11-25-0828/products/docker-capsule/format-scale.md` (shared-create-a-space).
- **Done when:** That shared page exists and this guide’s Space card resolves.

### shared-fork-a-demo-repo

- **Type:** Shared page
- **Title:** Create `docs/shared/fork-a-demo-repo.md`.
- **Problem:** Prerequisites link to `/docs/shared/fork-a-demo-repo`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/fork-a-demo-repo.md` with slug `/shared/fork-a-demo-repo`, covering how to fork a Code Capsules demo repository on GitHub (with `demo-html` called out as the static HTML example). Structure as a short how-to or explanation consistent with other shared pages.
- **Done when:** The path resolves in `docs/` and the fork card link works.

### shared-configure-git-for-code-capsules

- **Type:** Shared page
- **Title:** Create `docs/shared/configure-git-for-code-capsules.md`.
- **Problem:** Prerequisites and troubleshooting link to `/docs/shared/configure-git-for-code-capsules`, but no file exists under `docs/shared/`.
- **Rule:** `FORMAT.MD`, Check 2 / Check 3; `how_to_format.md`, Prerequisites.
- **Change:** Add `docs/shared/configure-git-for-code-capsules.md` with slug `/shared/configure-git-for-code-capsules`, covering connecting GitHub and granting access so the demo fork appears in the wizard’s **Git Repository** dropdown.
- **Done when:** The path resolves in `docs/` and both links from this guide work.

## Proposed outline

```md
---
slug: "/frontend/static-html"
title: "How to Host a Static HTML Website"
description: >-
  Deploy a static HTML site on Code Capsules. When you finish, the first build is
  in progress on the Deploy tab Builds section.
sidebar_label: "Static HTML"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Static HTML Website

Deploy a static HTML site on Code Capsules. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-html', description: 'Fork codecapsules-io/demo-html on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your static HTML site

1. **Open the capsule wizard**

   Open the Space for this app. Select **New Capsule** (via the add control in the Space).

2. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

5. **Connect the repository**

   On **Configure**, select the **Git Repository** `codecapsules-io/demo-html` and the branch `main`. Click **Next**.

6. **Set build settings**

   On **Deploy**, leave **Build Command** empty and set **Path to static content** to `/`. Click **Build & Deploy**.

7. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The first build is in progress or queued.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

You have not connected GitHub, or the fork is missing from the granted repositories. Follow [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules) and confirm `codecapsules-io/demo-html` is listed.

</details>

<details>
<summary>The site loads but index.html is not found</summary>

`codecapsules-io/demo-html` serves files from the repository root. Set **Path to static content** to `/` and leave **Build Command** empty.

</details>
```