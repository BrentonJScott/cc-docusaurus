---
slug: "/shared/set-up-twilio-whatsapp-sandbox"
title: "How to Set Up a Twilio WhatsApp Sandbox"
description: >-
  Create a Twilio account and join its WhatsApp sandbox from your phone so you can test a WhatsApp bot.
sidebar_label: "Twilio WhatsApp Sandbox"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Set Up a Twilio WhatsApp Sandbox

Create a Twilio account and join its WhatsApp sandbox from your phone so you can test a WhatsApp bot.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: 'https://www.twilio.com/try-twilio', label: '💻 A Twilio account', description: 'Sign up for Twilio to use its WhatsApp sandbox.'},
  ]}
/>

You also need WhatsApp installed on your phone.

## Set up your sandbox

1. **Open the WhatsApp sandbox**

   Log in to Twilio and open the WhatsApp sandbox page in the console at `https://www.twilio.com/console/sms/whatsapp/sandbox`.

2. **Join the sandbox**

   Under **Sandbox Participants**, find the sandbox WhatsApp number and the join code that starts with `join`. Send the join code from your phone to that number. Twilio replies to confirm you've joined the sandbox.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Twilio doesn't reply to the join code</summary>

The code was sent to the wrong number or with a typo. Copy the code exactly from Sandbox Participants and send it to the sandbox number shown there.

</details>
