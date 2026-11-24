# Walkthrough: connect-version-control

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/account/connect-version-control.md`
- **Feature:** Connect GitHub or GitLab
- **Goal:** Expect Git repositories in the **Git Repository** dropdown when creating a Capsule
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Signed-in account — existing session.
2. Open **Repos** on Personal Team (`/dash/teams/personal-team/repos`).
3. **(not testable)** **Install** next to **GitHub** — GitHub already connected; team repo list shows multiple `BrentonJScott/*` repositories.
4. **(not testable)** **Only select repositories** on GitHub — OAuth install flow not re-run during audit (already authorized).
5. Start **New Capsule** (Backend), advance to **Configure** → **Git Repository**, open the repository dropdown and search `demo-express`.
6. Confirm repositories such as `BrentonJScott/demo-express-js` appear in the list.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account prerequisite | Active session |
| 2 | pass | Open **Repos** in dashboard | Team **Repos** page loaded with shared repositories |
| 3 | not testable | Click **Install** for GitHub | Connection already present; no **Install** control shown |
| 4 | not testable | GitHub **Only select repositories** | Not re-run |
| 5 | pass | **New Capsule** → **Configure** → **Git Repository** | Wizard label is **Git Repository** with **Search/Select a Repository** dropdown |
| 6 | pass | Selected repos listed | Multiple team repos including `BrentonJScott/demo-express-js` |

## Mismatches / issues

1. **Repos entry point:** Guide says dashboard **Repos**; reachable via team **Repos** tab and overview **Repos** nav (both work).

## Suggested fixes

- Note that **Repos** may be opened from the team context or overview navigation when GitHub is already connected.
- Document the wizard field label **Search/Select a Repository** alongside **Git Repository**.