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

Deploy a static site or SPA on Code Capsules with Container hosting. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-react', description: 'Fork codecapsules-io/demo-react on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Deploy your container frontend site

1. **Open the capsule wizard**

   Open your Space. Select **New Capsule**.

2. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and Space. Click **Next**.

3. **Choose container hosting**

   On **Hosting**, select **Container**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

5. **Connect the repository**

   On **Configure**, select the **Git Repository** `codecapsules-io/demo-react` and the branch `main`. Click **Next**.

6. **Set build settings**

   On **Deploy**, set **Build Command** to `npm run build`, **Path to static content** to `build`, and **Capsule Name**. Click **Build & Deploy**.

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