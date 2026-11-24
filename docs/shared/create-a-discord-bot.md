---
slug: "/shared/create-a-discord-bot"
title: "How to Create a Discord Bot"
description: >-
  Register a Discord bot, copy its token, and add it to your own Discord server.
sidebar_label: "Create a Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Create a Discord Bot

Register a Discord bot, copy its token, and add it to your own Discord server.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: 'https://discord.com/register', label: '💻 A Discord account', description: 'Sign up for Discord to own the bot.'},
  ]}
/>

## Create your Discord bot

1. **Create a server**

   In Discord, click **+** in the left toolbar and create a server for the bot to join.

2. **Create an application**

   Open the [Discord Developer Portal applications page](https://discord.com/developers/applications), click **New Application**, enter a name, and click **Create**.

3. **Add the bot and enable message content**

   On the **Bot** tab, click **Add Bot**. Under **Privileged Gateway Intents**, enable **Message Content Intent** and click **Save Changes**.

4. **Copy the token**

   On the **Bot** tab, click **Reset Token**, confirm, and click **Copy**. Keep the token: guides ask you to paste it into the `TOKEN` environment variable.

5. **Generate the invite URL**

   On the **OAuth2** > **URL Generator** tab, select **bot** under **Scopes**, then select every text permission under **Bot Permissions**. Click **Copy** under **Generated URL**.

6. **Add the bot to your server**

   Paste the URL into a new browser tab, select the server you created, and click **Continue**. The bot appears in the server's member list.

## Troubleshooting

<details>
<summary>The bot joins the server but never sees message text</summary>

**Message Content Intent** is off. Enable it on the **Bot** tab and click **Save Changes**.

</details>
