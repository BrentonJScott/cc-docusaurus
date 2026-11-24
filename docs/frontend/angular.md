---
slug: "/frontend/angular"
description: >-
  Deploy an Angular application on Code Capsules. When you finish, the first
  build is in progress on the Deploy tab Builds section.
title: "How to Host an Angular Application"
sidebar_label: "Angular"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Angular Application

Deploy an Angular application on Code Capsules. When you finish, the first build is in progress on the **Deploy** tab **Builds** section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-angular', description: 'Fork codecapsules-io/demo-angular on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your Angular app

1. **Open the capsule wizard**

   Open the Space for this app. Click the yellow **+** and select **New Capsule**.

2. **Choose capsule details**

   On **Capsule Details**, choose **Frontend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

4. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

5. **Connect the repository**

   On **Configure**, select the **Git Repository** `codecapsules-io/demo-angular` and the branch `main`. Click **Next**.

6. **Set build settings**

   On **Deploy**, set **Build Command** to `npm run build` and **Path to static content** to `dist/ng4-complete-guide`. Click **Build & Deploy**.

7. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The first build is in progress or queued.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

You have not connected GitHub, or the fork is missing from the granted repositories. Follow [Configure Git for Code Capsules](/docs/shared/configure-git-for-code-capsules) and confirm `codecapsules-io/demo-angular` is listed.

</details>

<details>
<summary>The build fails because dist/ng4-complete-guide is missing</summary>

The Angular project in `codecapsules-io/demo-angular` outputs to `dist/ng4-complete-guide`. Set **Path to static content** to that folder exactly.

</details>