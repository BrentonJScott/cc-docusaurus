---
slug: "/backend/python/python"
title: "How to Host a Python Application"
description: >-
  Deploy the Python demo app to a Backend Capsule and see it building in the Builds tab.
sidebar_label: "Python"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Python Application

Deploy the Python demo app to a Backend Capsule and see it building in the Builds tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork demo-python', description: 'Fork codecapsules-io/demo-python to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your demo-python fork.'},
  ]}
/>

## Deploy your Python app

1. **Start a Backend Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `demo-python` fork as the **Repository** and `master` as the **Branch**. Click **Next**.

5. **Set the run command**

   On **Build and Deploy Settings**, leave **Run Command** blank.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and you see the first build in progress.

## Troubleshooting

<details>
<summary>The Repository dropdown doesn't list `demo-python`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details>
<summary>The build fails while installing dependencies</summary>

The build reads `requirements.txt` from the root of the repository. Check that your fork still has `requirements.txt` on the `master` branch, then push a fix to trigger a new build.

</details>
