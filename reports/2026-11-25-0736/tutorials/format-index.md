# Format report

- **Doc file:** `docs/tutorials/index.md`
- **Doc type:** Tutorial (legacy layout)
- **Template:** `tutorial_format.md`
- **Feature:** Deployment Tutorials & Step-by-Step Guides
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

(Abbreviated.) Legacy tutorial: nested `###`/`####` under Parts, prerequisites repeated inside Part 1, long prose, and/or missing continuous numbered build steps with checkpoints per part.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Build steps not one numbered list per Part; extra prerequisite/setup sections inside parts |
| Check 2: Prerequisites | fail | Prerequisites not consolidated; links to `/platform/account/connect-version-control` or missing shared pages |
| Check 3: Links | fail | Related links to unpublished tutorials and `/frontend/index`. |
| Check 4: Format and style | fail | Section order, checkpoints, Summary/Next steps, or title/description rules broken |

## Tickets

### index-1

- **ID:** index-1
- **Type:** Format fix
- **Title:** Rewrite to tutorial_format.md
- **Problem:** Part structure uses nested headings instead of numbered `build` steps; checkpoints missing or not at end of every part.
- **Rule:** `tutorial_format.md` Parts; `FORMAT.MD` Check 1 Tutorial
- **Change:** Consolidate Prerequisites to DocCardList only; split into 2–5 `## Part N` sections with continuous numbering, `:::tip[Checkpoint]` at each part end, deploy on Code Capsules in last part; fix broken internal links to `/docs/...`.
- **Done when:** Template section table matches and walkthrough goal is reachable from steps alone.


### index-2

- **ID:** index-2
- **Type:** Broken link
- **Title:** Fix Related tutorial links
- **Problem:** Related hrefs point to docs not in this repo (`build-a-mern-job-board`, `how-to-create-and-host-a-telegram-bot-on-code-capsules`, etc.).
- **Rule:** FORMAT.MD Check 3
- **Change:** Link only published tutorial slugs or remove cards until pages exist.
- **Done when:** Each Related href resolves.

## Proposed outline

See `formats/tutorial_format.md` template with What you'll build, Prerequisites, Part 1–N with checkpoints, Summary, Next steps, optional Troubleshooting.
