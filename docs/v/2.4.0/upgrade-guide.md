# Upgrade Guide
[[toc]]
## Migrating from v2.3 to v2.4
Breadboard 2.4 includes a completely different player frontend so any customizations to the client-html or client-graph will need to be migrated manually.

### Required changes

#### Client code
The Breadboard client has been modularized so that it is possible to use any web
framework to design a client in Breadboard. We still have a default client view with a egocentric graph and player choices, but it has been completely rewritten in [VueJS](https://vuejs.org/) to make it similar to the modern web.

If no changes to the UI were made in your current experiment, simply replace the client-html and client-graph content with the content of the respective files in the `conf` directory. If changes were made to the UI, either reimplement those changes using the [new client](./client/README.md) or [use the old angular client](./client/angular-client.md). The old AngularJS UI is considered deprecated and updates will only be applied to the new VueJS UI.

### Scripting
Features were only added to the script board so no changes are required for most experiments.

### Added features
- [Event Bus](./scripting/event-bus.md)
- [Players dialog filtering](./dialogs/players-dialog.md)
- [Modules](./modules/README.md)


## Migrating from v2.2 to v2.3

See this [upgrade guide](../../upgrade-guide.md).
