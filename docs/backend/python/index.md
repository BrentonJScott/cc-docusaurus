---
slug: "/backend/python"
title: "Python Application Hosting Reference"
description: >-
  The Python apps and bots you can deploy on Code Capsules, with the demo repo and guide for each.
sidebar_label: "Python"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Python Application Hosting

The Python apps and bots you can deploy on Code Capsules, with the demo repo and guide for each.

## Overview

Every Python app on this page deploys to a Backend Capsule from a GitHub repository.

## Web apps

| App | Demo repo | Branch | Guide |
|---|---|---|---|
| Python | `codecapsules-io/demo-python` | `master` | [Host a Python application](/docs/backend/python/python) |
| Flask | `codecapsules-io/demo-python` | `master` | [Host a Flask application](/docs/backend/python/flask) |
| Django | `codecapsules-io/demo-django` | `master` | [Host a Django application](/docs/backend/python/django) |

## Bots

| App | Demo repo | Branch | Guide |
|---|---|---|---|
| Discord bot | `codecapsules-io/python-discord-echobot` | `main` | [Host a Python Discord bot](/docs/backend/python/python-discord-bot) |
| Telegram bot | `codecapsules-io/python-telegram-echobot` | `main` | [Host a Python Telegram bot](/docs/backend/python/python-telegram-bot) |
| WhatsApp bot | `codecapsules-io/whatsapp-echobot` | `main` | [Host a Python WhatsApp bot](/docs/backend/python/whatsapp-bot) |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/products/backend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Check which Python versions are supported.'},
    {type: 'link', href: '/docs/products/backend-capsule/add-procfile', label: '🛠️ Add a Procfile', description: 'Set the command your app starts with.'},
    {type: 'link', href: '/docs/backend', label: '📋 Backend hosting', description: 'Find guides for other languages.'},
  ]}
/>
