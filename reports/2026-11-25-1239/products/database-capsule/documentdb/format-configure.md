# Format report — configure (DocumentDB)

- **Run:** 2026-11-25-1239
- **Doc:** `docs/products/database-capsule/documentdb/configure.md`
- **Doc type:** How-to guide
- **Template:** `formats/how_to_format.md`
- **Feature:** Configure a DocumentDB Database
- **Goal:** Expect to see updated database settings saved
- **Format check:** fail

## Content list

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | goal (intro) | (under `#`) | Update connection details and settings on Details and Config; saved settings at end. |
| 2–4 | prerequisite | `## Prerequisites` | Account, Space, DocumentDB deploy card. |
| 5 | goal | `## Configure your documentdb database` | **Open Details** — Open DocumentDB; **Details** tab. |
| 6 | goal | (steps) | **View connection details** — show connection string fields. |
| 7 | remove | (steps) | **Rename the capsule** — edit display name in **Capsule Details**. |
| 8–10 | goal | (steps) | **Config** tab; **Edit** “change the settings you need”; confirm reload. |
| 11 | — | `## Troubleshooting` | Changes did not save. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (goal steps) | fail | **Rename the capsule** is not required for saved database settings; step 5 does not name an exact **Config** field or value. |
| Check 2: Prerequisites | pass | Deploy prerequisite card links to `docs/products/database-capsule/documentdb/deploy.md`. |
| Check 3: Links | pass | All prerequisite `href` values resolve under `docs/`. |
| Check 4: Format and style | fail | Steps heading uses lowercase `documentdb`; step 2 uses “Click **show**” without matching UI capitalization; vague “settings you need.” |

## Tickets

### configure-1

- **Type:** Remove content
- **Title:** Remove the rename step from the numbered list.
- **Problem:** Step 3 **Rename the capsule** only changes the display name and is not part of the documented configuration goal.
- **Rule:** `FORMAT.MD`, Check 1 — content labelled `remove`; `how_to_format.md`, Steps — only actions needed for the goal.
- **Change:** Delete step 3 and renumber.
- **Done when:** No rename instruction remains in the steps section.

### configure-2

- **Type:** Format fix
- **Title:** Name exact Config settings in the edit step.
- **Problem:** Step 5 says “change the database settings you need” without naming the control or value used in the walkthrough (compare Redis configure **Max Memory** `256`).
- **Rule:** `how_to_format.md`, Steps — every value the goal depends on must be stated exactly.
- **Change:** Replace vague wording with the exact **Config** label(s) and example value(s) aligned with the DocumentDB walkthrough.
- **Done when:** The edit step names specific fields and values without “as needed” wording.

### configure-3

- **Type:** Format fix
- **Title:** Fix steps section heading capitalization.
- **Problem:** The steps section is `## Configure your documentdb database` while the product name is DocumentDB elsewhere.
- **Rule:** `how_to_format.md`, Steps — `## <Verb> your <Thing>` with consistent product naming (peer: `## Configure your Redis database`).
- **Change:** Rename to `## Configure your DocumentDB database`.
- **Done when:** The steps `##` heading matches product casing used in the title and prerequisites.

## Proposed outline

```md
## Configure your DocumentDB database

1. **Open Details** — On your **Space**, …
2. **View connection details** — On **Details**, in **Connection Details**, click **Show**. …
3. **Open Config** — On the **Capsule** page, click **Config**.
4. **Edit database settings** — On **Config**, click **Edit**. Set `<exact field>` to `<exact value>`. Click **Save**.
5. **Confirm the saved settings** — On **Config**, updated settings are visible.

## Troubleshooting
```