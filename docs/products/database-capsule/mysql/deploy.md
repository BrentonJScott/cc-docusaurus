---
slug: "/products/database-capsule/mysql/deploy"
title: "How to Deploy a MySQL Database"
description: >-
  Deploy a managed MySQL database on Code Capsules with a MySQL Capsule, then connect it to your backend app using a framework guide.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your MySQL Database

MySQL Capsules provide a managed MySQL database for your applications on Code Capsules. When you create a capsule in the dashboard, it is presented as **MySQL**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your MySQL database

1. **Start the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose MySQL**

   Select **MySQL**, your Team, and Space. Click **Next**.

3. **Choose version and plan**

   On **Plan & Deploy**, select a **Version**. See [Versions](/products/database-capsule/mysql/versions/) for supported options. Choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** as needed.

4. **Create the capsule**

   Enter a **Capsule Name** and click **Create Capsule**. Creation can take several minutes.

5. **Connect your application**

   When the capsule is ready, use a framework guide to bind your app: [Django + MySQL](/database/mysql/django-+-mysql/), [Flask + MySQL](/database/mysql/flask-+-mysql/), or [Java + MySQL](/database/mysql/java-+-mysql/). See the [MySQL getting started guide](/database/mysql/) for connection steps.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>