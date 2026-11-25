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

Frontend Capsules build static sites and SPAs from your Git repository. Each framework guide walks through the capsule wizard with the correct build command and output path for that stack. The same guides apply to [Static](/docs/products/frontend-capsule/static/deploy/) and [Container](/docs/products/frontend-capsule/container/deploy/) hosting.

## Why it matters

A single hosting path covers many frameworks without memorizing per-stack dashboard settings. Teams pick the guide that matches their repo and land on a working deploy with the right build settings.

## How it works

After you create a Frontend Capsule, Code Capsules pulls your code from the Git repository and runs your **Build command**. It then publishes the files from the **Build output directory** and serves them over HTTPS.

Each framework guide sets those two values for a demo repository you can fork, so the build matches the stack. Static and Container hosting use the same build settings.

## When to use it

| Situation | What to expect |
| --- | --- |
| New framework deploy | A framework guide matches the wizard to your stack |
| Static vs container | You choose the hosting mode first; the same framework guide applies to both |
| Custom stack | No guide exists yet, so build settings are set directly on a Frontend Capsule (see [Static deploy](/docs/products/frontend-capsule/static/deploy/)) |

Choose a [Docker Capsule](/docs/products/docker-capsule/git/deploy/) instead when you need a custom image rather than platform builds.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/frontend-capsule/static/deploy', label: '🛠️ Deploy static frontend', description: 'Create a Static Frontend Capsule.'},
    {type: 'link', href: '/docs/products/frontend-capsule/container/deploy', label: '🛠️ Deploy container frontend', description: 'Create a Container Frontend Capsule.'},
    {type: 'link', href: '/docs/frontend/static-html', label: '🛠️ Host static HTML', description: 'Deploy a plain HTML site.'},
  ]}
/>
