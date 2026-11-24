# Format report: how-do-i-add-team-members

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/teams/how-do-i-add-team-members.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add team members

**Goal:** Expect to see the invited member in the team's member list

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [remove] (# Add Team Members) Intro only.
2. [goal] ((body)) **+ (Add Member)**, emails, **Invite Team Members**.
3. [remove] ((body)) Closing line and image; no confirmation of member list.
4. [prerequisite] ((missing)) Team must exist (not stated in Prerequisites).

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | No ## Steps; last step does not state member appears in list. |
| Prerequisites | fail | Missing ## Prerequisites and DocCardList for account and existing team. |
| Links | fail | Image /gitbook-assets/platform/add-team-member.png missing from static/. |
| Format and style | fail | Missing doc_version, sidebar_label, Troubleshooting, numbered steps. |

## Tickets

### how-do-i-add-team-members-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** Single prose block with one image.
- **Rule:** how_to_format.md
- **Change:** Full template: Prerequisites (account, team), ## Invite members to your team with numbered steps ending with member visible in list, Troubleshooting.
- **Done when:** Template sections present and Check 4 passes.

### how-do-i-add-team-members-2: Add step confirming member in list.

- **Type:** Missing goal step
- **Title:** Add step confirming member in list.
- **Problem:** Ends with "Your Team is now ready to collaborate" without list verification.
- **Rule:** FORMAT.MD Check 1 How-to
- **Change:** Final step: open member list and see invited email/status.
- **Done when:** Last step matches DOCUMENTED_FEATURES goal.

### how-do-i-add-team-members-3: Remove missing screenshot.

- **Type:** Broken link
- **Title:** Remove missing screenshot.
- **Problem:** /gitbook-assets/platform/add-team-member.png not in static/.
- **Rule:** writing_style.md
- **Change:** Remove image.
- **Done when:** Link check passes.


## Proposed outline

## Prerequisites
## Invite members to your team
## Troubleshooting
