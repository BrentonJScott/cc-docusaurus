# New guide report: Deploy a Flask + HTMX App

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/full-stack/flask-+-htmx.md`
- **Doc type**: How-to guide
- **Slug**: `/full-stack/flask-+-htmx`
- **Feature**: Deploy a Flask + HTMX App
- **Goal**: Expect to Deploy a full-stack Flask and HTMX app to Code Capsules from GitHub. Server-rendered interactivity without a JS framework, step by step
- **Guide status**: missing (no file at `docs/full-stack/flask-+-htmx.md`)
- **Exploration**: Desk review using archived draft in `docs.bak` and capsule-wizard patterns from existing guides; browser walkthrough not run for this batch.

## Steps explored

1. Fork the demo repository
2. Deploy the backend Capsule
3. Provision and bind data services
4. Confirm the full-stack app loads

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and archived draft)

## Tickets

### flask-+-htmx-ng-1

- **ID**: flask-+-htmx-ng-1
- **Type**: New guide
- **Title**: Add `docs/full-stack/flask-+-htmx.md` for Deploy a Flask + HTMX App.
- **Problem**: `docs/full-stack/flask-+-htmx.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect to Deploy a full-stack Flask and HTMX app to Code Capsules from GitHub. Server-rendered interactivity without a JS framework, step by step
- **Change**: Create `docs/full-stack/flask-+-htmx.md` as a how-to guide with slug `/full-stack/flask-+-htmx`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/full-stack/flask-+-htmx.md`
- **Proposed slug**: `/full-stack/flask-+-htmx`
- **Goal**: Expect to Deploy a full-stack Flask and HTMX app to Code Capsules from GitHub. Server-rendered interactivity without a JS framework, step by step
- **Outline**:

```
# Host Your Flask HTMX Application
Expect to Deploy a full-stack Flask and HTMX app to Code Capsules from GitHub. Server-rendered interactivity without a JS framework, step by step

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Complete the guide
1. **Fork the demo repository** — step detail from platform UI labels
2. **Deploy the backend Capsule** — step detail from platform UI labels
3. **Provision and bind data services** — step detail from platform UI labels
4. **Confirm the full-stack app loads** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/full-stack/flask-+-htmx.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
