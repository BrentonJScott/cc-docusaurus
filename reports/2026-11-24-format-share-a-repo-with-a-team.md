# Format report: share-a-repo-with-a-team

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/teams/share-a-repo-with-a-team.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Share a repo with a team

**Goal:** Expect to see the repo available to team members when creating a capsule

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [prerequisite] (# Share a Repo With a Team) Version control linked (inline link, not Prerequisites).
2. [goal] ((body)) **Share repositories with Team**, toggle repos, **Share Repos**.
3. [remove] ((body)) Image only.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | No steps section; goal verification (repo in capsule wizard) missing. |
| Prerequisites | fail | Git connection explained inline instead of DocCardList to shared/configure docs. |
| Links | fail | Missing image in static/. |
| Format and style | fail | Missing doc_version, sidebar_label, Troubleshooting, steps format. |

## Tickets

### share-a-repo-with-a-team-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** One paragraph plus image.
- **Rule:** how_to_format.md
- **Change:** Prerequisites: account, GitHub connected (/docs/shared/configure-git-for-code-capsules), team; steps through sharing and verifying repo in capsule creation; Troubleshooting.
- **Done when:** Format check passes.

### share-a-repo-with-a-team-2: Move Git connection out of intro.

- **Type:** Move to prerequisites
- **Title:** Move Git connection out of intro.
- **Problem:** Intro links /platform/account/connect-version-control/ inline.
- **Rule:** how_to_format.md Prerequisites
- **Change:** Prerequisite card only.
- **Done when:** Intro is end-state only.

### share-a-repo-with-a-team-3: Remove missing screenshot.

- **Type:** Broken link
- **Title:** Remove missing screenshot.
- **Problem:** /gitbook-assets/platform/add-repo.png missing.
- **Rule:** writing_style.md
- **Change:** Remove image.
- **Done when:** Images resolve or absent.


## Proposed outline

## Prerequisites
## Share repositories with your team
## Troubleshooting
