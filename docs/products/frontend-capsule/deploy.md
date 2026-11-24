---
slug: "/products/frontend-capsule/deploy"
title: "Frontend Framework Deployment Guides"
description: >-
  Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules.
sidebar_label: "Framework Guides"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your Frontend App


Frontend Capsules build static sites and SPAs from your repository. The guides below work with both [Static](/products/frontend-capsule/static/deploy/) and [Container](/products/frontend-capsule/container/deploy/) hosting. See [Supported Runtimes](/products/frontend-capsule/supported-runtimes/) for platform versions, framework build settings, and Node.js pinning.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Frontend Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## JavaScript Frameworks

- [React](/frontend/react/)
- [Angular](/frontend/angular/)
- [Vue](/frontend/vue/)

## Modern Frontend Technologies

- [Next.js](/frontend/next.js/)
- [Svelte](/frontend/svelte/)

## Static Sites

- [Static HTML](/frontend/static-html/)

## Deployment Guides

- [All Frontend Deployment Guides](/frontend/)
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
