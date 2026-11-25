---
slug: "/products/agent-capsule/deploy"
title: "How to Host an AI Agent"
description: >-
  Deploy an Agent Capsule on Code Capsules. When you finish, the first build is in progress on **Builds**.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your AI Agent

Deploy an Agent Capsule on Code Capsules. When you finish, the first build is in progress on **Builds**.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Deploy your Agent Capsule

1. **Open the capsule wizard**

   Open your Space. Select **New Capsule**.

2. **Choose Agent Capsule**

   On **Capsule Details**, select **AI Agent**, your Team, and Space. Click **Next**.

3. **Choose a plan**

   On **Plan**, select **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your Agent repository and branch `main`. Click **Next**.

5. **Create the capsule**

   On **Build and Deploy Settings**, click **Create Capsule**.

6. **Check the build**

   On the capsule **Deploy** tab, open **Builds**. The first build is in progress.

## Troubleshooting

<details>
<summary>The build fails on missing API keys</summary>

On **Config**, add the provider environment variables from your repository README, then restart the capsule.

</details>