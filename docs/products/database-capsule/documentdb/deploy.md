---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Deploy a DocumentDB Database"
description: >-
  Deploy a self-hosted, MongoDB-compatible DocumentDB database on Code Capsules with a DocumentDB Capsule and connect it to your backend app.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your DocumentDB Database

DocumentDB is a self-hosted NoSQL document database [compatible with the MongoDB API](https://documentdb.io/). When you create a capsule in the dashboard, it is presented as **MongoDB Compatible**.

For new MongoDB-compatible workloads, use a [MongoDB Capsule](/products/database-capsule/mongodb/deploy/) instead. MongoDB Capsules are managed on MongoDB Atlas and receive more active platform support. DocumentDB Capsules remain available for existing workloads that require a self-hosted database inside your Space.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/database-capsule/documentdb/deploy', label: '🛠️ DocumentDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Create a DocumentDB Capsule

1. Click **New Capsule** and select **MongoDB Compatible**, your Team, and Space.
2. On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas** as needed.
3. Enter a **Capsule Name** and click **Create Capsule**.

Capsule creation can take several minutes. See [Configure](/products/database-capsule/documentdb/configure/) for connection details and binding instructions.

## Framework Guides

- [Django + MongoDB](/database/mongodb/django-+-mongodb/)
- [Express + MongoDB](/database/mongodb/express-+-mongodb/)
- [Flask + MongoDB](/database/mongodb/flask-+-mongodb/)

Use the MongoDB guides above and adapt the connection details from your DocumentDB Capsule.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
