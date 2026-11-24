# Walkthrough: custom-domains (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/custom-domains.md`
- **Feature:** Add custom domain to frontend capsule
- **Goal:** Custom domain and subdomain listed on capsule
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `demo-html`
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — existing `demo-html`; no registrar DNS changes attempted.
2. Open **Domains** tab on `demo-html`.
3. **(fail)** Panel showed **Domain Details** only — **Static IP address**, **Add Custom Domain**, and domain list did not render completely during audit (capsule **Stopped**, API errors).
4. **(not testable)** Yellow **+** → **Add Custom Domain** → enter domain → **Create Domain** — requires owned domain and DNS; not executed.
5. **(not testable)** Registrar **A** / **CNAME** records.
6. **(blocked)** Confirm domain listed in UI — domain not created.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Capsule + domain ownership | Existing capsule only |
| 2 | pass | Open **Domains** tab | Tab present |
| 3 | fail | **Static IP**, **Add Custom Domain** | Controls not fully loaded on test-platform |
| 4 | not testable | Create custom domain in UI | No test domain |
| 5 | not testable | DNS at registrar | Out of scope |
| 6 | blocked | Domain listed on capsule | No domain added |

## Mismatches / issues

1. **Guide structure:** Opening prose references yellow **+** on dashboard; primary flow is on capsule **Domains** tab (tab navigation worked).
2. **Incomplete UI load** on **Domains** during audit prevented verifying **Static IP** copy and **Add Custom Domain** link text.

## Suggested fixes

- Lead with capsule **Domains** tab as the entry point; clarify where the yellow **+** appears (capsule vs space dashboard).
- Note that domain setup may require the capsule to be running for full domain details to display.