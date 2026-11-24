---
slug: "/products/docker-capsule"
title: "Docker Container Hosting"
description: >-
  Run containerized apps on Code Capsules with a Docker Capsule, built from your own Dockerfile or deployed from an existing public container image.
sidebar_label: "Docker Capsule"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Docker Container Hosting

Run containerized apps on Code Capsules with a Dockerfile in Git or a public container image.

## Overview

Docker Capsules host applications you package as containers. Code Capsules handles networking, scaling, and operations. You choose **Git repository** builds or a **Container image** source when you create the capsule—you cannot switch later without creating a new capsule.

## Choose how to deploy

| | [From Git](/products/docker-capsule/git/deploy/) | [From an existing image](/products/docker-capsule/image/deploy/) |
| --- | --- | --- |
| **You provide** | A Git repository with a `Dockerfile` | A public container image |
| **Who builds it** | Code Capsules builds the image | You build and publish the image |
| **First deploy** | Starts automatically when the capsule is created | Click **Pull & Deploy** after create |
| **Updates** | Auto-deploy on push to your branch | **Pull & Deploy** for a newer tag |
| **Best for** | Apps built from source | CI-built or published images |

On the **Source** step of the wizard, select **Git repository** or **Container image**.

## Documentation

| Topic | What it covers |
| --- | --- |
| [Container requirements](/products/docker-capsule/container-requirements/) | Port binding and process model |
| [Deploy from Git](/products/docker-capsule/git/deploy/) | Dockerfile and create flow |
| [Builds & Auto-deploy](/products/docker-capsule/git/builds/) | Builds, Dockerfile path, context |
| [Deploy from image](/products/docker-capsule/image/deploy/) | Public image deploy |
| [Image updates](/products/docker-capsule/image/updates/) | Change image or tag |
| [Deployments](/products/docker-capsule/deployments/) | Strategy, history, rollback |
| [Configure](/products/docker-capsule/configure/) | Port, env vars, data capsules |
| [Scale](/products/docker-capsule/scale/) | CPU, memory, replicas |
| [Monitor](/products/docker-capsule/monitor/) | Metrics |
| [Logs](/products/docker-capsule/logs/) | Runtime and access logs |
| [Alerting](/products/alerting/) | Notifications |

## Guides

| Guide | What it deploys |
| --- | --- |
| [Flask Docker App](/backend/docker/flask-docker-app/) | Flask in Docker |
| [Docker PHP App](/backend/docker/docker-php-app/) | PHP in Docker |
| [Docker Laravel App](/backend/docker/docker-laravel-app/) | Laravel in Docker |
| [Caddy Docker Site](/backend/docker/caddy-docker-site/) | Caddy site |
| [All Docker deployment guides](/backend/docker/) | Full list |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Deploy from Git', description: 'Build from a Dockerfile.'},
    {type: 'link', href: '/products/backend-capsule', label: '📋 Backend Capsule', description: 'Non-Docker language deploys.'},
    {type: 'link', href: '/backend/docker', label: '📋 Docker tutorials', description: 'Step-by-step app guides.'},
  ]}
/>