# Format report — use-codecapsules-with-an-agent

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/use-codecapsules-with-an-agent.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Deploy with an AI Coding Agent
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`build`) under `Prerequisites` — - [Claude Code](https://claude.ai/code) installed and configured, with access to GitHub (via `gh auth login`, SSH keys, 
2. (`build`) under `Prerequisites` — - A [Code Capsules](/docs/shared/create-an-account) account.
3. (`build`) under `Account` — - **Team**: your-team-name
4. (`build`) under `Account` — - **Space**: your-space-name
5. (`build`) under `Account` — - **GitHub repo**: your-github-username/demo-express-js
6. (`build`) under `Account` — - **Region**: za-1 (South Africa), az-uk-1 (UK), aws-eu-1 (Europe), or us-1 (USA)
7. (`build`) under `Preferences` — - **Plan tier**: Basic (or Standard/Premium for production)
8. (`build`) under `Notes for agents` — - If the Code Capsules skill is not installed, find it at:
9. (`build`) under `Notes for agents` — - If you hit an undocumented API endpoint, ask me to capture the curl from

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### use-codecapsules-with-an-agent-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** tutorial_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### use-codecapsules-with-an-agent-2
- **Type:** Format fix
- **Title:** Add checkpoint to Part 1
- **Problem:** Part 1 has no ### Checkpoint.
- **Rule:** tutorial_format.md
- **Change:** Add checkpoint describing what reader sees.
- **Done when:** Every part ends with checkpoint.

## Proposed outline

(Rewrite `docs/tutorials/use-codecapsules-with-an-agent.md` to match tutorial_format.md — see tickets above.)
