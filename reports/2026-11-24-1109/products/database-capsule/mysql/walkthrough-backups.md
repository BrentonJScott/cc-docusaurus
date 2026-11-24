# Walkthrough: backups (database-capsule — MySQL)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/database-capsule/mysql/backups.md`
- **Feature:** Back up MySQL capsule
- **Goal:** Expect to see a completed backup listed under backups
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `malloc` (`mysql-capsule-jzea`) — MySQL Capsule in space **mysql-mem-pressure**
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, MySQL Capsule) — used existing **malloc** / `mysql-capsule-jzea` in **mysql-mem-pressure**; session signed in on test-platform.
2. In **mysql-mem-pressure** → **Capsules**, open **malloc** (`mysql-capsule-jzea`).
3. Select the backup tab (`/backup`).
4. Under **Manual Backup**, click the control to start a manual backup (guide: **Create backup** or **Backup now**).
5. In **Confirm Backup**, click **Confirm** (extra step not described in the guide).
6. Wait for backup status **Completed** and an entry with a timestamp under **Backup History**.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing MySQL Capsule in **mysql-mem-pressure** |
| 2 | pass | Open the Capsule | Capsule shell opens for **malloc** |
| 3 | fail | **Backups** tab | Tab is labeled **Backup** (singular), not **Backups** ([failure-step-1.jpg](./failure-step-1.jpg)) |
| 4 | fail | **Create backup** or **Backup now** | **Manual Backup** section shows a **Backup** button only; no **Create backup** / **Backup now** labels ([failure-step-2.jpg](./failure-step-2.jpg)) |
| 5 | not testable | (not in guide) | **Confirm Backup** modal with optional name and **Confirm** / **Cancel** |
| 6 | fail | Status **Completed**; list shows timestamp | **Capsule Stopped**; message “Your Capsule is not available at the moment”; **Backup History** shows no completed rows ([failure-step-3.jpg](./failure-step-3.jpg)) |

## Mismatches / issues

1. **Tab label (action 3):** Guide: **Backups** tab. Screen: nav tab **Backup**.
2. **Start control (action 4):** Guide: **Create backup** or **Backup now**. Screen: **Backup** under **Manual Backup** (with automatic schedule section below).
3. **Confirmation (action 5):** UI adds **Confirm Backup** before the job starts; the guide goes straight from click to waiting for **Completed**.
4. **Goal (action 6):** No **Completed** backup or timestamped row while the capsule is stopped / unavailable.

## Suggested fixes

- Rename the tab in the guide to **Backup** (or document both **Backup** and **Backups** if product copy varies).
- Replace **Create backup** / **Backup now** with the actual **Backup** control under **Manual Backup**, and mention the **Confirm Backup** dialog.
- In **Confirm completion**, note that manual backup may fail or stay empty until the MySQL Capsule is **running** and healthy (align with troubleshooting about retries when the capsule is healthy).