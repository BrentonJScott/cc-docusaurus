---
slug: "/database/mysql/java-+-mysql"
title: "How to Host Java with MySQL"
description: >-
  Deploy a Java app with a MySQL database on Code Capsules from GitHub. When you
  finish, the demo app loads at the capsule public URL.
sidebar_label: "Java + MySQL"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Java MySQL Application

Deploy a Java app with a MySQL Data Capsule and a Backend Capsule from GitHub. When you finish, the demo app loads at the capsule public URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-java-mysql', description: 'Fork codecapsules-io/demo-java-mysql on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your Java MySQL app

1. **Create the MySQL capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **Data Capsule**, select **MySQL Database Cluster**, and choose your Team and Space. Click **Create Capsule**.

2. **Create the Backend capsule**

   Click **+** again and choose **Backend Capsule**, your Team, and Space. On **Plan**, choose a plan. On **Configure**, select `codecapsules-io/demo-java-mysql` and branch `main`. Leave **Run Command** blank. Click **Create Capsule**.

3. **Wait for the build**

   On the Backend Capsule **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

4. **Connect the capsules**

   On the Backend Capsule **Config** tab, under **Data capsules**, click **View**. Click **+** next to **Connection string** to add `DATABASE_URL`. Click **Save**.

5. **Open the application**

   On the Backend Capsule **Details** tab, open the public URL. The Java demo loads.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>