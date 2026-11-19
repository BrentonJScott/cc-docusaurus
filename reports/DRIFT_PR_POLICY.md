# Drift PR policy (platform guides)

Cron / document-drift automation should **open a docs-only PR** when **any** condition below is true. Do **not** require headline scores (`doc_fidelity`, `doc_completeness`) to be `fail` / `drift` / `incomplete` if observational drift still exists.

## Open a drift PR when

1. **Scoring** — `doc_fidelity` is `drift` or `fail`, or `doc_completeness` is `incomplete` (strict rule).
2. **Outcome gap** — The manifest or guide title describes an outcome that numbered steps do not reach (e.g. **Create … capsule** with steps ending at **Next** on **Capsule Details**, before **Plan** / **Configure** / deploy submit).
3. **Mismatch bullets** — Live Playwright run records any step where doc quote ≠ visible labels/copy, even if that step was scored `pass` on a partial check.
4. **Ambiguous controls** — More than one UI control matches the doc (e.g. two **+** links on **Capsules**); prose or screenshots must disambiguate.
5. **Screenshots** — Captures from the live test platform differ materially from images referenced in the guide for a numbered step.
6. **Scheduled audit artifact** — A cron run produced a report with a **Mismatches** or **Operational notes** section worth publishing; use the PR to land report + prose/screenshot fixes together.

## Skip a drift PR only when

- Manifest ↔ guide file set requires no add/remove **and**
- The run logged **no** mismatch bullets, outcome gaps, or screenshot updates **and**
- Guides already describe every control needed through the stated acceptance criteria (see per-feature notes in `cc-site/DOCUMENTED_FEATURES.MD` if present).

## Out of scope for drift PRs

- Application code changes to match stale docs (document product behavior instead).
- Direct commits to `main` (always branch + PR).

## Evidence

Each drift PR should include:

- Updated guide markdown (and `static/img/guides/…` screenshots when steps change).
- A dated file under `reports/` with summary tables and per-guide mismatch bullets from the run that motivated the PR.