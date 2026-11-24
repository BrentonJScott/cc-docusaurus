---
slug: "/products/docker-capsule/deploy"
title: "How to Deploy a Docker Capsule"
description: >-
  Choose Git or an existing image to deploy a Docker Capsule.
sidebar_label: "Deploy"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy a Docker Capsule

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so repos appear in the wizard.'},
  ]}
/>

Choose Git or an existing image to deploy a Docker Capsule.

## Overview

Docker Capsules deploy from a **Git repository** with a `Dockerfile` or from a **public container image**.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/docker-capsule/git/deploy', label: '🛠️ Deploy from Git', description: 'Build from a Dockerfile in your repo.'},
    {type: 'link', href: '/products/docker-capsule/image/deploy', label: '🛠️ Deploy from image', description: 'Pull a public container image.'},
    {type: 'link', href: '/products/docker-capsule/index', label: '💡 Docker overview', description: 'When to use Docker Capsules.'},
  ]}
/>

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>

