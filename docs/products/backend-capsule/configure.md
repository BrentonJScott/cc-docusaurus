---
slug: "/products/backend-capsule/configure"
title: "How to Configure a Backend Application"
description: >-
  Configure build settings, runtime port, health checks, environment variables, and data capsule bindings on the Config tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Backend Application

Change build and runtime settings, environment variables, and data bindings on the **Config** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your backend app

1. **Edit build settings**

   In **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** (default `/`) and **Run Command** if needed. Click **Save** and confirm. Saving **Build** triggers a rebuild and deploy.

2. **Edit runtime settings**

   Click **Edit** next to **Runtime**. Set **Network Port** (default `3000`) and **Health Check** to **Automatic** or **Manual**. For **Manual**, set **Endpoint** (for example `/health`), **Timeout**, and **Time to First Check**. See [Health checks](/platform/capsules/health-checks/). Click **Save** and confirm. Saving **Runtime** redeploys without a new build.

3. **Set environment variables**

   In **Environment Variables**, click **show** to view `APP_URL`. Use **Key/Val Editor** or **Text Editor** to add or edit **Name** and **Value**, then click **Save**.

4. **Bind a Database Capsule**

   In **Data capsules**, click **View** on a database capsule to see connection details. Click **+** next to **Connection string** to add `DATABASE_URL` to the Backend Capsule.

5. **Bind persistent storage**

   Click **Bind** on a **Persistent Storage Capsule**. Code Capsules sets `PERSISTENT_STORAGE_DIR` on the Backend Capsule for shared file access.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>