---
slug: "/backend/python/python-telegram-bot"
title: "How to Host a Python Telegram Bot"
description: >-
  Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram.
sidebar_label: "Python Telegram Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Python Telegram Bot

Deploy the Python Telegram echo bot to a Backend Capsule and see it reply in Telegram.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork python-telegram-echobot', description: 'Fork codecapsules-io/python-telegram-echobot to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your python-telegram-echobot fork.'},
    {type: 'link', href: '/docs/shared/create-a-telegram-bot', label: '🤖 A Telegram bot', description: 'Register a bot with BotFather and copy its token.'},
  ]}
/>

## Deploy your Python Telegram bot

1. **Start a Backend Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `python-telegram-echobot` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Set the run command**

   On **Build and Deploy Settings**, leave **Run Command** blank.

6. **Create the capsule**

   Click **Create Capsule**. Open the **Builds** tab and wait for the first build to finish.

7. **Add the environment variables**

   On the **Config** tab, under **Environment Variables**, add:
   - `BOT_TOKEN`: the access token BotFather gave you.
   - `URL`: the capsule's **Live Website** address. It must end in `/`.

   Click **Save**.

8. **Restart the capsule**

   Turn the capsule's toggle off and on again, and wait for it to start.

9. **Set the webhook**

   Open the capsule's **Live Website** address with `/setwebhook` added to the end. The page shows `webhook setup ok`.

10. **Chat with the bot**

    In Telegram, search for your bot's username, start a chat, and send `/start`, then any message. The bot replies with the same message.

## Troubleshooting

<details>
<summary>The Repository dropdown doesn't list `python-telegram-echobot`</summary>

Code Capsules doesn't have access to your fork. Add the repository to the Code Capsules GitHub app, then reopen the capsule wizard.

</details>

<details>
<summary>The bot doesn't reply in Telegram</summary>

The webhook isn't valid. Check that `URL` matches the **Live Website** address and ends in `/`, then restart the capsule.

</details>
