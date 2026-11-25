---
slug: "/full-stack/next.js/next.js-+-express.js"
title: "Next.js with Express.js Explained"
description: >-
  How a combined Next.js and Express.js app fits on Code Capsules and when to
  deploy it as one Backend Capsule.
sidebar_label: "Next.js + Express"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Next.js with Express.js on Code Capsules

How a combined Next.js and Express.js app fits on Code Capsules and when to deploy it as one Backend Capsule.

## Overview

The `codecapsules-io/nextjs-expressjs-demo` repository runs Next.js for UI routes and Express for API routes in a single Node process. One **Backend Capsule** builds and runs the whole app from GitHub.

## Why it matters

Splitting the API into Express while keeping Next.js for rendering lets you reuse existing Express middleware and routers without adopting Next.js API routes for every endpoint.

## How it works

Code Capsules clones your fork, installs dependencies, and runs the start script from the repository. The capsule exposes one public URL. Express listens on the same port Next.js uses in production, so the platform routes HTTPS traffic to both layers.

Environment variables and builds follow the standard Backend Capsule flow on the **Deploy** and **Config** tabs.

## When to use it

| Factor | Next.js + Express (one capsule) | Next.js API routes only |
| --- | --- | --- |
| Code layout | Separate Express routers | Handlers under `pages/api` or App Router |
| Migration | Fits teams with an existing Express API | Fits greenfield Next.js projects |
| Capsules | One Backend Capsule | One Backend Capsule |

Use this pattern when you already have Express routes you want to keep. Use a [Frontend Capsule](/docs/products/frontend-capsule) when you only need static or server-rendered Next.js without a custom Express server.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/full-stack/next.js', label: '📋 Next.js full-stack', description: 'All full-stack Next.js guides and demo repos.'},
    {type: 'link', href: '/docs/products/backend-capsule', label: '💡 Backend Capsule', description: 'How Backend Capsules build and run your app.'},
    {type: 'link', href: '/docs/products/frontend-capsule', label: '💡 Frontend Capsule', description: 'When static hosting fits better.'},
  ]}
/>
