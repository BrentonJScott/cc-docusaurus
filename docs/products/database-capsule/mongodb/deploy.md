---
slug: "/products/database-capsule/mongodb/deploy"
title: "How to Deploy a MongoDB Database"
description: >-
  Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your MongoDB Database

MongoDB Capsules are managed clusters on MongoDB Atlas—the recommended MongoDB option on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your MongoDB database

1. **Start the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose MongoDB**

   Select **MongoDB**, your Team, and Space. Click **Next**.

3. **Choose cluster options**

   On **Plan & Deploy**, choose **Cluster Type** (**Dedicated** or **Shared**), a **Version**, **Plan**, **Storage**, and **Replicas** for Dedicated clusters.

4. **Create the capsule**

   Enter a **Capsule Name** and click **Create Capsule**. Cluster creation can take several minutes.

5. **Connect your application**

   Follow [Django + MongoDB](/database/mongodb/django-+-mongodb/), [Express + MongoDB](/database/mongodb/express-+-mongodb/), or [Flask + MongoDB](/database/mongodb/flask-+-mongodb/). See [MongoDB getting started](/database/mongodb/).


## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

