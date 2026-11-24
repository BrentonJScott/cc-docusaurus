---
slug: "/backend/node.js"
title: "Node.js Application Hosting Reference"
description: >-
  The Node.js deployment guides for Code Capsules, with the demo repository each one deploys.
sidebar_label: "Node.js"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Node.js Application Hosting

The Node.js deployment guides for Code Capsules, with the demo repository each one deploys.

## Overview

Every guide on this page deploys a Node.js app to a Backend Capsule from a forked GitHub demo repository.

## Guides

| Guide | Deploys | Demo repository | Branch |
|---|---|---|---|
| [Express.js](/docs/backend/node.js/express.js) | Express.js web app | `codecapsules-io/demo-express-js` | `master` |
| [Node.js Discord Bot](/docs/backend/node.js/node.js-discord-bot) | Discord echo bot | `codecapsules-io/nodejs-discord-echobot` | `main` |
| [Node.js Telegram Bot](/docs/backend/node.js/node.js-telegram-bot) | Telegram echo bot | `codecapsules-io/nodejs-telegram-echobot` | `main` |
| [Slack Bot](/docs/backend/node.js/slack-bot) | Slack bot | `codecapsules-io/slackbot` | `main` |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/backend', label: '📋 Backend hosting', description: 'Find guides for other backend languages.'},
    {type: 'link', href: '/docs/products/backend-capsule/supported-runtimes', label: '📋 Supported runtimes', description: 'Check which Node.js versions are supported.'},
    {type: 'link', href: '/docs/database/mongodb/express-+-mongodb', label: '🛠️ Express + MongoDB', description: 'Deploy Express.js with a MongoDB database.'},
  ]}
/>
