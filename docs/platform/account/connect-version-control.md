---
slug: "/platform/account/connect-version-control"
title: "Connect GitHub"
description: >-
  Connect GitHub to Code Capsules. When you finish, your repositories appear in
  the Git Repository dropdown when you create a Capsule.
sidebar_label: "Connect GitHub"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect GitHub

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

4. **Open the capsule wizard**

   In the sidebar, click **+** and select **New Capsule**.

5. **Choose capsule details**

   On **Capsule Details**, choose **Frontend** and your Team. Click **Next**.

6. **Choose static hosting**

   On **Hosting**, select **Static**. Click **Next**.

7. **Choose a plan**

   On **Plan**, select **Free**. Click **Next**.

8. **Confirm your repositories**

   On **Configure**, open **Git Repository**. Your selected repositories are listed.

## Troubleshooting

<details>
<summary>The Git Repository dropdown is empty</summary>

The repository is not granted to Code Capsules, or GitHub is not connected. Repeat **Install** on **Repos** and include that repository in **Only select repositories**.

</details>