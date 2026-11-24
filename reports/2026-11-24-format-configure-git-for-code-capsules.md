# Format check — Configure Git for Code Capsules

- **Run:** 2026-11-24T07:58:00Z
- **Doc file:** `docs/e/configure-git-for-code-capsules.md`
- **Doc type:** How-to guide
- **Template:** `HOW_TO_FORMAT.MD`
- **Feature:** Configure Git for Code Capsules
- **Goal (manifest):** Expect to see your repository in the Repos tab
- **Format check:** fail

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|--------|---------|-------------|
| 1 | remove | intro | Why GitHub must be connected |
| 2 | prerequisite | ## Steps (item 1) | Start from capsule wizard **Connect a Git Repository** |
| 3 | goal | ## Steps (item 2–3) | GitHub OAuth / grant access |
| 4 | goal | ## Steps (item 4) | Repository listed in **Git Repository** dropdown |

## Check results

| Check | Status | Reason |
|--------|--------|--------|
| Step 1: Doc type | pass | Single connection task. |
| Check 1: Content (goal steps) | fail | Starting inside the wizard assumes capsule flow not stated as prerequisite; closing text cites **Git Repository** dropdown, not **Repos** tab from manifest. |
| Check 2: Prerequisites | fail | Missing **## Prerequisites** (account, fork, Space, and reaching the wizard). |
| Check 3: Links | pass | No broken internal links. |
| Check 4: Format and style | fail | Plain numbered list; missing **Troubleshooting**. |

## Tickets

### configure-git-for-code-capsules-1

- **Type:** Move to prerequisites
- **Title:** Prerequisite capsule wizard entry.
- **Problem:** Step 1 assumes reader is already on **Connect a Git Repository**.
- **Rule:** `FORMAT.MD` Check 1.
- **Change:** **Prerequisites** links: account, fork, Space; optional link to a frontend how-to for “open **Connect a Git Repository**”. **Steps** start at **Configure Git for Code Capsules**.
- **Done when:** Reader can start from prerequisites only.

### configure-git-for-code-capsules-2

- **Type:** Missing goal step
- **Title:** Align goal with manifest **Repos** tab.
- **Problem:** Doc ends on wizard dropdown; manifest expects repository under **Repos** tab.
- **Rule:** `FORMAT.MD` Check 1 — intro/last step must match feature goal (or document which UI is correct).
- **Change:** Verify product UI: either update text to **Repos** tab or update manifest. Final step must match verified UI.
- **Done when:** Goal wording and UI match.

### configure-git-for-code-capsules-3

- **Type:** Format fix
- **Title:** Template sections and `### Step N`.
- **Problem:** Missing **Troubleshooting** and step headings.
- **Rule:** `HOW_TO_FORMAT.MD`.
- **Change:** Restructure steps; add troubleshooting for empty dropdown after OAuth.
- **Done when:** How-to template satisfied.

## Proposed outline

```md
## Prerequisites
- Account, fork, Space; reader at **Connect a Git Repository** in the wizard

## Steps
### Step 1: Open Configure Git for Code Capsules
### Step 2: Grant GitHub access
### Step 3: Confirm repository in Repos (or dropdown)

## Troubleshooting
### Repository still missing after OAuth
```