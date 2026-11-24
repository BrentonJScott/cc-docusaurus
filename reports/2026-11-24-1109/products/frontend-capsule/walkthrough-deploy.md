# Walkthrough: deploy (frontend-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/frontend-capsule/deploy.md`
- **Features:** Create static hosting frontend capsule; Create container hosting frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **no**

## Actions taken

`deploy.md` is a framework index (links only, no capsule wizard steps). Per feature mapping, the static and container paths from linked product guides were exercised.

### Static hosting (per `static/deploy.md` path)

1. **(not testable)** Prerequisites.
2. **Document Drift** → **+** → **New Capsule**.
3. **Frontend** → **Static** hosting → **Free** plan (pass).
4. **Configure** repo — blocked at same `codecapsules-io/*` slug issue; [failure-step-5.jpg](../../frontend/failure-step-5.jpg).
5. **(blocked)** **Build & Deploy** and **Builds** verification.

### Container hosting (per `container/deploy.md` path)

1. Wizard → **Frontend** → **Container** hosting (pass).
2. **Plan:** **Basic** / **Standard** / **Premium** / **Custom** (no **Free**; guide expects paid plan — align).
3. Did not complete repo/configure/deploy due to time and shared repo dropdown failure pattern.

### Index page (`deploy.md` body)

1. Confirmed guide lists framework links only; no **New Capsule** instructions on this page.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| Index | not testable | Link hub to framework guides | No deploy steps on `deploy.md` |
| Static path 1–3 | pass | Wizard through **Static** + **Free** | Matches linked static deploy guide |
| Static path 4 | fail | Repository selection | Org slugs not in dropdown |
| Static path 5 | blocked | **Builds** after deploy | Not reached |
| Container path 1–2 | pass | **Container** + plan choice | **Container** works; paid plans shown |
| Container path 3+ | blocked | Full deploy + **Builds** | Repo step not completed |

## Mismatches / issues

1. **Feature guide mapping:** Manifest goals reference `deploy.md`, but deployment steps live in `/products/frontend-capsule/static/deploy` and `/container/deploy`, not on the index page.
2. **Repository dropdown:** Same `codecapsules-io/*` vs fork naming blocker as framework guides.

## Suggested fixes

- Point manifest/features at `static/deploy.md` and `container/deploy.md`, or add a short “create capsule” section to `deploy.md` that mirrors those wizards.
- Document fork repository paths in configure steps (shared with framework guides).