---
slug: "/products/agent-capsule/deploy"
title: "How to Deploy an AI Agent"
description: >-
  Deploy a configurable Agent Capsule on Code Capsules to run AI agents in production. Set environment variables, connect a repo, and ship in minutes.
sidebar_label: Deploy
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Deploy Your AI Agent

Deploy a configurable Agent Capsule on Code Capsules.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/agent-capsule/deploy', label: '🛠️ Agent Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Set up

To follow this guide, you'll need a [Code Capsules](https://www.codecapsules.io/) account.

## Create an Account with Code Capsules

Before creating your Agent Capsule, you'll need a Team and a Space. You can follow these guides to learn how to create [Teams](/platform/teams/what-is-a-team/) and [Spaces](/platform/spaces/what-is-a-space/).

If you already have a Team and Space set up, log in to your Code Capsules account. On the dashboard, click the yellow `+` on the bottom left of the screen then click "New Capsule".

## Create the Capsule

A [Capsule](/platform/capsules/what-is-a-capsule/) provides the server for hosting an application on Code Capsules.

To create an Agent Capsule first choose "AI Agent" as the Capsule type, as well as your Team, and Space.

Next choose your payment plan, or create a custom plan.

Code Capsules provides templates (see [templates.md](/products/agent-capsule/templates/)) as a baseline for creating your AI Agent. When creating the Agent Capsule, you can select if your codebase comes from a template repo. In this case, you will be asked to enter a provider, model, and API key for a public AI provider, such as Google Gemini or Anthropic. When registering with one of these providers, they should provide an API key to access their public API's. Once the capsule is created, the templates will make use of this information via environment variables, which are automatically set up for you upon capsule creation. You can learn more about how these templates make use of these environment variables [here](/products/agent-capsule/templates/).

## Monitor Deployment

Code Capsules will automatically build and deploy your Agent Capsule. You can view the build log by selecting the "Build logs" tab to monitor the deployment progress.

Once the build is complete, use the Chat tab to interface with your newly running agent.


## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
