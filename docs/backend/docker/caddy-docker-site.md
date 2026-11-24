---
slug: "/backend/docker/caddy-docker-site"
title: "How to Host a Caddy Site with Docker"
description: >-
  Deploy the Caddy demo app to a Docker Capsule and see it building in the Builds tab.
sidebar_label: "Caddy Docker Site"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Caddy Docker Site

Deploy the Caddy demo app to a Docker Capsule and see it building in the Builds tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork hello-caddy', description: 'Fork codecapsules-io/hello-caddy to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your hello-caddy fork.'},
  ]}
/>

## Deploy your Caddy app

1. **Start a Docker Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Docker Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `hello-caddy` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Set the Docker settings**

   On **Build and Deploy Settings**, enter `Dockerfile` in **Dockerfile location** and leave **Docker build context** blank.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and you see the first build in progress.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Repository dropdown doesn't list `hello-caddy`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The build fails because the Dockerfile isn't found</summary>

**Dockerfile location** doesn't match the file in the repository. Set it to `Dockerfile` and leave **Docker build context** blank.

</details>
