# Format report

- **Doc file:** `docs/tutorials/video-guides.md`
- **Doc type:** Tutorial (legacy layout)
- **Template:** `tutorial_format.md`
- **Feature:** Video Tutorials — Deploy Apps Step by Step
- **Goal:** Expect every video on the page to play
- **Format check:** fail

## Content list

(Abbreviated.) Legacy tutorial: nested `###`/`####` under Parts, prerequisites repeated inside Part 1, long prose, and/or missing continuous numbered build steps with checkpoints per part.

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | Build steps not one numbered list per Part; extra prerequisite/setup sections inside parts |
| Check 2: Prerequisites | fail | Prerequisites not consolidated; links to `/platform/account/connect-version-control` or missing shared pages |
| Check 3: Links | fail | Broken `/frontend/react`; wrong type (not Reference/Tutorial/How-to template). |
| Check 4: Format and style | fail | Section order, checkpoints, Summary/Next steps, or title/description rules broken |

## Tickets

### video-guides-1

- **ID:** video-guides-1
- **Type:** Format fix
- **Title:** Rewrite to tutorial_format.md
- **Problem:** Part structure uses nested headings instead of numbered `build` steps; checkpoints missing or not at end of every part.
- **Rule:** `tutorial_format.md` Parts; `FORMAT.MD` Check 1 Tutorial
- **Change:** Consolidate Prerequisites to DocCardList only; split into 2–5 `## Part N` sections with continuous numbering, `:::tip[Checkpoint]` at each part end, deploy on Code Capsules in last part; fix broken internal links to `/docs/...`.
- **Done when:** Template section table matches and walkthrough goal is reachable from steps alone.


### video-guides-2

- **ID:** video-guides-2
- **Type:** Wrong doc type
- **Title:** Retype as Reference or remove pseudo-How-to sections
- **Problem:** Page has Prerequisites, Overview, Videos, Related, and empty Troubleshooting—not tutorial or reference template.
- **Rule:** FORMAT.MD Step 1
- **Change:** Use Reference template (Overview + video table + Related) without Prerequisites/Troubleshooting deploy wording.
- **Done when:** One doc type throughout.

## Proposed outline

See `formats/tutorial_format.md` template with What you'll build, Prerequisites, Part 1–N with checkpoints, Summary, Next steps, optional Troubleshooting.
