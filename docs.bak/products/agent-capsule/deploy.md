---
slug: "/products/agent-capsule/deploy"
title: "How to Deploy an AI Agent"
description: >-
  Deploy a configurable Agent Capsule on Code Capsules. When you finish, the first build is in progress and the Chat tab is available.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your AI Agent

Deploy a configurable Agent Capsule on Code Capsules from a template or your own repository.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub for template repos.'},
    {type: 'link', href: '/products/agent-capsule/templates', label: '📋 Agent templates', description: 'Optional starter repositories.'},
  ]}
/>

## Deploy your Agent Capsule

1. **Open the capsule wizard**

   Open your Space. Click **+** and select **New Capsule**.

2. **Choose Agent Capsule**

   Select **AI Agent**, your Team, and Space. Click **Next**.

3. **Choose plan and source**

   On **Plan**, select a plan. Choose a template repository or your own codebase. When using a template, enter provider, model, and API key for the public AI provider.

4. **Create and build**

   Complete the wizard and click **Create Capsule**. Code Capsules builds and deploys the Agent Capsule.

5. **Test in Chat**

   Open **Builds** for logs. When the build completes, use the **Chat** tab to talk to the agent. See [Templates](/products/agent-capsule/templates/) and [Configure](/products/agent-capsule/configure/).

## Troubleshooting

<details>
<summary>The build fails on missing API keys</summary>

Open **Config** and confirm provider environment variables from the template README are set.

</details>