---
slug: "/platform/account/connect-version-control"
title: "Connect GitHub or GitLab"
description: >-
  Connect GitHub to Code Capsules. When you finish, your repositories appear in
  the Git Repository dropdown when you create a Capsule.
sidebar_label: "Connect GitHub or GitLab"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub or GitLab

Connect GitHub to Code Capsules. When you finish, your repositories appear in the **Git Repository** dropdown when you create a Capsule.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Connect version control

1. **Open Repos**

   In the dashboard, open **Repos**.

2. **Install GitHub**

   Click **Install** next to **GitHub**. Sign in to GitHub if prompted.

3. **Limit repository access**

   On **Only select repositories**, choose the repositories you deploy from. Click **Install & Authorize**.

4. **Confirm in the capsule wizard**

   Start **New Capsule**. On **Configure**, open **Git Repository**. Your selected repositories are listed.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

The repository is not granted to Code Capsules, or GitHub is not connected. Repeat **Install** on **Repos** and include that repository in **Only select repositories**.

</details>