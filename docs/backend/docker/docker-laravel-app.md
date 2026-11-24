---
slug: "/backend/docker/docker-laravel-app"
title: "How to Host a Laravel Application with Docker"
description: >-
  Deploy the Laravel demo app to a Docker Capsule and see it building in the Builds tab.
sidebar_label: "Docker Laravel App"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Laravel Docker Application

Deploy the Laravel demo app to a Docker Capsule and see it building in the Builds tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork laravel-docker-api', description: 'Fork codecapsules-io/laravel-docker-api to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your laravel-docker-api fork.'},
  ]}
/>

## Deploy your Laravel app

1. **Start a Docker Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Docker Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `laravel-docker-api` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Set the Docker settings**

   On **Build and Deploy Settings**, leave the defaults unchanged.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and you see the first build in progress.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Repository dropdown doesn't list `laravel-docker-api`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The app doesn't respond after the build finishes</summary>

The capsule isn't listening on the app's port. On the **Config** tab, click **Edit** next to **Runtime** in **Capsule Parameters**, set **Network Port** to `8000`, click **Save**, then restart the capsule.

</details>
