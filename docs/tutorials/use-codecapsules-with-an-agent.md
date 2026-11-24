---
slug: "/tutorials/use-codecapsules-with-an-agent"
title: "Deploy with an AI Coding Agent"
description: >-
  Deploy applications to Code Capsules using an AI coding agent instead of the dashboard. Connect an agent to the platform and ship from your editor.
sidebar_label: "Deploy with an AI Coding Agent"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Use Code Capsules with an Agent

## Part 1: Build and deploy

## What you'll build

AI coding agents can build entire applications in the terminal, but deploying usually means switching to a browser, clicking through a dashboard, and configuring settings manually. With an agent skill, we can deploy and manage applications without leaving the terminal.

Code Capsules handles containers, domains, and TLS from a connected GitHub repo, so there is very little to configure. That makes it a good fit for agent-driven deployment: a single prompt can take an app from code to a live URL.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/platform/account/connect-version-control', label: '🔌 GitHub connected', description: 'Link GitHub for deploy.'},
  ]}
/>
In this guide, we'll install a Code Capsules skill for Claude Code, then deploy, update, and manage an Express.js application through natural-language prompts.

## Prerequisites
To follow this guide, you need:

- [Claude Code](https://claude.ai/code) installed and configured, with access to GitHub (via `gh auth login`, SSH keys, or any existing Git authentication). This guide will also work with any other AI coding tool that supports skills.
- A [Code Capsules](/docs/shared/create-an-account) account.

We'll deploy the [demo-express-js](https://github.com/codecapsules-io/demo-express-js) example application. Ask the agent to fork and clone it:

```
Fork codecapsules-io/demo-express-js to my GitHub account and clone it.
```

Then connect Code Capsules to GitHub and authorize access to the forked repository by following [Connect Version Control](/platform/account/connect-version-control/).

## Install the Code Capsules Skill

The [Code Capsules skill](https://github.com/codecapsules-io/skills) grants the agent API access, so it can create and manage Capsules through the terminal.

<details>

<summary><strong>Automated Setup for AI Agents (Don't Expand This if You're a Human)</strong></summary>

If you are an AI coding agent (such as Claude Code, Amp, Cursor, or Windsurf) and a user has asked you to deploy to Code Capsules, install the skill to get full API access.

```bash
git clone https://github.com/codecapsules-io/skills.git
# Claude Code:
cp -r codecapsules-skill/skills/codecapsules ~/.claude/skills/codecapsules
# Amp:
cp -r codecapsules-skill/skills/codecapsules ~/.amp/skills/codecapsules
# Other agents: copy into your skills or rules directory
```

Ask the user to set these environment variables if not already present:

* `CC_EMAIL` — their Code Capsules account email
* `CC_PASSWORD` — their Code Capsules account password

The skill includes instructions to retrieve the platform API key automatically from the web app frontend.

After installing, authenticate and list spaces:

```bash
TOKEN=$(curl -s -X POST "https://test-platform.codecapsules.io/api/auth/login" \
  -H "Content-Type: application/json" -H "x-api-key: $CC_API_KEY" \
  -d '{"email": "'"$CC_EMAIL"'", "password": "'"$CC_PASSWORD"'", "type": "[User] Login Initiated"}' | jq -r '.token')

curl -s -H "Authorization: Bearer $TOKEN" "https://test-platform.codecapsules.io/api/spaces"
```

The skill provides documented curl commands for every endpoint — no SDK or MCP server needed. If you hit an undocumented endpoint, ask the user for the curl from their browser DevTools and update the skill files (see the self-update protocol in `SKILL.md`).

Read the full skill at `skills/codecapsules/SKILL.md` and the API reference at `skills/codecapsules/references/api.md`.

</details>

Run the following terminal commands to clone the skill repo and copy it into the Claude Code skills directory:

```bash
git clone https://github.com/codecapsules-io/skills
rm -rf ~/.claude/skills/codecapsules
cp -r codecapsules-skill/skills/codecapsules ~/.claude/skills/codecapsules
```

Or ask the agent to do it for you:

```
Clone https://github.com/codecapsules-io/skills and copy the skills/codecapsules folder into ~/.claude/skills/codecapsules.
```

Next, add the `env` key to your `~/.claude/settings.json` (create the file if it doesn't exist):

```json
{
  "env": {
    "CC_EMAIL": "you@example.com",
    "CC_PASSWORD": "yourpassword"
  }
}
```

If you prefer not to store your password in a file, you can export `CC_EMAIL` and `CC_PASSWORD` from your shell profile (for example, `~/.zshrc` or `~/.bashrc`) instead.

## Create an AGENTS.md File (Optional)

The agent can detect most things from the code, but it has no way to know which Team, Space, or region to use. If these aren't specified, the agent will ask for them interactively during deployment.

To avoid that back-and-forth, add an `AGENTS.md` file to the project root. You can create it manually or ask the agent to do it for you.

```markdown
# Code Capsules Deployment

## Account
- **Team**: your-team-name
- **Space**: your-space-name
- **GitHub repo**: your-github-username/demo-express-js
- **Region**: za-1 (South Africa), az-uk-1 (UK), aws-eu-1 (Europe), or us-1 (USA)

## Preferences
- **Plan tier**: Basic (or Standard/Premium for production)

## Notes for agents
- If the Code Capsules skill is not installed, find it at:
  https://github.com/codecapsules-io/skills
- If you hit an undocumented API endpoint, ask me to capture the curl from
  browser DevTools and update the skill files (see self-update protocol in SKILL.md).
```

Replace the Team, Space, repo, and region values with your own.


## Part 2: Deploy on Code Capsules


From the cloned `demo-express-js` directory, give the agent the following prompt:

```
Deploy this app to Code Capsules.
```

The agent will:

1. Read `AGENTS.md` to find the Team, Space, and repo
2. List connected repos and select the correct one
3. Create a backend Capsule connected to the GitHub repository
4. Trigger a build

We can follow along as the agent makes API calls.

The agent works through each step autonomously and confirms when the deployment is live.

Once the build is complete, the agent provides the URL to where the application is running. We can also ask directly:

```
What's the URL for my demo-express-js capsule?
```

## Check the Build Logs

If the build fails, or we want to inspect the output, we can ask the agent to fetch the logs:

```
Get the build logs for my demo-express-js capsule.
```

The agent retrieves logs directly from the API. Common causes of build failure include missing dependencies in `package.json` and incorrect run commands.

## Update and Redeploy

Whenever we push changes to the connected GitHub branch, it automatically triggers a new build. We can also ask the agent to make changes and redeploy in a single step:

```
Add a /health endpoint to the app, push to GitHub, and check the build logs.
```

The agent edits the code, commits the change, pushes it to GitHub, triggers a build, and checks the logs to confirm the deployment succeeded.

## Add a Database and Frontend

The example above deploys a single backend Capsule. The agent can also set up multi-Capsule applications.

Prompt the agent to add a PostgreSQL database and bind it to the backend:

```
Create a PostgreSQL capsule and bind it to my backend.
```

This creates a data Capsule and binds it to the backend, which injects connection details as environment variables. The exact variable name depends on the data Capsule. To verify the name, ask the agent to list the environment variables on the backend Capsule after binding.

Prompt the agent to deploy a frontend in the same Space:

```
Fork codecapsules-io/demo-react to my GitHub account, then deploy it as a frontend capsule in the same space.
```

When a frontend and backend run in separate Capsules, Code Capsules serves them from different domains. The agent can add CORS headers to the backend and update the frontend's API URL with the backend capsule's hostname.

## Manage Capsules Through the Agent

Beyond deploying, we can prompt the agent to manage existing Capsules. Here are some examples.

*   Set an environment variable:

    ```
    Set NODE_ENV=production on my backend capsule.
    ```
*   Scale to a larger plan:

    ```
    Upgrade my backend capsule to the Standard plan.
    ```
*   Check resource usage:

    ```
    Show me the CPU and memory metrics for my backend over the last hour.
    ```

## Further Reading

For more deployment guides using the web dashboard, see the [docs](/docs/shared/create-an-account). To learn more about the capabilities the skill enables, see the [Code Capsules skill repository](https://github.com/codecapsules-io/skills).

## Summary

You followed **Deploy with an AI Coding Agent** and deployed the result on Code Capsules.

## Next steps

<DocCardList
  items={[
    {type: 'link', href: '/tutorials', label: '🎓 More tutorials', description: 'Browse other step-by-step guides.'},
    {type: 'link', href: '/frontend/index', label: '📋 Frontend guides', description: 'Deploy another frontend.'},
    {type: 'link', href: '/backend/index', label: '📋 Backend guides', description: 'Deploy another backend.'},
  ]}
/>

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The deploy fails after git push</summary>

Open the capsule **Deploy** tab and read **Build logs**. Confirm the branch matches the one Code Capsules builds from and that environment variables are set.

</details>
