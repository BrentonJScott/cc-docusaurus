# Walkthrough: monitor (docker-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/docker-capsule/monitor.md`
- **Feature:** Monitor Docker capsule
- **Goal:** Expect to see usage metrics in the metrics tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `simple-docker` — Docker Capsule in space **to-delete** (`/dash/spaces/to-delete-ivvc/capsules/1c95fd7c-3885-fc26-737d-a3a5caca9af9/metrics`)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, Docker Capsule) — used existing `simple-docker` in **to-delete**; capsule **stopped** (same capsule as [scale walkthrough](./walkthrough-scale.md)).
2. Opened **to-delete** and selected **simple-docker** Docker Capsule (`…/details`).
3. Opened **Metrics** (`…/metrics`). Time-range presets **5 Minutes**–**2 Weeks** appear; banners read “There is currently no capsule data for network traffic” and “… for CPU or Memory.”
4. Selected **1 Week** on the metrics time-range controls; empty-state copy and visible values did not change.

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Docker Capsule exists | Used `simple-docker`; **Capsule Stopped** | — |
| 2 | pass | Open Space and select Docker Capsule | Capsule shell with breadcrumb **simple-docker** / **Docker Capsule** | — |
| 3 | fail | **Metrics** tab; CPU, memory, and **request** charts load | **Metrics** tab present; empty states for **network traffic** and **CPU or Memory** only; no **request** chart label; **Capsule Stopped** | [failure-step-3.jpg](./failure-step-3.jpg) |
| 4 | fail | Time range changes; values update for the period | **1 Week** selectable but with no series loaded, displayed values do not update | [failure-step-3.jpg](./failure-step-3.jpg) |

## Mismatches / issues

1. **Chart types (action 3):** Guide step 2: CPU, memory, and **request** charts. Frontmatter also mentions **network** and **storage** metrics; screen shows **network traffic** and **CPU or Memory** empty states only (aligns with [backend monitor](../backend-capsule/walkthrough-monitor.md), not with **request** / **storage** wording).
2. **Usage data (actions 3–4, goal):** Guide implies charts populate with usage data. Screen: no series while **Capsule Stopped**; goal “usage metrics in the metrics tab” not met.
3. **Time range (action 4):** Guide says values update when the range changes; with no data loaded, switching to **1 Week** does not change displayed values.
4. **Running capsule:** Troubleshooting notes traffic/runtime before charts fill; capsule was stopped for the full walkthrough (consistent with scale audit — no running Docker Capsule on test-platform during this run).

## Suggested fixes

- Align chart names with the UI (**network traffic**, **CPU or Memory**) or document **request** / **storage** only if the product exposes them under those labels.
- In **Confirm usage data**, name the fixed presets (**5 Minutes**, **30 Minutes**, **1 Hour**, **1 Week**, **2 Weeks**) instead of “if the UI offers one.”
- Reconcile description (“network, and storage”) with step text (“request charts”).
- Cross-link troubleshooting: charts stay empty until the capsule is **running** and has traffic (matches on-screen empty states).