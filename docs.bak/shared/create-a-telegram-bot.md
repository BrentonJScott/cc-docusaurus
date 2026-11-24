---
slug: "/shared/create-a-telegram-bot"
title: "How to Create a Telegram Bot"
description: >-
  Register a Telegram bot with BotFather and copy its access token.
sidebar_label: "Create a Telegram Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Create a Telegram Bot

Register a Telegram bot with BotFather and copy its access token.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: 'https://telegram.org/', label: '💻 A Telegram account', description: 'Install Telegram and sign up to own the bot.'},
  ]}
/>

## Create your Telegram bot

1. **Open BotFather**

   In Telegram, search for `BotFather` and start a chat with it. Send `/start`.

2. **Register the bot**

   Send `/newbot`. Enter a name for the bot, then a username that ends in `bot`.

3. **Copy the token**

   BotFather replies with the bot's access token. Keep it: guides ask you to paste it into the `BOT_TOKEN` environment variable. Search for the bot's username and you see the new bot.

## Troubleshooting

<details>
<summary>BotFather says the username is already taken or invalid</summary>

Bot usernames must be unique and end in `bot`. Choose another username that ends in `bot`.

</details>
