---
slug: "/full-stack/mern-stack"
description: >-
  Deploy a full-stack MERN (MongoDB, Express, React, Node) app to Code
  Capsules from GitHub. When you finish, the demo app loads at the capsule
  public URL.
title: "How to Deploy a MERN Stack Application"
sidebar_label: "MERN Stack"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your MERN Stack Application

Deploy a MERN stack application from GitHub with a MongoDB Capsule and a Backend Capsule. When you finish, the demo app loads at the capsule public URL.

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

1. **Create the MongoDB capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **MongoDB**, your Team, and Space. On **Plan & Deploy**, choose cluster type, version, and plan. Click **Create Capsule**.

2. **Create the Backend capsule**

   Click **+** again and choose **Backend Capsule**, your Team, and Space. On **Plan**, choose a plan. On **Configure**, select `codecapsules-io/mern-stack` and branch `main`. Leave **Run Command** blank. Click **Create Capsule**.

3. **Wait for the build**

   On the Backend Capsule **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

4. **Connect the capsules**

   On the Backend Capsule **Config** tab, under **Data capsules**, click **View**. Click **+** next to **Connection string** to add `DATABASE_URL`. Click **Save**.

5. **Restart and open the application**

   Restart the Backend Capsule. On **Details**, open the public URL. The MERN demo loads.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>