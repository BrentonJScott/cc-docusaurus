---
slug: "/full-stack/mean-stack"
description: >-
  Deploy a full-stack MEAN (MongoDB, Express, Angular, Node) app to Code
  Capsules from GitHub. When you finish, the demo app loads at the capsule
  public URL.
title: "How to Deploy a MEAN Stack Application"
sidebar_label: "MEAN Stack"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your MEAN Stack Application

Deploy a MEAN stack application from GitHub with a MongoDB Capsule and a Backend Capsule. When you finish, the demo app loads at the capsule public URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork mean-stack', description: 'Fork codecapsules-io/mean-stack on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your MEAN stack app

1. **Create the MongoDB capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **MongoDB**, your Team, and Space. On **Plan & Deploy**, choose cluster type, version, and plan. Click **Create Capsule**.

2. **Create the Backend capsule**

   Click **+** again and choose **Backend Capsule**, your Team, and Space. On **Plan**, choose a plan. On **Configure**, select `codecapsules-io/mean-stack` and branch `main`. Leave **Run Command** blank. Click **Create Capsule**.

3. **Wait for the build**

   On the Backend Capsule **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

4. **Connect the capsules**

   Copy the **Public Connection String** from the MongoDB capsule **Details** tab. On the Backend Capsule **Config** tab, under **Data capsules**, click **View** and set `DATABASE_URL` to that string. Click **Save**.

5. **Restart and open the application**

   Restart the Backend Capsule. On **Details**, open the public URL. The MEAN demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>