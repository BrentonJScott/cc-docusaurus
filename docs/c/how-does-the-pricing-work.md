---
slug: "/platform/billing/how-does-the-pricing-work"
title: "Pricing Reference"
description: >-
  Prices, plans, and limits for Code Capsules capsules, static hosting, and
  backups.
sidebar_label: "Pricing"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Pricing

Prices, plans, and limits for Code Capsules capsules, static hosting, and backups.

## Overview

- Code Capsules bills by the hour, so you pay only for what you use.
- Each user can host up to 5 static Frontend Capsules on the **Free** plan.
- Paid capsules start at $3/month. The price goes up as you scale CPU, RAM, or replicas.

## Capsule prices

Starting prices per capsule. Choosing **Custom** when you create a capsule sets the resources, and the price follows them.

| Capsule | Plan | Starting price |
|---|---|---|
| Frontend Capsule (static) | Free | $0/month |
| Frontend Capsule | Basic | $3/month |
| Backend Capsule | Custom | $7.50/month |
| PostgreSQL Database Capsule | Custom, 1 GB | $8/month |

## Static Frontend plans

Limits for static Frontend Capsules on each plan.

| | Free | Paid |
|---|---|---|
| **Price** | $0 | Flat monthly rate per capsule, pro-rated daily |
| **Payment method required** | No | Yes |
| **Number of capsules** | 5 per user | No limit |
| **Build output size** | 30 MB per build | No limit |
| **Traffic** | 50 GB per calendar month | Unmetered |
| **Request rate** | 50 requests per second per visitor, bursts up to 100 | No limit |
| **Builds** | May queue at busy times | Start immediately |
| **HTTPS, SPA routing, caching** | Included | Included |
| **Custom domains** | Included | Included |

- Deleted capsules don't count toward the 5 Free capsules.
- A Free site that reaches its traffic allowance shows a placeholder page until the next calendar month or until it's upgraded to Paid.

## Backups

| Item | Price |
|---|---|
| Backup storage | $0.50/GB |

## Examples

**A static portfolio site on Free with a 20 MB build:** within the 30 MB build and 50 GB traffic limits. Result: $0/month.

**A React frontend on Basic plus a custom Backend Capsule:** $3/month + $7.50/month. Result: from $10.50/month.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/docs/frontend/react', label: '🛠️ Host a React application', description: 'Choose a plan when you create a Frontend Capsule.'},
    {type: 'link', href: '/docs/frontend/angular', label: '🛠️ Host an Angular application', description: 'Deploy a static frontend.'},
    {type: 'link', href: '/docs/tutorials/build-a-mern-job-board', label: '🎓 Build a MERN job board', description: 'An app that uses a Backend and a MongoDB Capsule.'},
  ]}
/>
