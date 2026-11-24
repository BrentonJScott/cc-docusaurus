---
slug: "/backend/go/go-telegram-bot"
title: "How to Host a Go Telegram Bot"
description: >-
  Deploy the Go Telegram echo bot to a Backend Capsule and see it reply in
  Telegram.
sidebar_label: "Go Telegram Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Go Telegram Bot

Deploy the Go Telegram echo bot to a Backend Capsule and see it reply in Telegram.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork go-telegram-echobot', description: 'Fork codecapsules-io/go-telegram-echobot on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so the fork appears in the wizard.'},
    {type: 'link', href: '/docs/shared/create-a-telegram-bot', label: '🤖 A Telegram bot', description: 'Register a bot with BotFather and copy its token.'},
  ]}
/>

## Deploy your Go Telegram bot

1. **Start a Backend Capsule**

   In your Space, click **+** and select **New Capsule**.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose a payment plan. Click **Next**.

4. **Connect the repository**

   On **Configure**, select `codecapsules-io/go-telegram-echobot` and branch `main`. Click **Next**.

5. **Set the run command**

   On **Build and Deploy Settings**, leave **Run Command** blank. Click **Create Capsule**.

6. **Wait for the build**

   On the **Deploy** tab, open **Builds**. The first build runs when the capsule is created.

7. **Add environment variables**

   On **Config**, under **Environment Variables**, add `BOT_TOKEN` with the token from BotFather and `URL` with the public URL from **Details** (it must end with `/`). Click **Save**.

8. **Restart the capsule**

   Turn the capsule toggle off and on again.

9. **Set the webhook**

   Open the public URL with `/setwebhook` appended. The page shows `webhook setup ok`.

10. **Chat with the bot**

    In Telegram, open your bot and send `/start`, then any message. The bot echoes your message.

## Troubleshooting

<details>
<summary>The bot does not reply in Telegram</summary>

The webhook is invalid. Confirm `URL` matches the public URL and ends in `/`, then restart the capsule and open `/setwebhook` again.

</details>