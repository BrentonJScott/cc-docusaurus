# Walkthrough: scale (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/scale.md`
- **Feature:** Scale frontend capsule
- **Goal:** New resources saved on **Scale** tab
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `demo-html` (Static Frontend)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — used existing `demo-html` in **Document Drift**.
2. Open `demo-html` → click **Scale** tab (`/scale`).
3. **(fail)** **Scale** route did not render capsule shell or **Edit** controls during audit (page showed header only after navigation; API/console errors on test-platform).
4. **(blocked)** Click **Edit**, adjust **CPU** / **RAM** / **Storage** / **Replicas**, **Save** — no scale form loaded.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Frontend capsule exists | `demo-html` |
| 2 | pass | Open **Scale** tab | **Scale** link present on capsule nav |
| 3 | fail | **Edit** and resource fields | Main panel empty / failed to load on test-platform |
| 4 | blocked | **Save** updated resources | Not reachable |

## Mismatches / issues

1. **Static Free scaling:** Guide mentions CPU/RAM/Replicas; static **Free** capsules may show plan upgrade UI rather than container scale fields (could not confirm — page did not load).
2. **Platform instability:** `demo-html` **Capsule Stopped**; capsule detail routes intermittently returned incomplete UI during the run.

## Suggested fixes

- Split static **Free** → **Paid** upgrade steps from container **CPU/RAM/Replicas** scaling.
- Note requirement that capsule is running if the UI hides scale controls when stopped.