# Format report: how-do-i-change-my-billing-details.md

- **Run:** 2026-11-25-0931
- **Doc file:** `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Change Billing Details
- **Goal:** Expect to see updated billing details saved on the account
- **Format check:** fail

## Content list (Check 1)

1. `prerequisite` — `## Prerequisites` — Code Capsules account (card → `/docs/shared/create-an-account`).
2. `goal` — `## Update billing details` — Open **Billing** in the top navigation bar.
3. `goal` — `## Update billing details` — In **Billing Details**, click **Edit**; update name, company, address, or tax details.
4. `goal` — `## Update billing details` — Click **Save**; **Billing Details** shows updated information (goal reached).
5. `remove` — `## Troubleshooting` — Save error symptom and fix (troubleshooting only; not on goal path).

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Steps reach the goal; prerequisites are outside the steps section. |
| Check 2: Prerequisites | pass | Account prerequisite is one card with a link to `docs/shared/create-an-account.md`. |
| Check 3: Links | pass | `/docs/shared/create-an-account` resolves under `docs/`. |
| Check 4: Format and style | fail | Steps section heading is `## Update billing details`; `how_to_format.md` requires `## <Verb> your <Thing>` (e.g. `## Update your billing details`). |

## Tickets

### how-do-i-change-my-billing-details-1

- **Type:** Format fix
- **Title:** Rename the steps section to `## Update your billing details`.
- **Problem:** Steps live under `## Update billing details`, which omits “your” from the required `## <Verb> your <Thing>` pattern.
- **Rule:** `how_to_format.md`, Steps — heading must be `## <Verb> your <Thing>`.
- **Change:** Rename `## Update billing details` to `## Update your billing details`.
- **Done when:** The steps section uses `## Update your billing details` and no other `##` headings were added.

## Proposed outline

```md
---
slug: "/platform/billing/how-do-i-change-my-billing-details"
title: "How to Change Billing Details"
description: >-
  Update billing contact details on your Team. When you finish, the saved
  details match what you entered.
sidebar_label: "Change billing details"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Change Billing Details

Update billing contact details on your Team. When you finish, the saved details match what you entered.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
  ]}
/>

## Update your billing details

1. **Open Billing**

   Click **Billing** in the top navigation bar.

2. **Edit details**

   In **Billing Details**, click **Edit**. Update name, company, address, or tax details as needed.

3. **Save**

   Click **Save**. The **Billing Details** section shows your updated information.

## Troubleshooting

<details>
<summary>Save does nothing or shows an error</summary>

Fill every required field marked on the form. If the error mentions tax or VAT, check the format matches your country.

</details>
```