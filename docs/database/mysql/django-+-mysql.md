---
slug: "/database/mysql/django-+-mysql"
title: "How to Host Django with MySQL"
description: >-
  Deploy a Django app with a MySQL database on Code Capsules from GitHub. When
  you finish, the demo app loads at the capsule public URL.
sidebar_label: "Django + MySQL"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Django MySQL Application

Deploy a Django app with a MySQL database on Code Capsules from GitHub. When you finish, the demo app loads at the capsule public URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork django-demo', description: 'Fork codecapsules-io/django-demo on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your Django MySQL app

1. **Start the MySQL capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **Data Capsule**, select **MySQL Database Cluster**, and choose your Team and Space.

2. **Create the MySQL capsule**

   Click **Create Capsule**.

3. **Start the Backend capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

4. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

5. **Configure the repository**

   On **Configure**, select `codecapsules-io/django-demo` as the repository and `main` as the branch. Leave **Run Command** blank.

6. **Create the Backend capsule**

   Click **Create Capsule**.

7. **Wait for the build**

   On the Backend Capsule **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

8. **Connect the capsules**

   On the Backend Capsule **Config** tab, under **Data capsules**, click **View**. Click **+** next to **Connection string** to add `DATABASE_URL`. Click **Save**.

9. **Open the application**

   On the Backend Capsule **Details** tab, open the public URL. The Django demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>