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

Every guide except Next.js deploys a **Frontend Capsule** with **Static** hosting. The server-rendered Next.js guide deploys a **Backend Capsule**.

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
    {type: 'link', href: '/docs/frontend/angular', label: '🛠️ Angular', description: 'Deploy an Angular Frontend Capsule.'},
    {type: 'link', href: '/docs/frontend/vue', label: '🛠️ Vue', description: 'Deploy a Vue Frontend Capsule.'},
    {type: 'link', href: '/docs/products/frontend-capsule', label: '📋 Frontend Capsule', description: 'What a Frontend Capsule hosts.'},
    {type: 'link', href: '/docs/products/frontend-capsule/static/plans', label: '📋 Static hosting plans', description: 'Free and Paid plan limits for static hosting.'},
  ]}
/>
