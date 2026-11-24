# Format report: how-do-i-add-remove-teams

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/teams/how-do-i-add-remove-teams.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add and remove a team

**Goal:** Expect to see the team created and then removed

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [remove] (# Add and Remove Teams) Intro repeats description; not end-state focused.
2. [goal] (## Add a Team) Click **+**, **New Team**, name team, **I Like It!**
3. [remove] (## Add a Team) Screenshot images.
4. [goal] (## Remove a Team) Details tab → **Remove Team**.
5. [prerequisite] (## Remove a Team) Remove all Spaces before delete (admonition + link).

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | Goal steps sit under ## Add a Team / ## Remove a Team, not a single ## Steps section; removal prerequisite inside steps area. |
| Prerequisites | fail | No ## Prerequisites or DocCardList; account and space removal not linked. |
| Links | fail | Three /gitbook-assets/ images missing from static/. |
| Format and style | fail | Missing doc_version, DocCardList, steps heading, Troubleshooting; images and admonition in body; position-based UI ("yellow +", bottom-left). |

## Tickets

### how-do-i-add-remove-teams-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** Page uses ## Add a Team and ## Remove a Team with prose and images instead of Prerequisites, ## Create and remove your team, and Troubleshooting.
- **Rule:** how_to_format.md, Sections table
- **Change:** Add frontmatter fields, DocCardList import, ## Prerequisites (account; link remove-spaces prerequisite to space how-to), one steps section with numbered bold-step titles for create then remove, ## Troubleshooting with details blocks; remove images.
- **Done when:** Headings match template order; format re-check passes Check 4.

### how-do-i-add-remove-teams-2: Move Space removal requirement to Prerequisites.

- **Type:** Move to prerequisites
- **Title:** Move Space removal requirement to Prerequisites.
- **Problem:** :::warning under ## Remove a Team explains removing Spaces first.
- **Rule:** FORMAT.MD Check 2; how_to_format.md Prerequisites
- **Change:** Replace admonition with a prerequisite card linking to the space removal guide.
- **Done when:** No admonition in steps; prerequisite appears only in ## Prerequisites.

### how-do-i-add-remove-teams-3: Remove or relocate gitbook images.

- **Type:** Broken link
- **Title:** Remove or relocate gitbook images.
- **Problem:** Images reference /gitbook-assets/platform/new-team-1.png, create-team-1.png, platform/teams/remove-team.png.
- **Rule:** writing_style.md Links and images
- **Change:** Remove screenshots until img/ assets exist in static/.
- **Done when:** No image references to missing static files.


## Proposed outline

## Prerequisites (DocCardList: account)
## Create and remove your team (steps: create team; remove team after spaces cleared)
## Troubleshooting (cannot remove team; team not visible)
