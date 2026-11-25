---
slug: "/shared/create-a-discord-bot"
title: "How to Create a Discord Bot"
description: >-
  Create a Discord bot, copy its token, and invite it to your server.
sidebar_label: "Create a Discord Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Create a Discord Bot

Create a Discord bot, copy its token, and invite it to your server.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: 'https://discord.com/register', label: '💻 A Discord account', description: 'Sign up for Discord to own the bot.'},
  ]}
/>

## Create your Discord bot

1. **Create the application**

   In the Discord Developer Portal, create a new application.

2. **Enable Message Content Intent**

   On the **Bot** tab, enable **Message Content Intent**.

3. **Copy the token**

   On the **Bot** tab, copy the bot token and keep it for your capsule.

4. **Invite the bot**

   Invite the bot to your Discord server.

## Troubleshooting

<details>
<summary>The bot can't read message text</summary>

**Message Content Intent** is off. Enable it on the **Bot** tab, then restart the capsule.

</details>
