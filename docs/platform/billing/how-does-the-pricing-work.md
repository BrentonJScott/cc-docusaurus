---
slug: "/platform/billing/how-does-the-pricing-work"
title: "How Does the Pricing Work?"
description: >-
  Hourly billing rates and plan starting prices for Capsules on Code Capsules.
sidebar_label: "Pricing"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Code Capsules Pricing

Hourly billing rates and plan starting prices for Capsules on Code Capsules.

## Overview

Code Capsules bills per Capsule by the hour. You pay only for the hours a Capsule runs. Stopped Capsules are not billed for compute.

## Static frontend hosting

| Plan | Price | Limits |
| --- | --- | --- |
| Free | $0/month | Up to 5 static Frontend Capsules per account, with build size and traffic limits |
| Paid | Varies | Higher traffic and build limits; see [Free and Paid Plans](/products/frontend-capsule/static/plans/) |

## Paid capsule plans

| Plan | Starting price | Notes |
| --- | --- | --- |
| Basic | $3/month | Entry paid plan for Backend, Docker, database, and other paid Capsules |
| Custom | Hourly quote in wizard | Set **CPU**, **RAM**, and **Replica Scale** on the **Plan** step when creating a Capsule |

Custom resource prices update in the wizard as you move the sliders.

## Examples

**One Basic Backend Capsule running full month (730 hours)**: Listed Basic monthly rate applies; hourly rate × hours ≈ monthly display price.

**Static site on Free plan**: $0 while the Capsule stays within Free plan limits.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/products/frontend-capsule/static/plans', label: '📋 Static Free and Paid', description: 'Compare static frontend limits and upgrade.'},
    {type: 'link', href: '/platform/billing/how-do-i-view-my-invoices', label: '🛠️ View invoices', description: 'See charges on your Team.'},
    {type: 'link', href: '/platform/account/how-do-i-add-a-payment-method', label: '🛠️ Add payment method', description: 'Add a card for paid plans.'},
    {type: 'link', href: '/platform/capsules/how-do-i-add-remove-stop-capsules', label: '🛠️ Add a Capsule', description: 'Create a Capsule and see plan pricing in the wizard.'},
  ]}
/>