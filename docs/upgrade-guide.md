# Upgrade Guide
[[toc]]
## Migrating from v2.3 to v2.4
Breadboard 2.4 includes a completely different player frontend so any customizations to the client-html or client-graph will need to be migrated manually.

### Required changes

#### Client code
The Breadboard client has been modularized so that it is possible to use any web
framework to design a client in Breadboard. We still have a default client view with a egocentric graph and player choices, but it has been completely rewritten in [VueJS](https://vuejs.org/) to modernize it and make it easier to customize.

If no changes to the user interface were made in your current experiment, simply replace the client-html and client-graph content with the content of the respective files in the `conf` directory. If changes were made to the UI, either reimplement those changes using the [new client](./client/README.md) or continue using your exiting code with [the old angular client](./client/angular-client.md#upgrade-existing-2-3-experiment). We encourage upgrading to the VueJS UI as the old UI is considered deprecated and updates will only be applied to the new one.

### Scripting
No breaking changes were made to the script board so no changes are required.

### Added features
- [Event Bus](./scripting/event-bus.md) - An asynchronous API for passing messages back and forth between clients
- [Players dialog filtering](./dialogs/players-dialog.md) - Quickly query for players that have certain properties
- [Modules](./modules/README.md) - Reusable code that can help
- [File mode](./file-mode.md) - Edit files using your editor of choice

## Migrating from v2.2 to v2.3

See this [upgrade guide](../../upgrade-guide.md).
