---
slug: "/products/frontend-capsule/deploy"
title: "Frontend Framework Deployment Guides"
description: >-
  Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules.
sidebar_label: "Framework Guides"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Frontend Framework Deployment Guides

Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules.

## Overview

Frontend Capsules build static sites and SPAs from your Git repository. Each framework guide walks through the capsule wizard with the correct build command and output path for that stack. The same guides apply to [Static](/products/frontend-capsule/static/deploy/) and [Container](/products/frontend-capsule/container/deploy/) hosting.

## Why it matters

A single hosting path covers many frameworks without memorizing per-stack dashboard settings. Teams pick the guide that matches their repo and land on a working deploy with the right build settings.

## How it works

After you create a Frontend Capsule, Code Capsules runs your **Build command**, publishes files from the **Build output directory**, and serves them over HTTPS. Framework-specific guides set those values for demo repositories you can fork.

| Category | Guide | Deploys |
| --- | --- | --- |
| JavaScript frameworks | [React](/frontend/react/) | A React SPA |
| | [Angular](/frontend/angular/) | An Angular app |
| | [Vue](/frontend/vue/) | A Vue app |
| Modern frontends | [Next.js](/frontend/next.js/) | A Next.js app |
| | [Svelte](/frontend/svelte/) | A Svelte app |
| Static sites | [Static HTML](/frontend/static-html/) | Plain HTML assets |
| All guides | [Frontend hosting index](/frontend/) | Full guide list |

See [Supported Runtimes](/products/frontend-capsule/supported-runtimes/) for Node.js versions and build tooling on Container hosting.

## When to use it

| Situation | Use these guides when |
| --- | --- |
| New framework deploy | You want wizard steps matched to the framework |
| Static vs container | You already chose hosting mode; follow the same framework guide |
| Custom stack | No guide exists yet; start from [Static deploy](/products/frontend-capsule/static/deploy/) and set build settings manually |

Use [Docker Capsule](/products/docker-capsule/) guides when you need a custom image instead of platform builds.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Deploy static frontend', description: 'Create a Static Frontend Capsule.'},
    {type: 'link', href: '/products/frontend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Node and build versions.'},
    {type: 'link', href: '/frontend', label: '📋 All frontend guides', description: 'Browse every framework guide.'},
    {type: 'link', href: '/products/frontend-capsule/configure', label: '⚙️ Configure frontend', description: 'Build paths and environment variables.'},
  ]}
/>