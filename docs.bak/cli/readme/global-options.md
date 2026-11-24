---
slug: "/cli/readme/global-options"
description: "Global options for the Code Capsules CLI apply before every subcommand."
title: "CLI Global Options Reference"
sidebar_label: "Global Options"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Global Options for Every Command

Global options for the Code Capsules CLI apply before every subcommand.

## Overview

Pass global flags immediately after `codecaps` and before the command name, for example `codecaps --log-level debug login`.

## Options

| Option | Values | Description |
| --- | --- | --- |
| `-l`, `--log-level` | `debug`, `info`, `warn`, `error`, `quiet` | Controls CLI log output verbosity |

## Related

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/commands', label: '📋 Commands', description: 'Subcommands that accept these global options.'},
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ Installation', description: 'Install the CLI and view built-in help.'},
    {type: 'link', href: '/cli', label: '📋 CLI overview', description: 'Return to the CLI hub.'},
  ]}
/>