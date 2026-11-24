# Walkthrough: monitor (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/monitor.md`
- **Feature:** Monitor frontend capsule
- **Goal:** Expect CPU, memory, and request charts on the **Metrics** tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `demo-html`
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — used existing `demo-html` capsule.
2. Open `demo-html` from overview **Capsules**.
3. Look for **Metrics** tab — capsule tabs are **Details**, **Deploy**, **Config**, **Access**, **Domains**, **Builds**, **Usage** (no **Metrics**).
4. Open **Usage** as closest match — shows monthly usage table (date, product, usage $, efficiency %), not CPU/memory/request charts.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing capsule |
| 2 | pass | Open capsule | `demo-html` details/usage reachable |
| 3 | fail | **Metrics** tab | Tab not present on test-platform |
| 4 | blocked | CPU, memory, request charts | **Usage** tab shows billing usage only |

## Mismatches / issues

1. **Missing Metrics tab:** Guide references **Metrics**; UI uses **Usage** for cost/usage table and has no CPU/memory/request charts on this capsule type.

## Suggested fixes

- Replace **Metrics** with **Usage** (and describe the usage table), or document where CPU/memory charts live if they exist for other capsule types.