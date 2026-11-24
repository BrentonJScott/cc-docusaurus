---
slug: "/frontend"
description: >-
  Framework and static-site deployment guides for Frontend Capsules on Code
  Capsules.
title: "Frontend & Static Site Hosting"
sidebar_label: "Frontend"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Frontend hosting guides

Framework and static-site deployment guides for Frontend Capsules on Code Capsules.

## Overview

Most guides deploy a **Frontend Capsule** with **Static** hosting. The server-rendered Next.js guide deploys a **Backend Capsule** instead.

## Deployment guides

| Guide | Capsule type | Demo repository |
| --- | --- | --- |
| Angular | Frontend (static) | `codecapsules-io/demo-angular` |
| React | Frontend (static) | `codecapsules-io/demo-react` |
| Vue | Frontend (static) | `codecapsules-io/demo-vue` |
| Svelte | Frontend (static) | `codecapsules-io/demo-svelte` |
| Static HTML | Frontend (static) | `codecapsules-io/demo-html` |
| Next.js (server-rendered) | Backend | `codecapsules-io/demo-nextjs` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/frontend/angular', label: '🛠️ Angular', description: 'Deploy an Angular Frontend Capsule.'},
    {type: 'link', href: '/frontend/react', label: '🛠️ React', description: 'Deploy a React Frontend Capsule.'},
    {type: 'link', href: '/frontend/vue', label: '🛠️ Vue', description: 'Deploy a Vue Frontend Capsule.'},
    {type: 'link', href: '/frontend/svelte', label: '🛠️ Svelte', description: 'Deploy a Svelte Frontend Capsule.'},
    {type: 'link', href: '/frontend/static-html', label: '🛠️ Static HTML', description: 'Deploy a static HTML Frontend Capsule.'},
    {type: 'link', href: '/frontend/next.js', label: '🛠️ Next.js', description: 'Deploy a server-rendered Next.js Backend Capsule.'},
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '📋 Static hosting', description: 'Reference for static Frontend Capsule deploy.'},
    {type: 'link', href: '/products/frontend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Build commands and output folders by framework.'},
  ]}
/>