# Walkthrough: configure (database-capsule — MySQL)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/database-capsule/mysql/configure.md`
- **Feature:** Configure MySQL capsule
- **Goal:** Expect to see connection details and updated MySQL settings saved
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `malloc` (`mysql-capsule-jzea`) — MySQL Capsule in space **mysql-mem-pressure**
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, space, MySQL Capsule) — used existing **malloc** in **mysql-mem-pressure**; signed-in session on test-platform.
2. Open **malloc** and stay on the **Details** tab (`/details`).
3. In **Connection Details**, click **show** to view database credentials (host, port, database name, username, password, connection string).
4. **(not testable)** Connect from your local machine — requires Code Capsules CLI tunnel (`connect-locally` guide).
5. In **Capsule Details**, click **Edit** next to the Capsule name; confirm edit controls, then **Cancel** without renaming.
6. Open the **Config** tab; in **MySQL Configuration**, click **Edit** and select SQL modes (e.g. `STRICT_TRANS_TABLES`); **Save**.
7. Confirm **MySQL Configuration** shows a selectable MySQL server version (**5.7** / **8.0** per guide).

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Existing MySQL Capsule in **mysql-mem-pressure** |
| 2 | pass | **Details** tab | Capsule shell on **Details** for **malloc** (**Capsule Stopped**) |
| 3 | fail | **Connection Details** section; click **show** for credentials | Section is **Connection details** (sentence case). Host, port, database name, and username are visible without a **show** control; **Password** and **Connection string** stay masked (`••••`) and there is no **show** / **hide** link ([failure-step-3.jpg](./failure-step-3.jpg)) |
| 4 | not testable | CLI + `mysql` client | Documented under connect-locally |
| 5 | pass | **Edit** next to Capsule name in **Capsule Details** | **Edit** beside **Name** opens save/cancel edit mode |
| 6 | fail | **MySQL Configuration** → **Edit** → select SQL modes | Heading is **Mysql Configuration**. After **Edit**, modes are chosen via a **Select** control that opens the mode list; guide does not mention **Select**. Mode names such as `STRICT_TRANS_TABLES` only appear after opening **Select** ([failure-step-6.jpg](./failure-step-6.jpg)) |
| 7 | pass | Select **5.7** or **8.0** server version | Read view shows **Mysql server version** **8.0** (capsule is on 8.0) |

## Mismatches / issues

1. **Connection details (action 3):** Guide uses **Connection Details** and **show**. UI uses **Connection details** with no **show** toggle; sensitive values remain masked.
2. **SQL modes (action 6):** Guide implies choosing modes immediately after **Edit**; UI requires an extra **Select** step and labels the section **Mysql Configuration** (not **MySQL Configuration**).
3. **Stopped capsule:** **Capsule Stopped** banner present during the run; connection fields on **Details** still render.

## Suggested fixes

- Replace **Connection Details** / **show** with **Connection details** as shown on the Details tab; note which fields are visible by default and how password / connection string masking works (or link to **Proxy** / CLI if that replaces **show**).
- In **Set SQL Modes**, document the **Select** control under **Modes** after **Edit**, and align the section title with **Mysql Configuration** (or update product copy to **MySQL Configuration**).
- Optionally call out that version **5.7** / **8.0** appear when editing version on the **Config** tab while the capsule is running or stopped.