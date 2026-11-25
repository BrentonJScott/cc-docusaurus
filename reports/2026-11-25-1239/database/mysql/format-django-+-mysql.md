# Format report — django-+-mysql

- **Run:** 2026-11-25-1239
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Host Django with MySQL
- **Goal:** Expect to Deploy a Django app with a MySQL database
- **Format check:** fail

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content (goal steps) | pass | Steps reach the public URL goal. |
| Check 2: Prerequisites | pass | Shared prerequisite cards resolve. |
| Check 3: Links | pass | Internal links resolve. |
| Check 4: Format and style | fail | Step 10 uses **+**; steps 9–11 open with “On the Backend Capsule … tab” instead of `On **Deploy**`, `On **Config**, …`. |

## Tickets

### django-+-mysql-1

- **Type:** Format fix
- **Title:** Replace **+** in Connect the capsules.
- **Problem:** Step **Connect the capsules** says “Click **+** next to **Connection string**.”
- **Rule:** `writing_style.md`, Words — name controls by label, not symbol alone.
- **Change:** Name the control that adds `DATABASE_URL` (for example **Add connection string**).
- **Done when:** No step uses **+** as the only control name.

### django-+-mysql-2

- **Type:** Format fix
- **Title:** Open steps 9–11 with screen names in bold.
- **Problem:** Steps say “On the Backend Capsule **Deploy** tab” instead of `On **Deploy**, …`.
- **Rule:** `how_to_format.md`, Steps — start with `On **<Screen>**, …`.
- **Change:** Rewrite steps 9–11 to open on **Deploy**, **Config**, and **Details**.
- **Done when:** Each step body uses the screen-name pattern.