---
slug: "/shared/connect-github"
title: "How to Connect GitHub to Code Capsules"
description: >-
  Give Code Capsules access to the GitHub repository you want to deploy.
sidebar_label: "Connect GitHub"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub to Code Capsules

Give Code Capsules access to the GitHub repository you want to deploy.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 A forked demo repo', description: 'Fork the repository you want to deploy.'},
  ]}
/>

## Connect your GitHub account

1. **Open Repos**

   In the dashboard, open **Repos** and click **Install** next to **GitHub**.

2. **Choose the repositories**

   On GitHub, select your GitHub username, enable **Only Select Repositories**, and select the repository you want to deploy.

3. **Authorize Code Capsules**

   Click **Install & Authorize**. The repository appears in the **Repos** list in Code Capsules.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The repository isn't in the Repos list</summary>

The GitHub app doesn't have access to it. In GitHub, open **Settings** > **Applications**, configure the Code Capsules app, and add the repository.

</details>
