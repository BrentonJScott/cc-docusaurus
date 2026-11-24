---
slug: "/products/frontend-capsule/custom-domains"
title: "How to Add a Custom Domain to a Frontend App"
description: >-
  Add a custom domain to your Frontend Capsule on Code Capsules. Configure DNS records to serve your site from your own domain.
sidebar_label: "Custom Domains"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Put Your Frontend on Your Own Domain

Serve your Frontend Capsule from a domain you own instead of the default `capsulename.*.codecapsules.co.za` address.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/frontend-capsule/static/deploy', label: '🛠️ Frontend Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Add your custom domain

1. **Open Domains**

   Open the Frontend Capsule and select the **Domains** tab.

2. **Add the root domain**

   Click **+**, then **Add Custom Domain**. Enter the domain (for example `example.com`) and click **Create Domain**. Copy the **Static IP address** shown.

3. **Create an A record**

   At your registrar, add an **A** record for `@` pointing to the static IP from Code Capsules.

4. **Add a subdomain**

   To add `app.example.com`, create another custom domain entry for the subdomain. At your registrar, add a **CNAME** from the subdomain to the root domain that already has the A record.

5. **Remove a domain**

   On **Domains**, click the trash icon next to a domain or subdomain to remove it.

Code Capsules provisions HTTPS for configured domains. Use registrar docs if DNS propagation is slow.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>HTTPS does not activate</summary>

Confirm the A or CNAME record points to the values from the **Domains** tab and allow time for DNS propagation.

</details>