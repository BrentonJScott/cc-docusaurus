---
slug: "/products/agent-capsule/configure"
title: "How to Configure an AI Agent"
description: >-
  Configure build settings, runtime, environment variables, and agent model settings on the Config tab. When you finish, the updated capsule parameters and environment variables are saved.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your AI Agent

Configure build settings, runtime, environment variables, and agent model settings on the Config tab. When you finish, the updated capsule parameters and environment variables are saved.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/products/agent-capsule/deploy', label: '🛠️ Agent Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your Agent Capsule

1. **Open Config**

   On your **Space** dashboard, open the Agent Capsule. Click the **Config** tab.

2. **Edit build settings**

   On **Config**, in **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** to `/` and **Run Command** to `npm start`. Click **Save** and confirm.

3. **Edit runtime settings**

   On **Config**, click **Edit** next to **Runtime**. Set **Network Port** to `8000` and **Health Check** to **Automatic**. Click **Save** and confirm.

4. **Set environment variables**

   On **Config**, add `OPENAI_API_KEY` in **Environment Variables** with your provider key as the value. Click **Save**.

5. **Confirm the saved settings**

   On **Config**, reload the tab. **Capsule Parameters** and **Environment Variables** show the values you saved.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>