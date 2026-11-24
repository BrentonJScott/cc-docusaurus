---
slug: "/platform/capsules/how-to-add-a-custom-domain"
title: "Add a Custom Domain to a Capsule"
description: >-
  Add a root domain and a subdomain to a Capsule. When you finish, both appear
  on the Domains tab.
sidebar_label: "Custom domains"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Add a Custom Domain to a Capsule

Add a root domain and a subdomain to a Capsule. When you finish, both appear on the **Domains** tab.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/platform/capsules/how-do-i-add-remove-stop-capsules', label: '🛠️ A running Capsule', description: 'Deploy a Capsule with a default URL.'},
  ]}
/>

## Add your domains

1. **Open Domains**

   Open the Capsule and select the **Domains** tab. Copy the **Static IP address** shown there.

2. **Add a root domain**

   Click **Add Custom Domain**. Enter only the root domain, for example `example.com` (no `www` or path). Click **Create Domain**. The root domain appears in the domain list.

3. **Point DNS at Code Capsules**

   At your registrar, add an **A** record for `@` pointing to the static IP address you copied. Wait for DNS to propagate (often up to several hours).

4. **Add a subdomain**

   Click **Add Custom Domain** again. Enter the subdomain, for example `app.example.com`. Click **Create Domain**.

5. **Add a CNAME for the subdomain**

   At your registrar, add a **CNAME** for the subdomain host (for example `app`) pointing at your root domain `example.com`.

6. **Confirm listing**

   On the **Domains** tab, the root domain and subdomain both appear in the panel when DNS is correct.

## Troubleshooting

<details>
<summary>The domain does not verify after several hours</summary>

Confirm the A record uses the static IP from **Domains**, not the Capsule default URL. Subdomains need a CNAME to the root domain that already has the A record.

</details>

<details>
<summary>You cannot add a second root domain</summary>

Each Capsule supports one root domain. Add extra hosts as subdomains under that root.

</details>