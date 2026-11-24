# Format report — how-to-simply-host-a-production-wordpress-blog

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Host a Production WordPress Blog
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`explain`) under `Troubleshooting` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### how-to-simply-host-a-production-wordpress-blog-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** tutorial_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### how-to-simply-host-a-production-wordpress-blog-2
- **Type:** Format fix
- **Title:** Add checkpoint to Part 1
- **Problem:** Part 1 has no ### Checkpoint.
- **Rule:** tutorial_format.md
- **Change:** Add checkpoint describing what reader sees.
- **Done when:** Every part ends with checkpoint.

### how-to-simply-host-a-production-wordpress-blog-3
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` to match tutorial_format.md — see tickets above.)
