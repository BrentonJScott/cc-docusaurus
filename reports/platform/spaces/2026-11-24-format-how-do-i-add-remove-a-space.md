# Format report: how-do-i-add-remove-a-space

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/spaces/how-do-i-add-remove-a-space.md`
- **Doc type:** how-to
- **Feature:** Add and remove a space
- **Goal:** Expect to see the space created and then removed
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/space-name.png Image missing in static/: /gitbook-assets/platform/platform/spaces/remove-space.png Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/space-name.png Image missing in static/: /gitbook-assets/platform/platform/spaces/remove-space.png Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/ Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-add-remove-a-space-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/space-name.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/space-name.png
- Image missing in static/: /gitbook-assets/platform/platform/spaces/remove-space.png
- Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/space-name.png
- Image missing in static/: /gitbook-assets/platform/platform/spaces/remove-space.png
- Broken internal link: /platform/capsules/how-do-i-add-remove-stop-capsules/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
