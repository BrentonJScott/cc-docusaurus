---
slug: "/products/backend-capsule/deploy"
title: "How to Deploy a Backend Application"
description: >-
  Deploy server-side applications and APIs on Code Capsules with support for Python, Node.js, Go, Java, and Docker.
sidebar_label: "Build and Deploy"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your Backend Application

Deploy server-side applications and APIs on Code Capsules. Backend Capsules detect your language, install dependencies, and build a runnable image from your repository.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

## Deploy your backend app

1. **Open the capsule wizard**

   Open your Space. Click the yellow **+** and select **New Capsule**.

2. **Choose Backend Capsule**

   Select **Backend Capsule**, your Team, and Space. Click **Next**.

3. **Connect the repository**

   On **Configure**, select the **Git Repository** and **Branch** to deploy. Click **Next**.

4. **Set plan and create**

   On **Plan**, select or customize a plan. Enter a **Capsule Name** and click **Create Capsule**.

5. **Pick a framework guide**

   Code Capsules builds from your repository. For language-specific wizard values, follow [Python](/backend/python/python/), [Django](/backend/python/django/), [Flask](/backend/python/flask/), [Express.js](/backend/node.js/express.js/), [Java](/backend/java/), or [Go](/backend/go/). For a custom `Dockerfile`, use [Docker Capsule](/products/docker-capsule/) guides such as [Flask Docker App](/backend/docker/flask-docker-app/). See [All Backend Deployment Guides](/backend/).

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>