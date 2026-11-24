---
slug: "/products/backend-capsule"
title: "Backend Application Hosting"
description: >-
  Deploy, configure, scale, and monitor server-side applications and APIs with Code Capsules Backend Capsules.
sidebar_label: "Backend Capsule"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Everything About Hosting Your Backend Application

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

Host and scale server-side applications and APIs on Code Capsules. Backend Capsules support Python, Node.js, Go, Java, Ruby, PHP, and .NET with automatic language detection and builds from your Git repository.

For applications with a custom `Dockerfile`, see the [Docker Capsule](/products/docker-capsule/) documentation.

- [Build and Deploy](/products/backend-capsule/deploy/) — supported languages, frameworks, and deployment steps
- [Supported Runtimes](/products/backend-capsule/supported-runtimes/) — language versions and runtime pinning
- [Configure](/products/backend-capsule/configure/) — environment variables, build settings, and runtime options
- [Scale](/products/backend-capsule/scale/) — allocate resources as your traffic grows
- [Monitor](/products/backend-capsule/monitor/) — view metrics and performance data
- [Logs](/products/backend-capsule/logs/) — access build and runtime logs
- [Alerting](/products/alerting/) — set up notifications for capsule events
- [Add a Procfile](/products/backend-capsule/add-procfile/) — customise the start command for your app

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

