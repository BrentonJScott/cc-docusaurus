---
slug: "/products/database-capsule/documentdb/deploy"
title: "How to Deploy a DocumentDB Database"
description: >-
  Deploy a self-hosted, MongoDB-compatible DocumentDB database on Code Capsules.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your DocumentDB Database

DocumentDB is a self-hosted MongoDB API–compatible database. For new projects, prefer [MongoDB Capsules](/products/database-capsule/mongodb/deploy/).

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
  ]}
/>

## Deploy your DocumentDB database

1. **Start the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose MongoDB Compatible**

   Select **MongoDB Compatible**, your Team, and Space. Click **Next**.

3. **Choose plan and resources**

   On **Plan & Deploy**, choose a **Plan** and configure **CPU**, **RAM**, **Storage**, and **Replicas**.

4. **Create the capsule**

   Enter a **Capsule Name** and click **Create Capsule**.

5. **Connect your application**

   Use MongoDB framework guides with DocumentDB connection details. See [Configure](/products/database-capsule/documentdb/configure/).


## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>

