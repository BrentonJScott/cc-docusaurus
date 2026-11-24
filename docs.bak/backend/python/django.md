---
slug: "/backend/python/django"
title: "How to Host a Django Application"
description: >-
  Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load.
sidebar_label: "Django"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Django Application

Deploy the Django demo app to a Backend Capsule, bind it to a Persistent Storage capsule, and see the app load.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-django', description: 'Fork codecapsules-io/demo-django to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your demo-django fork.'},
  ]}
/>

## Deploy your Django app

1. **Start a Persistent Storage capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Persistent Storage**, your Team, and your Space. Click **Next**.

3. **Create the storage capsule**

   On **Plan**, choose **Basic**. Click **Create Capsule**.

4. **Start a Backend Capsule**

   In the same Space, click **+** to add another capsule.

5. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

6. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

7. **Connect the repository**

   On **Source Code**, select your `demo-django` fork as the **Repository** and `master` as the **Branch**. Click **Next**.

8. **Create the Backend Capsule**

   On **Build and Deploy Settings**, leave **Run Command** blank. Click **Create Capsule**.

9. **Bind the storage capsule**

   On the Backend Capsule's **Config** tab, find **Bind Data Capsule** and click **Bind** next to your Persistent Storage capsule.

10. **Restart and open the app**

    Turn the capsule toggle off and on again to restart it. When the build finishes, click the **URL** on the **Details** tab. You see the Django app load.

## Troubleshooting

<details>
<summary>Bind Data Capsule doesn't list your storage capsule</summary>

The Persistent Storage capsule is in a different Space. Create it in the same Space as the Backend Capsule, then bind it.

</details>

<details>
<summary>The app shows an error after binding</summary>

The capsule hasn't restarted since the bind. Turn the capsule toggle off and on again and wait for the build to finish.

</details>
