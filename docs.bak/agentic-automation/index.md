---
slug: "/agentic-automation"
description: "A framework for building reliable agentic automation with git, simple code and cloud infrastructure, turning unpredictable AI into dependable automation."
title: "Agentic Automation for Business Processes"
sidebar_label: "Agentic Automation"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Automate Your Business With AI Agents

A framework for reliable agentic automation: orchestrator plus single-purpose agents, typed contracts, and git-based deployment on Code Capsules.

## Overview

AI can write code, but production automation still needs structure. This guide covers why brittle workflows fail, how an orchestrator drives ephemeral agent capsules, how to design agent boundaries, and how to deploy through git.

| Section | Page |
| --- | --- |
| The Problem | [/agentic-automation/the-problem](/agentic-automation/the-problem) |
| The Framework | [/agentic-automation/the-framework](/agentic-automation/the-framework) |
| Designing Agents | [/agentic-automation/designing-agents](/agentic-automation/designing-agents) |
| Deployment | [/agentic-automation/deployment](/agentic-automation/deployment) |

## Core ideas

| Idea | Summary |
| --- | --- |
| Determinism | Wrap LLM calls in typed steps; keep orchestration deterministic |
| Microservice agents | One agent, one task, independently deployable |
| Git as source of truth | Every change is reviewed, versioned, and reversible |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/agentic-automation/the-framework', label: '💡 The framework', description: 'Orchestrator, agents, and workflows.'},
    {type: 'link', href: '/products/agent-capsule/deploy', label: '📋 Agent Capsule', description: 'Host agents on Code Capsules.'},
    {type: 'link', href: '/tutorials/use-codecapsules-with-an-agent', label: '📚 Tutorial', description: 'Hands-on agent deployment.'},
  ]}
/>