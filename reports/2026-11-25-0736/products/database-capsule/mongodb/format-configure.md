# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/products/database-capsule/mongodb/configure.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Configure a MongoDB Database
- **Goal:** Expect to see the configuration saved as described
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Last step renames the capsule; goal is viewing/saving configuration, not rename. |
| Check 2: Prerequisites | pass |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | Last step must end with reader seeing configuration saved. |

## Tickets

### configure-1

- **ID:** configure-1
- **Type:** Missing goal step
- **Title:** End on saved configuration
- **Problem:** Step 3 **Rename the capsule** is not required for the documented goal; step 2 shows connection details but does not state save confirmation.
- **Rule:** FORMAT.MD Check 1 How-to: last step must show goal reached
- **Change:** Remove rename step or move to optional doc; end step 2 (or a new step) with configuration visible/saved on Details or Config.
- **Done when:** Final step describes saved connection/configuration state matching the feature goal.

## Proposed outline

How-to: Prerequisites, `## Configure your MongoDB database`, Troubleshooting.
