---
slug: "/products/docker-capsule/git/deploy"
title: "How to Deploy a Dockerfile From Git"
description: >-
  Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Dockerfile From Git

Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the Deploy tab Builds section.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork docker-flask', description: 'Fork codecapsules-io/docker-flask on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Deploy your Docker capsule from Git

1. **Open the capsule wizard**

   Open your Space. Select **New Capsule**.

2. **Choose Docker Capsule**

   On **Capsule Details**, select **Docker Capsule**, your Team, and Space. Click **Next**.

3. **Choose plan**

   On **Plan**, select **Basic**. Click **Next**.

4. **Select Git source**

   On **Source**, select **Git repository**, the **Git Repository** `codecapsules-io/docker-flask`, and branch `main`. Click **Next**.

5. **Set build paths**

   On **Deploy**, set **Dockerfile location** to `/Dockerfile` and **Docker build context** to `/`, then enter **Capsule Name**.

6. **Create the capsule**

   On **Deploy**, click **Create Capsule**. Code Capsules links the repo and assigns a hostname.

7. **Confirm the first build**

   On the capsule **Deploy** tab, open **Builds**. The first build for the new capsule is in progress.

## Troubleshooting

<details>
<summary>The build fails immediately</summary>

Open **Builds** and read the log. Confirm the Dockerfile path and container requirements.

</details>

<details>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>