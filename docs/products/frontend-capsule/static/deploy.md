---
slug: "/products/frontend-capsule/static/deploy"
title: "How to Host a Static Frontend Site"
description: >-
  Deploy a static site or SPA on Code Capsules with Static hosting. When you finish, the first build is in progress on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Static Frontend Site

Deploy a static site or SPA on Code Capsules with Static hosting. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
    {type: 'link', href: '/docs/products/frontend-capsule/deploy', label: '📋 Build settings', description: 'Build command and output folder for your framework.'},
  ]}
/>

## Deploy your static frontend site

1. **Open the capsule wizard**

   Open the Space for this site. Select **New Capsule**.

2. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free** or **Paid**.

5. **Connect the repository**

   On **Configure**, select a **Git Repository** and **Branch**. Enter **Repo subpath** if the site is not at the repository root. Click **Next**.

6. **Set build settings**

   On **Deploy**, set **Build Command** (for example `npm run build`, or leave empty when files are pre-built), **Path to static content** (the folder that contains `index.html`, for example `dist`), and **Capsule Name**. Click **Build & Deploy**.

7. **Check the build**

   On **Builds**, confirm the first build is queued or in progress.

## Troubleshooting

<details>
<summary>The build succeeds but the page is blank</summary>

Open **Deploy** and confirm **Path to static content** points to the folder that contains `index.html`. See the [Framework Guides](/docs/products/frontend-capsule/deploy/) for framework output paths.

</details>

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a new build.

</details>