# Format report: platform

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/platform.md`
- **Doc type:** index
- **Feature:** View platform overview
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | not applicable |  |
| Links | fail | Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png Broken internal link: /platform/teams/what-is-a-team/ Broken internal link: /platform/spaces/what-is-a-space/ Broken internal link: /platform/capsules/what-is-a-capsule/ Index has no DocCardList or link table for manifest goal. |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png Broken internal link: /platform/teams/what-is-a-team/ Broken internal link: /platform/spaces/what-is-a-space/ Broken internal link: /platform/capsules/what-is-a-capsule/ Index has no DocCardList or link table for manifest goal. |

## Tickets

### platform-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png
- **Rule:** writing_style.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png
- Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png
- Broken internal link: /platform/teams/what-is-a-team/
- Broken internal link: /platform/spaces/what-is-a-space/
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Index has no DocCardList or link table for manifest goal.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png
- Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png
- Broken internal link: /platform/teams/what-is-a-team/
- Broken internal link: /platform/spaces/what-is-a-space/
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Index has no DocCardList or link table for manifest goal.
