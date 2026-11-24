---
slug: "/backend/node.js/node.js-discord-bot"
title: "How to Host a Node.js Discord Bot"
description: >-
  Deploy the Node.js Discord echo bot to a Backend Capsule and see it reply in Discord.
sidebar_label: "Node.js Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Node.js Discord Bot

Deploy the Node.js Discord echo bot to a Backend Capsule and see it reply in Discord.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork nodejs-discord-echobot', description: 'Fork codecapsules-io/nodejs-discord-echobot to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your nodejs-discord-echobot fork.'},
    {type: 'link', href: '/docs/shared/create-a-discord-bot', label: '🤖 A Discord bot', description: 'Create a bot, copy its token, and add it to your server.'},
  ]}
/>

## Deploy your Node.js Discord bot

1. **Start a Backend Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `nodejs-discord-echobot` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Set the run command**

   On **Build and Deploy Settings**, leave **Run Command** blank.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and wait for the first build to finish.

7. **Add the bot token**

   On the **Config** tab, under **Environment Variables**, add `TOKEN` with your Discord bot's token as the value. Click **Save**.

8. **Restart the capsule**

   Turn the capsule's toggle off and on again, and wait for it to start.

9. **Chat with the bot**

   In your Discord server, send a message in any channel the bot can see. The bot replies with the same message.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The Repository dropdown doesn't list `nodejs-discord-echobot`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The bot is online but doesn't reply to messages</summary>

The bot can't read message text. In the Discord Developer Portal, enable **Message Content Intent** on the **Bot** tab, then restart the capsule.

</details>

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The bot stays offline in the member list</summary>

The `TOKEN` value is wrong or was reset. Copy a new token from the **Bot** tab, update `TOKEN` on the **Config** tab, and restart the capsule.

</details>
