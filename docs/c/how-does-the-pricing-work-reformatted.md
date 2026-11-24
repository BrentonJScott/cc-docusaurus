---
slug: "/platform/billing/how-does-the-pricing-work"
title: "Pricing Reference"
description: >-
  Prices, plans, and limits for Code Capsules capsules, static hosting, and
  backups.
sidebar_label: "Pricing"
doc_version: drift
---

# Pricing

Prices, plans, and limits for Code Capsules capsules, static hosting, and backups.

## Billing model

| Attribute | Value |
|---|---|
| Billing interval | Hourly |
| Starting price for a paid capsule | $3/month |
| What raises the price | More CPU, RAM, or replicas |
| Free static Frontend Capsules | Up to 5 per user |

## Capsule prices

Starting price per capsule. When you choose **Custom** while creating a capsule, the resources you set determine the price.

| Capsule | Plan | Starting price |
|---|---|---|
| Frontend Capsule (static) | Free | $0/month |
| Frontend Capsule | Basic | $3/month |
| Backend Capsule | Custom | $7.50/month |
| PostgreSQL Database Capsule | Custom, 1 GB | $8/month |

## Static Frontend plans

Limits for static Frontend Capsules, by plan.

| Limit | Free | Paid |
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

Notes:

- Deleted capsules don't count toward the 5 Free capsules.
- A Free site that reaches its traffic allowance shows a placeholder page until the next calendar month or until you upgrade it to Paid.

## Backup prices

| Item | Price |
|---|---|
| Backup storage | $0.50/GB |

## Pricing examples

| Setup | Calculation | Monthly cost |
|---|---|---|
| Static portfolio site on Free, 20 MB build | Within the 30 MB build and 50 GB traffic limits | $0 |
| React frontend on Basic plus a custom Backend Capsule | $3 + $7.50 | From $10.50 |

## Related

- [Host a React application](/docs/frontend/react): choose a plan when you create a Frontend Capsule.
- [Host an Angular application](/docs/frontend/angular): deploy a static frontend.
- [Build a MERN job board](/docs/tutorials/build-a-mern-job-board): an app that uses a Backend and a MongoDB Capsule.
