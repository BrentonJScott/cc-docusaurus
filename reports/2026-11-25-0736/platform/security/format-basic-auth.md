# Format report — basic-auth

**Run:** 2026-11-25-0736  
**Doc file:** `docs/platform/security/basic-auth.md`  
**Doc type:** How-to guide  
**Template:** `formats/how_to_format.md`  
**Feature:** Add HTTP Basic Authentication  
**Goal:** Expect the capsule URL to ask for the credentials shown in the dashboard.  
**Format check:** fail

## Content list

1. `explain` (title area) — Enable HTTP Basic authentication on a Capsule's public URL. When you finish, the browser prompts for the credentials shown in the dashboard.
2. `prerequisite` (`## Prerequisites`) — Code Capsules account (card).
3. `prerequisite` (`## Prerequisites`) — A running Capsule (card).
4. `goal` (`## Protect your Capsule`) — Open the Capsule and select the **Domains** tab.
5. `goal` (`## Protect your Capsule`) — In **Basic Auth**, toggle **Basic Http authentication** to **Enabled**.
6. `goal` (`## Protect your Capsule`) — Show credentials, note username and password, open Capsule URL in private window; browser asks for credentials.
7. `explain` (`## Troubleshooting`) — Health checks / `/health` note.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Goal steps are under `## Protect your Capsule`; last step states the credential prompt on the Capsule URL. |
| Check 2: Prerequisites | fail | “A running Capsule” links to `/docs/products/backend-capsule`, not a page under `docs/shared/`. |
| Check 3: Links | pass | Internal prerequisite targets exist. |
| Check 4: Format and style | fail | Prerequisites `href` must use `/docs/shared/<page>` per `how_to_format.md`; UI control **show** should match on-screen casing in bold. |

## Tickets

### basic-auth-1

- **Type:** Shared page
- **Title:** Create shared prerequisite for a running Capsule with a public URL.
- **Problem:** Under `## Prerequisites`, the second card is `{href: '/docs/products/backend-capsule', label: '🛠️ A running Capsule', ...}`.
- **Rule:** `FORMAT.MD` Check 2; `how_to_format.md` Prerequisites: “Shared pages have slugs starting with `/shared/`”.
- **Change:** Add `docs/shared/<page>.md` (e.g. `deploy-a-backend-capsule` or equivalent) that walks through deploying a Backend Capsule until it has a default public URL. Update the prerequisite card to `href: '/docs/shared/<page>'`, with a label/description that state deploying a Capsule, not only reading the product overview. Use an emoji from `writing_style.md` appropriate to the linked page type (not 🛠️ unless it links to this how-to).
- **Done when:** The shared page exists, the basic-auth prerequisite links to it with `/docs/shared/...`, and Check 2 passes for this doc.

### basic-auth-2

- **Type:** Format fix
- **Title:** Fix prerequisite link on the running Capsule card.
- **Problem:** Same card as above uses a product overview link.
- **Rule:** `how_to_format.md` Prerequisites: “link them as `/docs/shared/<page>`”.
- **Change:** After `basic-auth-1` (or an existing shared page if one is added elsewhere), set the card `href` to that shared page.
- **Done when:** No prerequisite card on this page uses a non-`shared/` docs path unless the format rules are updated.

### basic-auth-3

- **Type:** Format fix
- **Title:** Bold the Show control with correct casing.
- **Problem:** Step 3 says “click **show**”.
- **Rule:** `writing_style.md` Words: “Put UI labels in bold, exactly as they appear on screen.”
- **Change:** Replace **show** with the exact dashboard label (likely **Show**).
- **Done when:** Step 3 uses the on-screen label in bold.

## Proposed outline

```md
---
slug: "/platform/security/basic-auth"
title: "Add HTTP Basic Authentication"
description: >-
  Enable HTTP Basic authentication on a Capsule's public URL. When you finish,
  the browser prompts for the credentials shown in the dashboard.
sidebar_label: "HTTP Basic Auth"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# HTTP Basic Authentication

<intro matching description>

## Prerequisites

<DocCardList: 👤 → /docs/shared/create-an-account; running Capsule → /docs/shared/<deploy-page>>

## Protect your Capsule

1. **Open Domains** — On **Domains**, ...
2. **Enable authentication** — On **Basic Auth**, toggle ...
3. **Use the credentials** — **Show**, note credentials, private window, URL prompts ...

## Troubleshooting

<details> health checks / /health </details>
```