---
slug: "/products/docker-capsule/git/deploy"
title: "How to Deploy a Dockerfile From Git"
description: >-
  Deploy a Docker Capsule from a Dockerfile in Git. When you finish, the first build is running on the Deploy tab Builds section.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your Dockerfile From a Git Repository

Deploy from Git when Code Capsules should build your image from the repository `Dockerfile`. For a pre-built image, see [Deploy an existing image](/products/docker-capsule/image/deploy/).

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
    {type: 'link', href: '/products/docker-capsule/container-requirements', label: '📋 Container requirements', description: 'Port, 0.0.0.0, and CMD.'},
  ]}
/>

## Deploy your Docker capsule from Git

1. **Open the capsule wizard**

   Open your Space. Click **+** and select **New Capsule**.

2. **Choose Docker Capsule**

   Select **Docker Capsule**, your Team, and Space. Click **Next**.

3. **Choose plan**

   On **Plan**, select a plan. Click **Next**.

4. **Select Git source**

   On **Source**, select **Git repository**, **Git Repository**, and **Branch**. Click **Next**.

5. **Set build paths**

   On **Deploy**, set **Dockerfile location** and **Docker build context** if the Dockerfile is not at the repository root, then enter **Capsule Name**.

6. **Create and build**

   Click **Create Capsule**. Code Capsules links the repo, assigns a hostname, and starts the first build on **Builds**.

7. **Verify and continue**

   Open the capsule URL on **Details**. Tune [Builds & Auto-deploy](/products/docker-capsule/git/builds/) and [Deployments](/products/docker-capsule/deployments/). Example tutorials: [Flask Docker App](/backend/docker/flask-docker-app/), [Docker PHP App](/backend/docker/docker-php-app/), [Docker Laravel App](/backend/docker/docker-laravel-app/), [Caddy Docker Site](/backend/docker/caddy-docker-site/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The build fails immediately</summary>

Open **Builds** and read the log. Confirm the Dockerfile path and [container requirements](/products/docker-capsule/container-requirements/).

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section.

</details>