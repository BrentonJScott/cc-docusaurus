---
slug: "/shared/configure-git-for-code-capsules"
title: "Configure Git for Code Capsules"
description: >-
  Connect GitHub to Code Capsules so your repositories appear in the capsule wizard.
sidebar_label: "Configure Git"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Configure Git for Code Capsules

Connect GitHub so Code Capsules can list your repositories when you create a Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork a repository', description: 'Fork the demo repo or one you plan to deploy.'},
  ]}
/>

## Connect GitHub for Code Capsules

1. **Open Git configuration**

   In the capsule wizard, on **Connect a Git Repository**, click **Configure Git for Code Capsules**.

2. **Sign in to GitHub**

   Complete the GitHub sign-in flow when prompted.

3. **Grant repository access**

   Grant access to the repository you forked, or to all repositories your Team needs.

4. **Confirm the repository list**

   Return to Code Capsules and open the **Git Repository** dropdown again. Your repository appears in the list.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

GitHub is not connected, or the repository was not included in the access grant. Repeat the configuration flow and confirm the repository is selected.

</details>