# Walkthrough: logs (docker-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/docker-capsule/logs.md`
- **Feature:** View Docker capsule logs
- **Goal:** Expect to see capsule logs and access logs
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `simple-docker` (`simple-docker-roqv`) — Docker Capsule in space **to-delete**
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, Docker Capsule) — used existing `simple-docker` in **to-delete**; capsule **stopped** (same as [monitor](./walkthrough-monitor.md) and [scale](./walkthrough-scale.md) walkthroughs).
2. Opened **to-delete** and selected the **simple-docker** Docker Capsule (`…/details`).
3. Clicked the **Logs** tab (`…/logs`).
4. Looked for **Capsule logs**, **Build logs**, and **Access logs** as named in the guide; opened **Access** (`…/access-logs`) and **Builds** (`…/builds`) to compare placement.
5. Confirmed whether runtime **capsule** log lines and **access** log lines were visible (goal check).

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Docker Capsule exists | Used `simple-docker-roqv`; **Capsule Stopped** | — |
| 2 | pass | Open Space and select Docker Capsule | Capsule shell with breadcrumb **simple-docker** / **Docker Capsule** | — |
| 3 | pass | Click **Logs** tab | **Logs** tab loads an application log viewer (**Search logs…**, live stream controls) | — |
| 4 | fail | Open **Capsule logs**, **Build logs**, or **Access logs** as listed | No controls labeled **Capsule logs** / **Build logs** / **Access logs** on **Logs**; runtime stream is unnamed application logs; **Build logs** live under **Builds**; **Access logs** under top-level **Access** (not nested under **Logs**) | — |
| 5 | fail | See capsule logs and access logs (goal) | **Logs**: long load then empty/waiting states while stopped; **Access**: “Loading Access Logs” with no entries surfaced during the run | — |

## Mismatches / issues

1. **Log stream placement (action 4):** Guide step 3 implies three named streams on **Logs**. UI splits them: runtime on **Logs**, build history on **Builds**, HTTP access on **Access** — closer to [frontend-capsule logs](../frontend-capsule/walkthrough-logs.md) tab split than to a single **Logs** picker.
2. **Troubleshooting wording:** “refresh **Build logs**” does not match a **Build logs** label on **Logs**; builds/logs are on **Builds**.
3. **Goal (action 5):** Stopped capsule yielded no visible log lines in either stream during the test window (loading / “capsule has not yet started” style messaging on **Logs**).
4. **Doc nit:** H1 renders as “Logs logs” (`# Logs logs` in the guide).

## Suggested fixes

- Rewrite step 3 for Docker Capsules: **Logs** for runtime (capsule) output, **Builds** for build logs, **Access** for access logs — not three picks on one tab.
- Align troubleshooting with **Builds** tab wording (“open **Builds** and view logs for the latest build”).
- Fix the duplicate heading (“Logs” or “View logs”).
- Note that streams may stay empty until the capsule is **running** or after a recent deploy.