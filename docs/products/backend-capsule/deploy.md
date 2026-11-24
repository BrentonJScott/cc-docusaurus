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

Backend Capsules automatically detect your language, install dependencies, and build a runnable image from your repository. See [Supported Runtimes](/products/backend-capsule/supported-runtimes/) for the full list of language versions and how to pin a specific runtime.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Python

- [Python](/backend/python/python/)
- [Django](/backend/python/django/)
- [Flask](/backend/python/flask/)

## Popular Languages and Frameworks

- [Express.js](/backend/node.js/express.js/)
- [Java](/backend/java/)
- [Go](/backend/go/)

## Docker

Docker-based applications deploy as [Docker Capsules](/products/docker-capsule/), which build from your own `Dockerfile` rather than automatic language detection.

- [Docker Capsule documentation](/products/docker-capsule/)
- [Caddy Docker Site](/backend/docker/caddy-docker-site/)
- [Docker Laravel App](/backend/docker/docker-laravel-app/)
- [Docker PHP App](/backend/docker/docker-php-app/)
- [Flask Docker App](/backend/docker/flask-docker-app/)

## Deployment Guides

- [All Backend Deployment Guides](/backend/)
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
