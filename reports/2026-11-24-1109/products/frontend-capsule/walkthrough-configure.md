# Walkthrough: configure (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/configure.md`
- **Feature:** Configure frontend capsule
- **Goal:** Expect to configure capsule parameters and environment variables on the Config tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `demo-html` (Static Frontend) in space Document Drift
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Prerequisites (account, space, frontend capsule) — used existing `demo-html` capsule.
2. Open the capsule and click the **Config** tab (`/configure`).
3. On **Capsule Parameters**, click **Edit** next to **Build** — saw **Project Path**, **Build command**, **Build Output Directory** fields and note “Saving starts a new build”; clicked **Cancel** without saving.
4. In **Environment Variables**, confirm **APP_URL** row and **Key/Val Editor** / **Text Editor** links; used **show** in the Value column header to reveal masked values.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing capsule |
| 2 | pass | Navigate to **Config** tab | **Config** tab present and loads parameters |
| 3 | pass | **Edit** next to **Build**, update, **Save** | Edit opens fields; **Save**/**Cancel** links; cancelled to avoid rebuild |
| 4 | pass | **Environment Variables**, **show** for values | Table with **show** toggle and editors |

## Mismatches / issues

None observed beyond exercising **Cancel** instead of **Save** to avoid triggering a new build during audit.

## Suggested fixes

- Optional: mention that **Save** on Build settings starts a new build (shown in UI).