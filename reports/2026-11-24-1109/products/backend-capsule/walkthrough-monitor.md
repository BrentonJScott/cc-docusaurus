# Walkthrough: monitor (backend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/backend-capsule/monitor.md`
- **Feature:** Monitor backend capsule
- **Goal:** Expect to see usage data in the metrics tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `call-health-endpoint` (Backend Capsule) in space `mysql-mem-pressure`
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, backend capsule) — used existing `call-health-endpoint` Backend Capsule in `mysql-mem-pressure`.
2. Open the **mysql-mem-pressure** space and select the **call-health-endpoint** Backend Capsule (`/dash/spaces/mysql-mem-pressure-wcbq/capsules/call-health-endpoint-cubg/details`).
3. Click the **Metrics** tab (`…/metrics`).
4. Change the time range from the default to **1 Week**; observe whether chart values update.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing Backend Capsule in `mysql-mem-pressure` |
| 2 | pass | Open Space and select Backend Capsule | Capsule shell opens with breadcrumb **mysql-mem-pressure** and capsule tabs |
| 3 | fail | **Metrics** tab; CPU, memory, and **request** charts load | **Metrics** tab opens and shows time ranges (5 Minutes–2 Weeks), but banners read “There is currently no capsule data for network traffic” and “… for CPU or Memory”; no **request** chart label; **Capsule Stopped** ([failure-step-3.jpg](failure-step-3.jpg)) |
| 4 | fail | Time range changes; values update for the period | **1 Week** is clickable but empty-state copy and visible values do not change after selection |

## Mismatches / issues

1. **Chart types (action 3):** Guide: CPU, memory, and **request** charts. Screen: empty-state messages for **network traffic** and **CPU or Memory** only.
2. **Usage data (actions 3–4, goal):** Guide implies charts populate with usage data. Screen: no series/data while the capsule is stopped; goal “usage data in the metrics tab” not met.
3. **Time range (action 4):** Guide says values update when the range changes; with no data loaded, selecting **1 Week** does not change displayed values.

## Suggested fixes

- Name charts as the UI does (**network traffic** alongside CPU and memory), or add **request** metrics if the product exposes them under another label.
- In **Confirm usage data**, note that charts stay empty until the capsule is **running** and has traffic (align with the troubleshooting note).
- Describe the fixed time-range presets (5 Minutes, 30 Minutes, 1 Hour, 1 Week, 2 Weeks) instead of a generic “if the UI offers one.”