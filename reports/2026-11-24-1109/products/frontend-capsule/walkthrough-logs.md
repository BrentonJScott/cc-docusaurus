# Walkthrough: logs (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/logs.md`
- **Feature:** View frontend capsule logs
- **Goal:** Expect log streams on the **Logs** tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `demo-html`
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — used existing `demo-html`.
2. Open `demo-html` from overview **Capsules**.
3. Search for **Logs** tab — not present; tabs include **Access** and **Builds**.
4. Open **Builds** — build list and **Build logs** panel with search and download controls (logs loaded for latest build).
5. **(blocked)** Switch among **Capsule logs**, **Build logs**, **Access logs** as named in guide — no single **Logs** tab with those substreams.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing capsule |
| 2 | pass | Open capsule | Opened `demo-html` |
| 3 | fail | **Logs** tab | No **Logs** tab on UI |
| 4 | pass | View log content | **Builds** tab shows build log viewer |
| 5 | blocked | **Capsule** / **Build** / **Access** log picker on **Logs** | **Access** is separate tab; no combined **Logs** tab |

## Mismatches / issues

1. **Tab naming:** Guide uses **Logs** tab with three substreams; UI splits **Builds** (build logs) and **Access** (access logs).

## Suggested fixes

- Map steps to **Builds** (build logs) and **Access** (access logs) instead of a **Logs** tab.