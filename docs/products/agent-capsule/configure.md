---
slug: "/products/agent-capsule/configure"
title: "How to Configure an AI Agent"
description: >-
  Configure build settings, runtime, environment variables, and agent model settings on the Config tab.
sidebar_label: Configure
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Your AI Agent

Change agent build settings, runtime, and provider configuration on the **Config** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/agent-capsule/deploy', label: '🛠️ Agent Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Configure your Agent Capsule

1. **Edit build settings**

   In **Capsule Parameters**, click **Edit** next to **Build**. Set **Project Path** and **Run Command**. Click **Save** and confirm.

2. **Edit runtime settings**

   Click **Edit** next to **Runtime**. Set **Network Port** and **Health Check**. Click **Save** and confirm.

3. **Set environment variables**

   Add or edit variables in **Environment Variables** and click **Save**.

4. **Update Agent Config**

   Edit **Agent Config** to change the public AI provider, model, or API-related settings. The capsule restarts with the new configuration.

## Troubleshooting

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>