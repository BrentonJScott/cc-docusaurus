---
slug: "/backend/node.js/slack-bot"
title: "Node.js Slack Bots on Code Capsules Explained"
description: >-
  How a Node.js Slack bot on Code Capsules uses slash commands, OAuth tokens,
  and environment variables to post to a workspace.
sidebar_label: "Slack Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Node.js Slack bots on Code Capsules

How a Node.js Slack bot on Code Capsules uses slash commands, OAuth tokens, and environment variables to post to a workspace.

## Overview

The `codecapsules-io/slackbot` demo is a Backend Capsule that receives Slack slash commands over HTTPS and posts responses to a channel. Slack signs each request so the bot can verify it came from your workspace.

## Why it matters

Slack bots need a always-on HTTPS endpoint for slash commands and event subscriptions. A Backend Capsule provides that URL without running your own server or managing TLS certificates.

## How it works

You register a Slack app with a slash command whose **Request URL** points at your capsule public URL plus the bot route (for example `/slack/command/stats`). The bot reads `SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID`, and `SLACK_SIGNING_SECRET` from **Config** environment variables to authenticate and post messages.

When the capsule starts, the demo can announce itself in the channel. Restarting the capsule triggers another message, and `/stats` returns runtime information from the app.

## When to use it

| Factor | Backend Capsule Slack bot | Serverless function |
| --- | --- | --- |
| Always on | Capsule runs continuously | Invoked per request |
| Secrets | **Config** environment variables | Platform secret store |
| Best for | Long-lived bots and cron-style posts | Sparse command traffic |

Use a Backend Capsule when the bot must stay online for slash commands or scheduled posts. For deployment steps, fork `codecapsules-io/slackbot` and follow the same Backend Capsule flow as the [Express.js](/backend/node.js/express.js) guide, then add the Slack app credentials on **Config**.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/backend/node.js/express.js', label: '🛠️ Express.js', description: 'Deploy the Node.js Backend Capsule baseline.'},
    {type: 'link', href: '/backend/node.js', label: '📋 Node.js hosting', description: 'Other Node.js deployment guides.'},
    {type: 'link', href: '/backend', label: '📋 Backend hosting', description: 'Compare backend languages on Code Capsules.'},
  ]}
/>