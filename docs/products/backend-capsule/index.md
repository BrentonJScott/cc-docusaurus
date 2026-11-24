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

Backend Capsules detect your language, install dependencies, and build a runnable image from your Git repository. They support Python, Node.js, Go, Java, Ruby, PHP, and .NET. Applications with a custom `Dockerfile` deploy as [Docker Capsules](/products/docker-capsule/) instead.

## Guides

| Topic | What it covers |
| --- | --- |
| [Build and Deploy](/products/backend-capsule/deploy/) | Supported languages, frameworks, and deployment |
| [Supported Runtimes](/products/backend-capsule/supported-runtimes/) | Language versions and runtime pinning |
| [Configure](/products/backend-capsule/configure/) | Environment variables, build settings, runtime options |
| [Scale](/products/backend-capsule/scale/) | CPU, memory, and replicas |
| [Monitor](/products/backend-capsule/monitor/) | Metrics and performance data |
| [Logs](/products/backend-capsule/logs/) | Build and runtime logs |
| [Alerting](/products/alerting/) | Notifications for capsule events |
| [Add a Procfile](/products/backend-capsule/add-procfile/) | Custom start command |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Deploy backend app', description: 'Languages and framework links.'},
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Language-specific deployment guides.'},
    {type: 'link', href: '/products/docker-capsule', label: '📋 Docker Capsule', description: 'Custom Dockerfile deployments.'},
  ]}
/>