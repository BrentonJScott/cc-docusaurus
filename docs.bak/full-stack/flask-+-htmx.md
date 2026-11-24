---
title: "How to Deploy a Flask + HTMX App"
sidebar_label: "Flask + HTMX"
slug: "/full-stack/flask-+-htmx"
description: >-
  Deploy a full-stack Flask and HTMX app to Code Capsules from GitHub. When you
  finish, the demo app loads at the capsule public URL.
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Flask HTMX Application

Deploy a Flask and HTMX application from GitHub with Persistent Storage and a Backend Capsule. When you finish, the demo app loads at the capsule public URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-flask-htmx', description: 'Fork codecapsules-io/demo-flask-htmx on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
  ]}
/>

## Deploy your Flask HTMX app

1. **Create the Persistent Storage capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **Persistent Storage**, your Team, and Space. On **Plan**, choose a plan. Click **Create Capsule**.

2. **Create the Backend capsule**

   Click **+** again and choose **Backend Capsule**, your Team, and Space. On **Plan**, choose a plan. On **Configure**, select `codecapsules-io/demo-flask-htmx` and branch `main`. Leave **Run Command** blank. Click **Create Capsule**.

3. **Wait for the build**

   On the Backend Capsule **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

4. **Connect the capsules**

   On the Backend Capsule **Config** tab, under **Data capsules**, click **View**. Click **+** next to **Connection string** to add `DATABASE_URL`. Click **Save**.

5. **Restart and open the application**

   Restart the Backend Capsule. On **Details**, open the public URL. The Flask HTMX demo loads.

## Troubleshooting

<details>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>