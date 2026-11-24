---
slug: "/platform/capsules/what-is-a-capsule"
title: "Hosting Environments (Containers) Explained"
description: >-
  A Capsule is the unit that builds, runs, and serves your app or database on Code Capsules.
sidebar_label: "What Is a Capsule?"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Capsules on Code Capsules

A Capsule is the unit that builds, runs, and serves your app or database on Code Capsules.

## Overview

A **Capsule** connects to your code or image, builds when needed, and serves HTTPS traffic. Capsule types include Frontend, Backend, Docker, database, WordPress, Agent, and others.

## Why it matters

Capsules are where compute and storage run. Teams and Spaces organize work; Capsules do the deployment, scaling, and billing per service.

## How it works

Most Git-backed Capsules build on push and redeploy automatically. You configure build commands, environment variables, domains, and scale on each Capsule's tabs. Docker image Capsules pull and run a container instead of building from Git.

Each Capsule gets a default HTTPS URL. You can add custom domains on the **Domains** tab.

## When to use it

| Need | Capsule type |
| --- | --- |
| Static or SPA frontend | Frontend Capsule (static hosting) |
| API or server-rendered app | Backend or Docker Capsule |
| Managed database | Database Capsule |
| Always-on container image | Docker Capsule from image |

Split frontends and backends into separate Capsules when they scale or deploy on different schedules.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/platform/capsules/how-do-i-add-remove-stop-capsules', label: '🛠️ Add or remove Capsules', description: 'Create, stop, and delete Capsules.'},
    {type: 'link', href: '/platform/capsules/health-checks', label: '🛠️ Health checks', description: 'Keep traffic on healthy replicas.'},
    {type: 'link', href: '/products/frontend-capsule/index', label: '📋 Frontend Capsules', description: 'Static and container frontend hosting.'},
    {type: 'link', href: '/products/backend-capsule/index', label: '📋 Backend Capsules', description: 'Long-running server processes.'},
  ]}
/>