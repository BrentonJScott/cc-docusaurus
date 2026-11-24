# Walkthrough: scale (docker-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/docker-capsule/scale.md`
- **Feature:** Scale Docker capsule
- **Goal:** Expect to see new resources saved and the capsule stop and start
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `simple-docker` (`simple-docker-roqv`) — Docker Capsule in space **to-delete** (no Docker Capsule in **Document Drift**)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, Docker Capsule) — used existing `simple-docker` in **to-delete**; no running Docker Capsule on test-platform during this run.
2. Open `simple-docker` → select **Scale** tab (`/scale`).
3. Click **Edit** — guide expects editable **CPU**, **RAM**, **Storage**, and **Replicas**; UI showed read-only capacity and message that editing requires a running capsule.
4. **(blocked)** Click **Save** and confirm updated resources on **Scale** — **Save** never appeared (depends on step 3).

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Docker Capsule exists | Used `simple-docker-roqv`; capsule **stopped** | — |
| 2 | pass | Open **Scale** tab | **Scale** tab loaded **Capsule Capacity** with **CPU** / **RAM** | — |
| 3 | fail | **Edit** and adjust **CPU** / **RAM** / **Storage** / **Replicas** | After **Edit**: "You cannot edit the capacity of a capsule that is not running"; no **Storage** or **Replicas** fields; no **Save** | [failure-step-3.jpg](./failure-step-3.jpg) |
| 4 | blocked | **Save** and confirm new resources on **Scale** | Not reachable | — |

## Mismatches / issues

1. **Running capsule required:** Guide does not say the Docker Capsule must be **running** before **Edit** on **Scale** works. Platform blocks editing while **Capsule Stopped** — aligns with troubleshooting note about stopping for storage, but not documented for capacity edits.
2. **Fields vs guide:** On this Docker Capsule, **Scale** showed **CPU** and **RAM** only (no **Storage** or **Replicas** in view or edit mode). Guide lists all four as if always present.
3. **Test data:** No Docker Capsule in **Document Drift** and no **running** Docker Capsule account-wide on test-platform; **Pull & Deploy** did not move `simple-docker` to **Running** during the run.
4. **Intermittent load:** **Scale** sometimes rendered an empty **Capsule Capacity** panel until `networkidle`; full content returned on reload.

## Suggested fixes

- Add a prerequisite or step 0: ensure the Docker Capsule is **running** before opening **Edit** on **Scale**.
- Clarify which fields appear per Docker Capsule plan/type (e.g. **CPU** / **RAM** only vs **Storage** / **Replicas**).
- Cross-link troubleshooting for **Save** disabled / stopped capsule cases.