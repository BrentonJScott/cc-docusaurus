---
slug: "/platform/what-is-code-capsules"
title: "What Is Code Capsules? PaaS Overview"
description: >-
  Code Capsules is a platform-as-a-service for deploying apps, databases, and agents from Git.
sidebar_label: "What is Code Capsules?"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# What Is Code Capsules?

Code Capsules is a platform-as-a-service for deploying apps, databases, and agents from Git.

## Overview

Code Capsules hosts frontend and backend applications, Docker workloads, managed databases, WordPress, storage, and agent Capsules. You push to Git; the platform builds and deploys.

## Why it matters

You avoid stitching together separate hosting, database, and CI/CD tools. Teams, Spaces, and Capsules give one place to collaborate, pay, and ship.

## How it works

You connect GitHub, create Capsules in a Space, and configure builds, environment variables, domains, and scale in the dashboard. Static frontends can run on a free tier; paid Capsules bill hourly.

## When to use it

| You need | Code Capsules fits when |
| --- | --- |
| Fast production deploy from Git | You want build + host in one product |
| Multiple services per product | You will use several Capsules in one Space |
| Managed database | You choose a database Capsule instead of external DBaaS |

Use other tools when you must run entirely on your own Kubernetes or on-prem hardware without the hosted platform.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/platform/platform', label: '💡 Platform hierarchy', description: 'Teams, Spaces, and Capsules.'},
    {type: 'link', href: '/frontend/index', label: '📋 Frontend hosting', description: 'Deploy React, Vue, and more.'},
    {type: 'link', href: '/backend/index', label: '📋 Backend hosting', description: 'Deploy APIs and workers.'},
    {type: 'link', href: '/docs/shared/create-an-account', label: '🛠️ Create an account', description: 'Sign up to use the platform.'},
  ]}
/>