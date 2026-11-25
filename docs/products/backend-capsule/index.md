---
slug: "/products/backend-capsule"
title: "Backend Application Hosting"
description: >-
  Deploy, configure, scale, and monitor server-side applications and APIs with Code Capsules Backend Capsules.
sidebar_label: "Backend Capsule"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Backend Application Hosting

Deploy, configure, scale, and monitor server-side applications and APIs with Code Capsules Backend Capsules.

## Overview

Backend Capsules detect your language, install dependencies, and build a runnable image from your Git repository. They support Python, Node.js, Go, Java, Ruby, PHP, and .NET. Applications with a custom `Dockerfile` deploy as [Docker Capsules](/docs/products/docker-capsule) instead.

## Guides

| Topic | What it covers |
| --- | --- |
| Build and Deploy | Supported languages, frameworks, and deployment |
| Supported Runtimes | Language versions and runtime pinning |
| Configure | Environment variables, build settings, runtime options |
| Scale | CPU, memory, and replicas |
| Monitor | Metrics and performance data |
| [Logs](/docs/products/backend-capsule/logs) | Build and runtime logs |
| Alerting | Notifications for capsule events |
| Add a Procfile | Custom start command |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/backend-capsule/logs', label: '🛠️ View logs', description: 'Build, runtime, and access logs.'},
    {type: 'link', href: '/docs/products/docker-capsule', label: '📋 Docker Capsule', description: 'Custom Dockerfile deployments.'},
    {type: 'link', href: '/docs/products', label: '📋 Products', description: 'Entry pages for every Capsule type.'},
  ]}
/>
