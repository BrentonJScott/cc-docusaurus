# Format report: Create a Code Capsules Account

- **Run**: 2026-11-25-0736
- **Doc**: `docs/shared/create-an-account.md`
- **Doc type**: How-to guide
- **Template**: `how_to_format.md`
- **Feature**: Create a Code Capsules account (shared prerequisite page; not listed in `cc_documented_features.md`)
- **Goal**: Expect to see your Personal Team dashboard after sign-up
- **Format check**: fail

## Content list

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | remove | (intro) | Sign up for Code Capsules and land on your Personal Team dashboard. |
| 2 | remove | `## Prerequisites` | A GitHub account (card to `https://github.com/signup`) |
| 3 | goal | `## Create your account` | Go to the Code Capsules app and click **Sign Up**. |
| 4 | goal | `## Create your account` | On **Sign Up**, enter name, email, password; click **Sign Up**. |
| 5 | goal | `## Create your account` | On the welcome page, click **Go To Personal Team**; see Personal Team dashboard. |
| 6 | remove | `## Troubleshooting` | Email already in use — log in or reset password. |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | GitHub is labelled `remove`: not required to reach the sign-up goal; goal steps are otherwise complete. |
| Check 2: Prerequisites | fail | Listed prerequisite is not required for account creation and is not a `docs/shared/` page. |
| Check 3: Links | pass | No broken internal links or images on the page. |
| Check 4: Format and style | fail | Steps 1 and 3 do not open with the screen name in bold (`On **<Screen>**, …`). |
| Walkthrough | not applicable | Format fail — walkthrough not run. |

## Tickets

### create-an-account-1

- **ID**: create-an-account-1
- **Type**: Remove content
- **Title**: Remove GitHub from Prerequisites.
- **Problem**: `## Prerequisites` includes `{ label: '💻 A GitHub account', href: 'https://github.com/signup', … }`. A reader does not need GitHub to create a Code Capsules account or open a Personal Team.
- **Rule**: `FORMAT.MD`, Check 1 (prerequisite vs `remove`); Check 2 — prerequisites must be required before the goal steps.
- **Change**: Remove the GitHub card from the `DocCardList`. If no prerequisites remain, keep `## Prerequisites` with an empty `items={[]}` or one sentence under the list (for example, that no account or repo is needed before sign-up), per `writing_style.md` Page pieces.
- **Done when**: `## Prerequisites` lists only what the reader must have before the sign-up steps, with no GitHub card.

### create-an-account-2

- **ID**: create-an-account-2
- **Type**: Format fix
- **Title**: Open step descriptions with the screen name.
- **Problem**: Step 1 body starts with "Go to the Code Capsules app and click **Sign Up**." Step 3 starts with "On the welcome page, click **Go To Personal Team**." — **welcome page** is not a bold screen label.
- **Rule**: `how_to_format.md`, Steps — "Start the description with the screen's name in bold, such as 'On **Plan**, …'."
- **Change**: Reword step 1 to `On **<sign-in or landing screen>**, click **Sign Up**` (use the on-screen title). Reword step 3 to `On **Welcome**` (or the exact welcome screen title), then **Go To Personal Team**.
- **Done when**: Every step description in `## Create your account` begins with `On **<Screen>**, …`.

## Proposed outline

```md
---
slug: "/shared/create-an-account"
title: "How to Create a Code Capsules Account"
description: >-
  Sign up for Code Capsules and land on your Personal Team dashboard.
sidebar_label: "Create an Account"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Create a Code Capsules Account

Sign up for Code Capsules and land on your Personal Team dashboard.

## Prerequisites

<DocCardList items={[]} />

No GitHub account or repository is required before sign-up.

## Create your account

1. **Open the sign-up page**

   On **Login** (or the app landing page), click **Sign Up**.

2. **Enter your details**

   On **Sign Up**, enter your name, email address, and a password, then click **Sign Up**.

3. **Open your Personal Team**

   On **Welcome**, click **Go To Personal Team**. You see your Personal Team dashboard.

## Troubleshooting

<details>
<summary>Sign-up says the email address is already in use</summary>

You already have an account with that email address. Log in instead, or reset your password if you've forgotten it.

</details>
```