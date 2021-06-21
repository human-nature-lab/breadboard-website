# Browser client
[[toc]]

## Introduction
Breadboard has a default browser client written in [VueJS]. This client is based upon a Material Design framework called [Vuetify] and is designed to simplify the process for customizing various parts of the user interface. If you're not familiar with Vue or component based development, reading [an introduction to Vue](https://vuejs.org/v2/guide/) will help you understand how it works.

## Loading
The Breadboard client code is loaded using the [Breadboard core](../api/frontend/core.md) JS library. Both CSS and JavaScript files can be loaded as needed to create the desired user interface. 

There are convenience methods to simplify loading of the default user interface. The default `client-graph.js` content is the minimum code necessary to load the default UI.

```javascript
async function init () {
  const config = await Breadboard.loadConfig()
  await Breadboard.loadVueDependencies()
  await Breadboard.createDefaultVue(config.clientHtml)
}
init()
```

### Loading external libraries
It's common to load external libraries in Breadboard. For example, to load [Vue.Draggable](https://sortablejs.github.io/Vue.Draggable/) into Breadboard to enable drag-and-drop interactions you could use the following code:

```javascript
async function init () {
  const config = await Breadboard.loadConfig()
  await Promise.all([
    // First load Vue and default dependencies
    Breadboard.loadVueDependencies(),
    // Next load sortablejs which is a dependency of Vue.Draggable
    Breadboard.addScriptFromURL('https://cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js'),
    // Finally load Vue.Draggable
    Breadboard.addScriptFromURL('https://cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.20.0/vuedraggable.umd.min.js'),
  ])
  // Now everything is loaded so we initialize the client 
  await Breadboard.createDefaultVue(config.clientHtml)
}
init()
```

## Default client 
The default client template (found in `conf/defaults/client-html.html`) includes several components that can be customized to created a user interface for your Breadboard game. Many of these components are customized using [slots](https://vuejs.org/v2/guide/components-slots.html).

### v-app
This is the root component of all [Vuetify] apps. It is required to be at the root of the client-html.

### ConnectionStatus
The connection status component will display a message telling your participants that the connection with the server has stopped for some reason. This can be helpful when a user's internet is spotty or when there are actual server issues in the game.

[API documentation](../api/frontend/client-components.md#connectionstatus)

### SVGGraph
The SVG graph component renders an force-directed, egocentric graph in the browser. The default html includes some examples for how images can be used for the nodes instead of the default circles.

[API documentation](../api/frontend/client-components.md#svggraph)

### PlayerTimers
The player timers component renders all of the timers that are assigned to players during the game. This is the component that is updated when you use the[`g.addTimer`](../api/scripting/README.md#g-addtimer-map-params) method in the script engine.

[API documentation](../api/frontend/client-components.md#playertimers)

### PlayerText
This component renders the HTML content assigned to the player using the [content fetcher](../api/scripting/README.md#content-fetcher) and the [content dialog](../dialogs/the-content-dialog.md). It cannot be customized very much.

[API documentation](../api/frontend/client-components.md#playertext)

### PlayerChoices
This component renders all of the choices currently available to a player. Choices are assigned to a player when you use the [`a.add`](../api/scripting/README.md#actions) method.

[API documentation](../api/frontend/client-components.md#playerchoices)

### Form
The form component will render any forms that are assigned to a player. If no forms are assigned, it doesn't do anything. See the [form module](../modules/form.md) for more details.

[API documentation](../api/modules/form/README.md)

### v-flex, v-container and v-layout
All of these components are used to create a responsive layout using [Vuetify's][Vuetify] design system.

## Using the old UI
The old AngularJS client can still be used if that's desired. See [this guide](./angular-client.md).

[Vuetify]: https://vuetifyjs.com/
[VueJS]: https://vuejs.org/