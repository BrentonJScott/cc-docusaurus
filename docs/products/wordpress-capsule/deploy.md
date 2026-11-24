---
slug: "/products/wordpress-capsule/deploy"
title: "How to Deploy a WordPress Site"
description: >-
  Deploy a WordPress site on Code Capsules. When you finish, WordPress is installing and the Details tab shows the site URL.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your WordPress Site

Deploy WordPress on Code Capsules with a managed WordPress Capsule, MySQL, and persistent storage.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Required when deploying from Git.'},
  ]}
/>

## Deploy your WordPress site

1. **Open the capsule wizard**

   Open your Space. Click **+** and select **New Capsule**.

2. **Choose WordPress**

   Select **WordPress**, your Team, and Space. Click **Next**.

3. **Choose plan**

   On **Plan**, select or customize a plan. Click **Next**.

4. **Attach data capsules**

   Select or create a **MySQL** capsule and a **Persistent Storage** capsule. Click **Create Capsule**.

5. **Choose deploy source**

   Deploy the managed WordPress image or connect a Git repository with your WordPress codebase, then complete the setup wizard in the browser.

6. **Open the site**

   When installation finishes, open the capsule URL on **Details** and sign in to wp-admin.

## Troubleshooting

<details>
<summary>Installation stalls</summary>

Confirm MySQL and Persistent Storage capsules are healthy on **Details**. Check **Logs** for PHP or database errors.

</details>