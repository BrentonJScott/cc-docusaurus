# Format report: Create a Space

- **Run**: 2026-11-25-0736
- **Doc**: `docs/shared/create-a-space.md`
- **Doc type**: How-to guide
- **Template**: `how_to_format.md`
- **Feature**: Create a Space
- **Goal**: Expect to see a Space ready to deploy into.
- **Format check**: fail

## Content list

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | remove | (intro) | Create a Space in your Team so you have somewhere to deploy capsules. |
| 2 | prerequisite | `## Prerequisites` | Code Capsules account (card link only) |
| 3 | goal | `## Create your Space` | Start a new Space: sidebar **+**, **New Space** |
| 4 | goal | `## Create your Space` | Space Details: Team, Space Name, Location/Cluster |
| 5 | goal | `## Create your Space` | Click **Create Space**; Space opens ready for capsules |
| 6 | remove | `## Troubleshooting` | Team missing from dropdown — ask owner to add you |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Intro/last step wording does not match the feature goal; goal steps otherwise complete the flow |
| Check 2: Prerequisites | pass | Account prerequisite is in `## Prerequisites` with internal link |
| Check 3: Links | pass | `/docs/shared/create-an-account` exists |
| Check 4: Format and style | fail | Step 1 names **+** instead of the control by action; intro/goal wording |

## Tickets

### create-a-space-1

- **Type**: Format fix
- **Title**: Name the new-Space control by action, not **+**.
- **Problem**: Under `## Create your Space`, step 1 says: "In the sidebar, click **+** and select **New Space**."
- **Rule**: `writing_style.md`, Words — "Name UI controls by what they say or do, not by colour or position alone."
- **Change**: Rewrite step 1 so the reader clicks **New Space** (or the control’s on-screen label) without leading with **+** or sidebar position alone.
- **Done when**: Step 1 follows the writing-style rule and still gets the reader to the new-Space flow.

### create-a-space-2

- **Type**: Format fix
- **Title**: Align intro and final outcome with the documented goal.
- **Problem**: Description and intro say "somewhere to deploy capsules"; the last step says "ready for capsules." The feature goal is: Expect to see a Space ready to deploy into.
- **Rule**: `how_to_format.md`, Title and description — end state must match the feature goal; `how_to_format.md`, Steps — last step must end with the reader seeing the goal.
- **Change**: Update `description`, the sentences under `# Create a Space`, and the last step so they state the reader sees a Space ready to deploy into (consistent wording).
- **Done when**: Intro, description, and last step clearly match the documented goal.

## Proposed outline

```md
# Create a Space
<One or two sentences: Space ready to deploy into — matches goal.>

## Prerequisites
<DocCardList — 👤 account only>

## Create your Space
1. **Start a new Space** — action to open new Space (no **+**-only wording)
2. **Enter the Space details** — **Space Details** fields
3. **Create the Space** — **Create Space**; reader sees Space ready to deploy into

## Troubleshooting
<details> Team not in dropdown … </details>
```