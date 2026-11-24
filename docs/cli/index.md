---
slug: "/cli"
title: "CLI Overview and Commands"
description: >-
  The official Command Line Interface to enable you to interact with Code
  Capsules directly through your terminal.
sidebar_label: "CLI"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Code Capsules CLI

The official Command Line Interface to interact with Code Capsules from your terminal.

## Overview

Install the `codecaps` CLI globally with npm, authenticate with `login`, then run commands such as `proxy` against Capsules in your Spaces. Global options apply to every command.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Getting Started</strong></td><td>Become introduced and familiar with the CLI</td><td><a href="/cli/readme/getting-started/installation-and-usage/">installation-and-usage.md</a></td></tr><tr><td><strong>Installation and Usage</strong></td><td>How to install and use the Code Capsules CLI</td><td><a href="/cli/readme/getting-started/quick-start/">quick-start.md</a></td></tr><tr><td><strong>Commands List</strong></td><td>View the commands available to the Code Capsules CLI</td><td><a href="/cli/readme/commands/">commands</a></td></tr><tr><td><strong>Proxy Command</strong></td><td>Proxy a Capsule to your local machine</td><td><a href="/cli/readme/commands/proxy/">proxy.md</a></td></tr></tbody></table>

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started', label: '🚀 Getting started', description: 'Install the CLI and run your first command.'},
    {type: 'link', href: '/cli/readme/commands', label: '📋 Commands', description: 'Reference for login, logout, proxy, and whoami.'},
    {type: 'link', href: '/cli/readme/global-options', label: '⚙️ Global options', description: 'Log level and other flags for every command.'},
  ]}
/>