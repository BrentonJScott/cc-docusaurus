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
    {type: 'link', href: '/products/database-capsule/mysql/deploy', label: '🛠️ MySQL Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Create a MySQL Capsule

1. Click **New Capsule** and select **MySQL**, your Team, and Space.
2. On **Plan & Deploy**, select a **Version**. See [Versions](/products/database-capsule/mysql/versions/) for supported options.
3. Choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** as needed.
4. Enter a **Capsule Name** and click **Create Capsule**.

Capsule creation can take several minutes. See the [MySQL getting started guide](/database/mysql/) for connection and binding instructions.

## Framework Guides

- [Django + MySQL](/database/mysql/django-+-mysql/)
- [Flask + MySQL](/database/mysql/flask-+-mysql/)
- [Java + MySQL](/database/mysql/java-+-mysql/)
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
