---
slug: "/shared/configure-git-for-code-capsules"
title: "How to Configure Git for Code Capsules"
description: >-
  Connect GitHub and grant access so your demo fork appears in the wizard's Git Repository dropdown.
sidebar_label: "Configure Git"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Git for Code Capsules

Connect GitHub and grant access so your demo fork appears in the wizard's **Git Repository** dropdown.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork a repository', description: 'Fork the demo repo you plan to deploy.'},
  ]}
/>

## Connect your GitHub account

1. **Connect GitHub**

   In the capsule wizard, connect your GitHub account to Code Capsules.

2. **Grant access to your fork**

   Give Code Capsules access to your fork. It now appears in the **Git Repository** dropdown.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

GitHub isn't connected, or your fork isn't among the repositories you granted access to. Connect GitHub again and grant access to the fork.

</details>
