---
slug: "/backend"
title: "Backend Hosting Reference"
description: >-
  The backend languages and frameworks Code Capsules has deployment guides for, and where to find each one.
sidebar_label: "Backend"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Backend Hosting

The backend languages and frameworks Code Capsules has deployment guides for, and where to find each one.

## Overview

Language-based apps deploy to a Backend Capsule, which detects the runtime from the repository. Apps with their own `Dockerfile` deploy to a Docker Capsule.

## Languages

| Language | Capsule type | Guides |
|---|---|---|
| [Python](/backend/python) | Backend Capsule | Python, Flask, Django, Discord bot, Telegram bot, WhatsApp bot |
| [Node.js](/backend/node.js) | Backend Capsule | Express.js, Discord bot, Telegram bot, Slack bot |
| [Go](/backend/go) | Backend Capsule | Go, Telegram bot |
| [Java](/backend/java) | Backend Capsule | Java |
| [Docker](/backend/docker) | Docker Capsule | Flask, PHP, Laravel, Caddy |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/backend-capsule', label: '📋 Backend Capsule', description: 'See what a Backend Capsule offers.'},
    {type: 'link', href: '/products/backend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Check the language versions you can deploy.'},
    {type: 'link', href: '/products/docker-capsule', label: '📋 Docker Capsule', description: 'Deploy from your own Dockerfile or image.'},
  ]}
/>
