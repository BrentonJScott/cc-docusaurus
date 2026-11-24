---
slug: "/products/backend-capsule/add-procfile"
title: "Add a Procfile to a Backend Capsule"
description: >-
  How to add a Procfile to a Backend Capsule on Code Capsules to define which processes run and how they start. Optional, but useful for custom commands.
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Add a Procfile to a Backend Application

A Procfile tells the Backend Capsule which processes to run and how to start them. While Procfiles aren't required on Code Capsules, you can provide one to define custom startup behavior for your application.

Instead of using a Procfile, you can specify build and run commands directly in the Code Capsules UI. For example, the screenshot below shows how to enter a run command for a Node.js application.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/products/backend-capsule/deploy', label: '🛠️ Backend Capsule', description: 'Create the Capsule first.'},
  ]}
/>


## Procfile Naming and Location

A Procfile is a plain text file. It must be named exactly `Procfile`, with no extensions (like `.txt` or `.py`) and with an uppercase **P**. The name is case-sensitive, so `procfile` will not work.

The Procfile must be placed in the root directory of your project. It won't work in any other location.

## Procfile Processes

The Procfile defines the processes that a Backend Capsule must run before deploying a backend application. Common process types include `web`, `worker`, and `clock`.

Each process type must be paired with the command that should be used to run it. You can use the command to specify the port the process must run on and other process-specific options.

## Procfile Format

The Procfile uses a key-value format, with each line defining a process type and its corresponding command, as shown below:

```
<process type>: <command>
```

## Example Procfile for Flask

Code Capsules only requires a Procfile for Python applications. Here is an example of how a Procfile for a Flask application might look:

```
web: python3 -m flask run --host=0.0.0.0 --port=$PORT
```

## Procfiles for Other Languages

Express and Java applications don't need a Procfile to be deployed. The Backend Capsule automatically detects the application type and runs the appropriate processes.
## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>Changes did not save</summary>

Refresh the Capsule page and confirm you clicked **Save** on the correct section. Some changes start a rebuild or redeploy that takes a few minutes.

</details>
