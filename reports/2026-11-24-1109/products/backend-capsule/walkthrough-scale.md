# Walkthrough: scale (backend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/backend-capsule/scale.md`
- **Feature:** Scale backend capsule
- **Goal:** Expect to see new capsule capacity saved and the capsule redeploy
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `call-health-endpoint` (`call-health-endpoint-cubg`) — Backend Capsule in space **mysql-mem-pressure**
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, Backend Capsule) — used existing `call-health-endpoint` in **mysql-mem-pressure**; session already signed in as Brenton on test-platform.
2. Open `call-health-endpoint` → select **Scale** tab (`…/call-health-endpoint-cubg/scale`). On first load, **Capsule Running** with **Capsule Capacity** showing **CPU** (5%), **RAM** (0.2 GB), and **Edit**.
3. Click **Edit** scoped to **Capsule Capacity**; guide expects adjustable **CPU**, **RAM**, **Storage**, and **Replicas**. UI showed **CPU** / **RAM** only (replica count labeled **Scale** `1`, no **Storage**). A generic **Edit** click elsewhere on the page opened the **New Capsule** wizard instead of capacity edit. Later reloads of **Scale** left the main panel empty while the tab shell still showed **Capsule Stopped** (see [failure-step-3.jpg](./failure-step-3.jpg)).
4. **(blocked)** Click **Save** and confirm updated resources on **Scale** — no in-place **Save** on **Scale** after failed edit; could not change capacity during the run.

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Prerequisites | Existing Backend Capsule | — |
| 2 | pass | Open **Scale** tab | **Scale** link loads capacity read view when data is present | — |
| 3 | fail | **Edit**; adjust **CPU** / **RAM** / **Storage** / **Replicas** | **Storage** absent; **Replicas** not labeled; ambiguous **Edit** targets; **Scale** body sometimes blank on test-platform | [failure-step-3.jpg](./failure-step-3.jpg) |
| 4 | blocked | **Save** and confirm redeploy | Not reachable (depends on action 3) | — |

## Mismatches / issues

1. **Field labels:** Guide lists **Storage** and **Replicas**; this Backend Capsule **Scale** view showed **CPU**, **RAM**, and replica count as **Scale** `1` only (no **Storage** row).
2. **Edit control:** Guide says **Click Edit** under **Scale the Capsule**; the capacity **Edit** is not exposed as a `button` role and other **Edit** links on the page route to **New Capsule** / plan flows if clicked by label alone.
3. **Platform instability:** **Scale** intermittently rendered without **Capsule Capacity** (header/nav only, **Capsule Stopped**), blocking edit and save ([failure-step-3.jpg](./failure-step-3.jpg)) — same class of failure as [frontend scale](../frontend-capsule/walkthrough-scale.md).
4. **Doc typo:** Guide H1 is **Scale your Scale**; sidebar/title otherwise refer to scaling the Backend Capsule.

## Suggested fixes

- Clarify which capacity fields appear per Backend Capsule plan (e.g. **CPU** / **RAM** vs optional **Storage** / **Replicas**), matching the **Capsule Capacity** panel.
- Specify that **Edit** is the control beside **Capsule Capacity** (not **Space Details** or plan **Edit** elsewhere).
- Add a note when the capsule must be **running** before capacity edit works (align with Docker scale troubleshooting).
- Fix the H1 to **Scale your Backend Capsule** (or similar).