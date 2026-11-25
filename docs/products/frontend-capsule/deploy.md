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

Frontend Capsules build static sites and SPAs from your Git repository. Each linked framework guide walks through the capsule wizard with the correct build command and output path for that stack. The same build settings apply to [Static](/docs/products/frontend-capsule/static/deploy/) and [Container](/docs/products/frontend-capsule/container/deploy/) hosting.

## Why it matters

A single hosting path covers many frameworks without memorizing per-stack dashboard settings. Teams pick the guide that matches their repo and land on a working deploy with the right build settings.

## How it works

After you create a Frontend Capsule, Code Capsules pulls your code from the Git repository and runs your **Build command**. It then publishes the files from the **Build output directory** and serves them over HTTPS.

Each framework guide sets those two values for a demo repository you can fork, so the build matches the stack. Static and Container hosting use the same build settings.

## When to use it

| Situation | What to expect |
| --- | --- |
| New framework deploy | Open the framework guide for React, Angular, Vue, Next.js, Svelte, or static HTML |
| Static vs container | You choose the hosting mode first in the static or container deploy how-to |
| Custom stack | No framework guide matches; use [Deploy a Static Frontend](/docs/products/frontend-capsule/static/deploy/) for custom build settings |

Choose a [Docker Capsule](/docs/products/docker-capsule/git/deploy/) instead when you need a custom image rather than platform builds.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/frontend/react', label: '🛠️ Host React', description: 'Deploy the React demo repository.'},
    {type: 'link', href: '/docs/frontend/angular', label: '🛠️ Host Angular', description: 'Deploy the Angular demo repository.'},
    {type: 'link', href: '/docs/frontend/vue', label: '🛠️ Host Vue', description: 'Deploy the Vue demo repository.'},
    {type: 'link', href: '/docs/frontend/next.js', label: '🛠️ Host Next.js', description: 'Deploy the Next.js demo repository.'},
    {type: 'link', href: '/docs/frontend/svelte', label: '🛠️ Host Svelte', description: 'Deploy the Svelte demo repository.'},
  ]}
/>

For static HTML, see [Host a Static HTML Website](/docs/frontend/static-html). For hosting mode, see [Deploy a Static Frontend](/docs/products/frontend-capsule/static/deploy/) and [Deploy a Container Frontend](/docs/products/frontend-capsule/container/deploy/).