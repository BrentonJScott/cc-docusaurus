---
slug: "/frontend/next.js"
description: >-
  Deploy a server-rendered Next.js application on Code Capsules. When you
  finish, the first build is in progress on the Deploy tab Builds section.
title: "How to Host a Next.js App"
sidebar_label: "Next.js"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Next.js Application

Deploy a server-rendered Next.js application on Code Capsules. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-nextjs', description: 'Fork codecapsules-io/demo-nextjs on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your Next.js app

1. **Open the capsule wizard**

   Open the Space for this app and select **New Capsule**.

2. **Choose capsule details**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

4. **Connect the repository**

   On **Configure**, select the **Git Repository** `codecapsules-io/demo-nextjs` and the branch `main`. Click **Next**.

5. **Set run command**

   On **Deploy**, leave **Run Command** empty. Click **Build & Deploy**.

6. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The first build is in progress or queued.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

You have not connected GitHub, or the fork is missing from the granted repositories. Follow [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules) and confirm `codecapsules-io/demo-nextjs` is listed.

</details>

<details>
<summary>You need a static Next.js export instead of a server</summary>

Use [Host a Static HTML Website](/docs/frontend/static-html) or [Deploy a Static Frontend](/docs/products/frontend-capsule/static/deploy) with the build output from your Next.js export.

</details>