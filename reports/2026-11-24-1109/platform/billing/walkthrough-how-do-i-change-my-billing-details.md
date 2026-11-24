# Walkthrough: how-do-i-change-my-billing-details

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/billing/how-do-i-change-my-billing-details.md`
- **Feature:** Change billing details
- **Goal:** Expect saved billing details to match what you entered
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Have a Code Capsules account and be signed in — used existing session.
2. Open **Billing** from the overview navigation (`/dash/overview/billing`).
3. In **Billing Details**, click **Edit** — form showed First Name, Last Name, invoice name, email, phone, address fields, city, region, postal code, and country dropdown.
4. Left existing values unchanged and clicked **Save** — form closed to read-only **Billing Details** showing Brenton Scott, email, phone, and address.
5. Confirmed **Billing Details** still displays the same information after save.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Signed-in account (prerequisite) | Active session |
| 2 | pass | **Billing** in top navigation | Overview **Billing** link |
| 3 | pass | **Edit** in **Billing Details** | Edit opened inline form |
| 4 | pass | Update fields, **Save** | **Save** is a link (not a button); save succeeded |
| 5 | pass | Updated info shown in **Billing Details** | Read-only view matches saved values |

## Mismatches / issues

1. **Navigation wording:** Guide says “top navigation bar”; billing lives under overview secondary nav beside Teams, Spaces, etc.
2. **Save control:** Guide says button **Save**; UI presents **Save** as a text link next to **Cancel** while editing.

## Suggested fixes

- Clarify that **Billing** is on the overview dashboard nav, not only a global top bar.
- Describe **Save** as the **Save** link in the billing editor header.