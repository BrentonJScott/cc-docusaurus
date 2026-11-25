# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/persistent-storage.md`
- **Doc type:** How-to guide
- **Template:** `how_to_format.md`
- **Feature:** Use Persistent Storage
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Steps reach bind + use storage. |
| Check 2: Prerequisites | pass |  |
| Check 3: Links | pass |  |
| Check 4: Format and style | fail | Frontmatter missing `title`; step 1 uses colour-only UI cue "yellow **+**". |

## Tickets

### persistent-storage-1

- **ID:** persistent-storage-1
- **Type:** Format fix
- **Title:** Add frontmatter title
- **Problem:** YAML has `description` and `sidebar_label` but no `title`.
- **Rule:** writing_style.md Every doc: frontmatter fields
- **Change:** Add `title: "How to Use Persistent Storage"` (or match sidebar intent).
- **Done when:** `title` present in frontmatter.

### persistent-storage-2

- **ID:** persistent-storage-2
- **Type:** Format fix
- **Title:** Describe UI without colour alone
- **Problem:** Step 1: "click the yellow **+**".
- **Rule:** writing_style.md Words: name controls by label not colour
- **Change:** Write "click **New Capsule**" or **+** with the control name.
- **Done when:** No colour-only UI reference.

## Proposed outline

How-to per how_to_format.md.
