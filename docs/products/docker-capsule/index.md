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

| | From Git | From an existing image |
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
| [Container requirements](/docs/products/docker-capsule/container-requirements) | Port binding and process model |
| Deploy from Git | Dockerfile and create flow |
| Builds & Auto-deploy | Builds, Dockerfile path, context |
| Deploy from image | Public image deploy |
| Image updates | Change image or tag |
| Deployments | Strategy, history, rollback |
| Configure | Port, env vars, data capsules |
| Scale | CPU, memory, replicas |
| Monitor | Metrics |
| Logs | Runtime and access logs |
| Alerting | Notifications |

## Guides

| Guide | What it deploys |
| --- | --- |
| Flask Docker App | Flask in Docker |
| Docker PHP App | PHP in Docker |
| Docker Laravel App | Laravel in Docker |
| [Caddy Docker Site](/docs/backend/docker/caddy-docker-site) | Caddy site |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/docker-capsule/container-requirements', label: '📋 Container requirements', description: 'Port binding and process model.'},
    {type: 'link', href: '/docs/products/backend-capsule', label: '📋 Backend Capsule', description: 'Non-Docker language deploys.'},
    {type: 'link', href: '/docs/backend/docker/caddy-docker-site', label: '🛠️ Caddy Docker site', description: 'Deploy a Caddy site in Docker.'},
  ]}
/>
