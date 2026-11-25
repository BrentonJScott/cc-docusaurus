---
slug: "/full-stack/mern-stack"
title: "How to Host a MERN Stack Application"
description: >-
  Deploy the MERN stack demo on Code Capsules with a MongoDB Capsule and Backend Capsule. When you finish, the demo app loads at the backend public URL.
sidebar_label: "MERN stack"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your MERN Stack Application

Deploy the MERN stack demo on Code Capsules with a MongoDB Capsule and Backend Capsule. When you finish, the demo app loads at the backend public URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork mern-stack', description: 'Fork codecapsules-io/mern-stack on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your MERN stack app

1. **Deploy MongoDB**

   Follow [Host a MongoDB Database](/docs/products/database-capsule/mongodb/deploy) in the same Space.

2. **Open the capsule wizard**

   Open your Space and select **New Capsule**.

3. **Choose Backend Capsule**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and Space. Click **Next**.

4. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

5. **Connect the repository**

   On **Configure**, select `codecapsules-io/mern-stack` and branch `main`. Leave **Run Command** blank. Click **Next**.

6. **Create the capsule**

   On **Deploy**, click **Create Capsule**.

7. **Bind MongoDB**

   On the Backend Capsule **Config** tab, bind your MongoDB Capsule and add `DATABASE_URL`. Click **Save**.

8. **Open the application**

   On **Details**, open the public URL. The MERN demo loads.

## Troubleshooting

<details>
<summary>The app cannot reach MongoDB</summary>

Confirm the MongoDB Capsule is bound on **Config** and `DATABASE_URL` matches the connection string on the MongoDB Capsule **Details** tab.

</details>