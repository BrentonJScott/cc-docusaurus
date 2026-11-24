# Format check — Create a Space

- **Run:** 2026-11-24T07:58:00Z
- **Doc file:** `docs/e/create-a-space.md`
- **Doc type:** How-to guide
- **Template:** `HOW_TO_FORMAT.MD`
- **Feature:** Create a Space
- **Goal (manifest):** Expect to see the new Space in the Spaces tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | Defines what a Space is |
| 2 | prerequisite | ## Steps (item 1) | Log in and open **Spaces** tab |
| 3 | goal | ## Steps (item 2–6) | **New Space**, Team, name, region, **Create Space** |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single Space creation task. |
| Check 1: Content (goal steps) | fail | Login/navigation is a `prerequisite` in **Steps**; closing step does not explicitly confirm new Space visible in **Spaces** tab. |
| Check 2: Prerequisites | fail | Account/login not linked in **## Prerequisites**; section missing. |
| Check 3: Links | pass | No broken internal links. |
| Check 4: Format and style | fail | Plain numbered list; missing **Troubleshooting**; test platform URL not used consistently with other guides. |

## Tickets

### create-a-space-1

- **Type:** Move to prerequisites
- **Title:** Move login to **Prerequisites**.
- **Problem:** Step 1 combines “Log in” with opening **Spaces**.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** **Prerequisites**: account via [Create an account](/docs/shared/create-an-account). **Steps** start at **New Space**.
- **Done when:** No login instructions in **Steps**.

### create-a-space-2

- **Type:** Format fix
- **Title:** Use `HOW_TO_FORMAT.MD` step structure.
- **Problem:** No `### Step N` or **Troubleshooting**.
- **Rule:** `HOW_TO_FORMAT.MD`.
- **Change:** Step headings; at least one troubleshooting entry (for example wrong Team).
- **Done when:** Format checklist passes.

### create-a-space-3

- **Type:** Missing goal step
- **Title:** State Spaces tab goal.
- **Problem:** Last action is **Create Space** without confirming the Space appears in the list.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** Final step: new Space name visible on **Spaces** tab.
- **Done when:** Matches `DOCUMENTED_FEATURES.MD`.

## Proposed outline

```md
## Prerequisites
- Code Capsules account (linked)

## Steps
### Step 1: Open the Spaces tab
### Step 2: Create the Space
### Step 3: Confirm it appears in the list

## Troubleshooting
### Space not listed after create
```