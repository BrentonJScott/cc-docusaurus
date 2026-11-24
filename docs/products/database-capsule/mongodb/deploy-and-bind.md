---
slug: "/products/database-capsule/mongodb/deploy-and-bind"
description: >-
  Create a MongoDB Database Capsule and bind it to a backend Capsule.
title: "Deploy and bind MongoDB"
sidebar_label: "Deploy and bind"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy and bind MongoDB

Create a MongoDB Database Capsule and bind it to a backend Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space for the capsules.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Have or create a backend Capsule to bind.'},
  ]}
/>

## Deploy and bind

1. **Create the database Capsule**

   Click **New Capsule** and choose **MongoDB**. Complete **Plan & Deploy** and click **Create Capsule**. Wait until the database Capsule is running.

2. **Open the backend Capsule**

   Open the backend Capsule that should use this database. Go to **Configure** or **Config**.

3. **Bind the database**

   In **Data Capsules** or **Bind database**, select the MongoDB Capsule you created. Click **Save** and confirm.

4. **Confirm binding**

   Connection environment variables appear on the backend Capsule. The database Capsule shows as bound in the UI.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The database Capsule does not appear in the bind list</summary>

Confirm both capsules are in the same Space and the database Capsule status is running. Refresh the backend **Configure** tab.

</details>
