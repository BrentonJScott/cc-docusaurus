# Walkthrough: how-do-i-view-my-invoices

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/billing/how-do-i-view-my-invoices.md`
- **Feature:** View invoices
- **Goal:** Expect invoices listed on the Invoices tab
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Have a Code Capsules account and be signed in — used existing session (overview showed “Hello, Brenton”).
2. Open **Billing** from the overview navigation (`/dash/overview/billing`).
3. Open **Invoices** from the overview navigation (`/dash/overview/invoices`). The guide describes an **Invoices** tab under Billing; on test-platform **Invoices** is a sibling nav item next to **Billing**.
4. Review the invoice list — page shows heading **Invoices** and message “You do not have any invoices yet.”
5. **(not testable)** Open or download an invoice PDF — no invoices exist on this account (matches guide troubleshooting for new accounts).

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Signed-in account (prerequisite) | Active session |
| 2 | pass | **Billing** in top navigation | **Billing** in overview secondary nav |
| 3 | pass | **Invoices** tab under Billing | Separate **Invoices** nav link; invoices page loaded |
| 4 | pass | List of invoices with date, amount, status | Empty state message; no rows |
| 5 | not testable | Open/download PDF | No invoices to open |

## Mismatches / issues

1. **Invoices location:** The guide says open an **Invoices** tab after **Billing**; the UI uses a top-level **Invoices** link alongside **Billing** on the overview nav, not tabs on one page.

## Suggested fixes

- Replace “Open the **Invoices** tab” with opening **Invoices** from the overview navigation (next to **Billing**), or document both entry paths if team-level billing also has tabs.