---
slug: "/products/frontend-capsule/configure"
title: "How to Configure a Frontend App"
description: >-
  Configure build settings, project path, and environment variables for a Frontend Capsule on the Config tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your Frontend App

Configure build settings, project path, and environment variables on the **Config** tab. These settings apply to [Static](/products/frontend-capsule/static/deploy/) and [Container](/products/frontend-capsule/container/deploy/) hosting.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Frontend Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your frontend app

1. **Open Config**

   Open the Frontend Capsule and select the **Config** tab.

2. **Edit build settings**

   In **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** (default `/`), **Build command** (default `Auto`), and **Build Output Directory** (default `/` when no build runs). Click **Save** and confirm. Frontend Capsules have no **Runtime** settings.

3. **Manage environment variables**

   In **Environment Variables**, click **show** to view `APP_URL`. To add variables, use **Key/Val Editor** or **Text Editor**, edit **Name** and **Value**, and click **Save**. Variables are available at build time (for example `VITE_` or `REACT_APP_` prefixes). On static capsules, saving variables starts a new build.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>