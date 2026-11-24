# Walkthrough: configure (backend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/backend-capsule/configure.md`
- **Feature:** Configure backend capsule
- **Goal:** Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `call-health-endpoint` (Backend Capsule) in space `mysql-mem-pressure`
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, backend capsule) — used existing `call-health-endpoint` Backend Capsule.
2. Open the capsule **Config** tab (`/configure`).
3. In **Capsule Parameters**, click **Edit** next to **Build**; confirm **Project Path** and **Run Command** fields and **Save** / **Cancel** with note “Saving starts a new build”.
4. Update **Project Path** to `/`, click **Save**, then **Confirm**; verified read view shows **Project Path** `/`.
5. Click **Edit** next to **Runtime**; confirm **Network Port** and **Health Check** area.
6. Per guide, set **Health Check** to **Automatic** or **Manual** and enter endpoint `/health`; click **Save** and confirm.
7. In **Environment Variables**, click **show** to reveal masked values.
8. Open **Key/Val Editor**, use **Add Environment Variable**, enter **WALKTHROUGH_AUDIT** / `walkthrough-2026-11-24`, **Save**, **Confirm**; verified after reload.
9. In **Data capsules**, click **View** next to a Database Capsule (`mysql-capsule-jzea`); read connection details in modal.
10. Click **+** (add control) next to **Connection string** in the modal, **Save** environment variables, **Confirm**; verified **DATABASE_URL** persists after reload.
11. **(not testable)** **Bind** a **Persistent Storage Capsule** — no Persistent Storage row under **Data capsules** in this space (only MySQL entries).

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing Backend Capsule |
| 2 | pass | **Config** tab | Tab loads **Capsule Parameters**, env vars, data capsules |
| 3 | pass | **Edit** next to **Build** | **Project Path**, **Run Command**; **Save**/**Cancel** |
| 4 | pass | Update Build, **Save**, confirm | **Project Path** `/` persisted after save |
| 5 | pass | **Edit** next to **Runtime** | Edit mode with port **3000** and **Health Check** |
| 6 | fail | **Automatic** or **Manual**, endpoint, **Save** | Runtime edit shows **Health Check** **Off** only; no **Automatic**/**Manual** labels or endpoint fields to change ([failure-step-6.jpg](failure-step-6.jpg)); after save attempts, read view stays **Off** |
| 7 | pass | **show** for values | **show**/**hide** toggles masked values |
| 8 | pass | **Key/Val Editor**, name/value, **Save** | Custom variable saved; “Environment variables updated - capsule restarting” |
| 9 | pass | **View** on Database Capsule | Modal lists **Connection string**, host, port, credentials |
| 10 | pass | **+** on **Connection string** → **DATABASE_URL** | Add icon (`fa-add`) on connection row; **Save** adds **DATABASE_URL** (persists after reload) |
| 11 | not testable | **Bind** Persistent Storage | No Persistent Storage Capsule listed to bind |

## Mismatches / issues

1. **Health Check (action 6):** Guide: “Set **Health Check** to **Automatic** or **Manual**” with **Endpoint** `/health`. Screen: in Runtime edit, **Health Check** remains **Off** with no visible **Automatic**/**Manual** controls or endpoint inputs ([failure-step-6.jpg](failure-step-6.jpg)).
2. **Connection string control (action 10):** Guide says click **+** next to **Connection string**. Screen: control is an add icon button (`fa-add`), not a “+” text label, inside the **View** modal ([failure-step-12.jpg](failure-step-12.jpg)).
3. **Persistent Storage (action 11):** Guide assumes a **Persistent Storage Capsule** appears under **Data capsules**; this space only lists MySQL data capsules.

## Suggested fixes

- Document how to enable **Health Check** in the current UI (where **Automatic**/**Manual** appear, or if **Off** must be changed via a control not described in the guide).
- In **Connect a Database Capsule**, describe the add icon on the **Connection string** row in the **View** modal (not only a “+” label on the main Config page).
- Note that **Bind** for persistent storage requires a Persistent Storage Capsule in the same space; link to deploying one if none is listed.