---
slug: "/backend/python/whatsapp-bot"
title: "How to Host a Python WhatsApp Bot"
description: >-
  Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp.
sidebar_label: "WhatsApp Bot"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your WhatsApp Bot Application

Deploy the WhatsApp echo bot to a Backend Capsule, connect it to Twilio, and see the bot reply in WhatsApp.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork whatsapp-echobot', description: 'Fork codecapsules-io/whatsapp-echobot to your GitHub account.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/connect-github', label: '🔌 GitHub connected', description: 'Give Code Capsules access to your whatsapp-echobot fork.'},
    {type: 'link', href: '/docs/shared/set-up-twilio-whatsapp-sandbox', label: '💻 Twilio WhatsApp sandbox', description: 'Create a Twilio account and join its WhatsApp sandbox.'},
  ]}
/>

## Deploy your WhatsApp bot

1. **Start a Backend Capsule**

   In your Space, click **+** to add a new capsule.

2. **Choose the capsule type, Team, and Space**

   On **Capsule Details**, choose **Backend Capsule**, your Team, and your Space. Click **Next**.

3. **Choose the plan**

   On **Plan**, choose **Basic**. Click **Next**.

4. **Connect the repository**

   On **Source Code**, select your `whatsapp-echobot` fork as the **Repository** and `main` as the **Branch**. Click **Next**.

5. **Create the capsule**

   On **Build and Deploy Settings**, leave **Run Command** blank. Click **Create Capsule**.

6. **Copy the capsule URL**

   When the build finishes, copy the domain under **URL** on the capsule's **Details** tab.

7. **Point Twilio at the bot**

   In the Twilio console, open the WhatsApp sandbox settings. In **When a Message Comes In**, paste the capsule domain followed by `/bot`, set the method to `HTTP POST`, and click **Save**.

8. **Message the bot**

   From the phone that joined the sandbox, send any message to the sandbox WhatsApp number. You see the bot reply with the same message.

## Troubleshooting

<details>
<summary>The bot doesn't reply to your messages</summary>

Twilio can't reach the bot. Check that the webhook URL ends in `/bot`, the method is `HTTP POST`, and the capsule's build has finished.

</details>

<details>
<summary>Twilio replies that you aren't a sandbox participant</summary>

Your phone hasn't joined the sandbox, or the sandbox session expired. Send the join code to the sandbox number again.

</details>
