# Walkthrough: add-procfile

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/backend-capsule/add-procfile.md`
- **Feature:** Add a Procfile to backend capsule
- **Goal:** Expect to see the capsule start with the process from the Procfile
- **Environment:** https://test-platform.codecapsules.io
- **Capsules used:** `demo-java` (Backend, **Document Drift**); account has no Python/Flask/Django backend capsule
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, Space, Backend Capsule) — logged-in session; used **demo-java** and backend wizard in **Document Drift**; no existing Python backend capsule to inspect Procfile runtime.
2. Verify guide intro: build/run commands can be set in the UI instead of a Procfile — opened **demo-java** → **Config**; **Build** shows **Project Path** and **Run Command** (same pattern as [configure walkthrough](./walkthrough-configure.md) on **call-health-endpoint**).
3. **(not testable)** Place a root `Procfile` (exact name, no extension) — requires editing the Git repo; confirmed `codecapsules-io/demo-django` and `codecapsules-io/demo-python` both ship a root `Procfile` on GitHub.
4. **(not testable)** Use Procfile line format `<process type>: <command>` and Flask example — reference text only; upstream `demo-python` Procfile is `web: gunicorn pythonDemo:app`, not the guide’s `python3 -m flask run` example.
5. Deploy a Python Backend Capsule from a fork whose repo contains a Procfile, with **Run Command** left empty (per [Flask host guide](../../backend/python/walkthrough-flask.md)) — **New Capsule** → **Backend** → **Git Repository**, search `demo-python`; dropdown returns **No items found** (no connected `demo-python` fork). Screenshot: [failure-step-5.jpg](./failure-step-5.jpg).
6. **(blocked)** Confirm capsule **running** and **Logs** show the Procfile command (e.g. gunicorn or `flask run`) — depends on action 5.
7. Verify guide claim that Java apps do not need a Procfile — **demo-java** lists **running** in **Document Drift** without a Procfile-based deploy path in this guide.
8. **(not testable)** Troubleshooting (**Refresh**, **Save** on correct section) — not exercised.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + **demo-java**; no Python backend |
| 2 | pass | Optional **Run Command** in UI | **Config** → **Build** exposes **Run Command** |
| 3 | not testable | Root `Procfile` naming/location | Verified on public demo repos only |
| 4 | not testable | Format + Flask example line | Textual; upstream demos differ from Flask snippet |
| 5 | fail | Python deploy uses repo Procfile when **Run Command** empty | `demo-python` not in **Git Repository** search ([failure-step-5.jpg](./failure-step-5.jpg)) |
| 6 | blocked | Capsule starts with Procfile process | No Python backend created |
| 7 | pass | Java does not require Procfile | **demo-java** **running** |
| 8 | not testable | Troubleshooting save/refresh | Not attempted |

## Mismatches / issues

1. **Goal (actions 5–6):** Manifest goal requires observing a running Python backend started via Procfile; account has no Python/Flask/Django backend capsule, and `demo-python` is not available in the deploy wizard ([failure-step-5.jpg](./failure-step-5.jpg)).
2. **Guide scope:** Page explains Procfile format and Python requirement but has no deploy or **Config** steps to reach the manifest goal (only prerequisites cards and conceptual sections).
3. **Flask example vs demos:** Guide shows `web: python3 -m flask run --host=0.0.0.0 --port=$PORT`; `codecapsules-io/demo-python` uses gunicorn instead — readers forking that repo will not match the example verbatim.
4. **Related repo availability:** Personal Team **Repos** lists `demo-django` but not `demo-python`; Flask-oriented walkthroughs hit the same wizard blocker.

## Suggested fixes

- Add a short **Verify** section: deploy via [Host Your Flask Application](/backend/python/flask) (or Django) with **Run Command** empty, then open **Logs** and confirm the Procfile command.
- Link to [Configure](/products/backend-capsule/configure) for the **Run Command** alternative shown in the intro.
- Align the Flask Procfile example with `codecapsules-io/demo-python` or note gunicorn vs `flask run` for the official demo.
- Prerequisites: state that a `demo-python` or `demo-django` fork must appear under **Git Repository** (fork + GitHub app), matching Flask/Python deploy guides.