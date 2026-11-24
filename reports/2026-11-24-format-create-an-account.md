# Format check — Create a Code Capsules Account

- **Run:** 2026-11-24T07:58:00Z
- **Doc file:** `docs/e/create-an-account.md`
- **Doc type:** How-to guide
- **Template:** `HOW_TO_FORMAT.MD`
- **Feature:** Create a Code Capsules account
- **Goal (manifest):** Expect to open dashboard after sign up or login
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro (under title) | “Every guide needs a Code Capsules account…” |
| 2 | goal | ## Steps (item 1) | Open site and click **Sign Up** |
| 3 | goal | ## Steps (item 2) | Enter details or **Log in** |
| 4 | goal | ## Steps (item 3) | First login: click **Go To Personal Team** |
| 5 | remove | ## Steps (paragraph) | Explains **Personal Team** (not an action toward dashboard) |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single sign-up task; treated as How-to. |
| Check 1: Content (goal steps) | fail | Non-goal paragraph sits inside **Steps**; last step does not state dashboard/Quick Start as the goal outcome. |
| Check 2: Prerequisites | fail | Missing **## Prerequisites** (section required even when empty). |
| Check 3: Links | pass | No broken internal links or images. |
| Check 4: Format and style | fail | No `### Step N` headings; missing **Troubleshooting**; **Steps** is a plain numbered list. |

## Tickets

### create-an-account-1

- **Type:** Format fix
- **Title:** Restructure to `HOW_TO_FORMAT.MD` section table.
- **Problem:** Page has only `## Steps` with a numbered list; no **Prerequisites**, **Troubleshooting**, or `### Step N` headings.
- **Rule:** `HOW_TO_FORMAT.MD`, Sections table.
- **Change:** Add **## Prerequisites** (or “None” bullet if truly none). Replace the list with `### Step 1`–`### Step N` imperatives. Add **## Troubleshooting** with at least one entry.
- **Done when:** Headings match the template order; each step has a title heading.

### create-an-account-2

- **Type:** Missing goal step
- **Title:** End on dashboard goal from manifest.
- **Problem:** Steps stop at **Go To Personal Team** without saying the reader should see the dashboard or Quick Start.
- **Rule:** `FORMAT.MD` Check 1 — last step must show the manifest goal.
- **Change:** Final step text: confirm landing on the dashboard (for example **Quick Start**) after sign-up or login.
- **Done when:** Goal sentence matches `DOCUMENTED_FEATURES.MD`.

### create-an-account-3

- **Type:** Remove content
- **Title:** Move team explanation out of **Steps**.
- **Problem:** Closing paragraph in **Steps** describes what a Team is without an action.
- **Rule:** `FORMAT.MD` Check 1 — `remove` content must not appear in **Steps**.
- **Change:** Delete the paragraph or move a one-line note to an Explanation page and link from **Next steps**.
- **Done when:** **Steps** contains only actions.

## Proposed outline

```md
## Prerequisites
- (None, or third-party items only)

## Steps
### Step 1: Sign up or log in
### Step 2: Open your Personal Team dashboard
(ends with dashboard visible)

## Troubleshooting
### (symptom)

## Next steps
- Links to **Create a Space**, etc.
```