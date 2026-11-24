# Walkthrough: deployments (docker-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/docker-capsule/deployments.md`
- **Feature:** Manage Docker deployments
- **Goal:** Expect to see build logs in the deploy tab and roll back to a previous build
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `simple-docker` (`simple-docker-roqv`) — Docker Capsule in space **to-delete** (image-based deploy)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — used existing `simple-docker` in **to-delete**; capsule **stopped**.
2. Opened the **Deploy** tab on `simple-docker`.
3. Looked for **Capsule Source** with **Edit** (repo/branch or image) per guide.
4. Checked **Deployment strategy** and **Recent builds** on **Deploy**; used **View Logs** on a listed build.
5. Searched for successful-build retention copy (for example `3 / 5 successful builds`) on **Deploy**.
6. Confirmed whether **Deploy** on an older successful build is available for rollback (observed controls only; full rollback not exercised).

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Docker Capsule exists | `simple-docker`; image deploy; **Capsule Stopped** | — |
| 2 | pass | Open **Deploy** tab | **Deploy** tab loads with image/source panels | — |
| 3 | fail | **Capsule Source** — **Edit** for repo/branch or image ref | UI shows **Capsule Image** and **Pull & Deploy**, not **Capsule Source** / Git-style **Edit** (expected for image capsules) | — |
| 4 | pass (partial) | **View Logs** on recent build opens build output | **View Logs** navigates to **Builds** with real output (image resolve, Tekton, duration) | — |
| 5 | fail | **Deploy** tab shows `N / N successful builds` retention line | No retention counter on **Deploy** | — |
| 6 | pass (partial) | **Deploy** on prior build rolls back | Older successful builds show **Deploy** beside **View Logs**; rollback flow not completed (stopped capsule) | — |

## Mismatches / issues

1. **Source section naming (action 3):** Guide centers **Capsule Source** and Git-oriented **Edit**; image-deploy capsules use **Capsule Image** — doc should branch by deploy type (Git vs image).
2. **Build logs placement (action 4):** Intent matches (**View Logs** → build output), but logs live on **Builds**, not inline on **Deploy** — clarify in steps.
3. **Retention copy (action 5):** Example `3 / 5 successful builds` not present on **Deploy** for this capsule.
4. **Rollback (action 6):** Controls visible; end-to-end rollback not verified in this run.

## Suggested fixes

- Split **Deploy tab** steps: Git capsules (**Capsule Source**, repo/branch **Edit**) vs image capsules (**Capsule Image**, **Pull & Deploy**).
- State that **View Logs** on **Deploy** opens the **Builds** tab log viewer.
- Replace or qualify the `N / N successful builds` example with what the UI actually shows (or where retention is surfaced).
- Note rollback via **Deploy** on a prior successful build; mention **running** state if that affects availability.