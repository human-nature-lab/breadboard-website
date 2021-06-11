# Vue browser components


<!-- This content was generated from source code. DO NOT EDIT -->
The client components are the core components used in most breadboard games.
Most of them are designed to be easily customized and include things like an
extendable Graph visualization, Timers, Connection Status, Choices, etc.

A few optional [modules](../modules) are also available to use.

[[toc]]

## Choice

Choices in Breadboard show up as buttons. This component makes it trivial to
modify the contents of the button
without changing the default functionality.

- **displayName** - Choice

### Slots

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| `prepend` | Add something before the label                |
| `default` | Replace the default label with your own label |
| `append`  | Add something after the label                 |

### Props

| Name       | Type      | Description                        | Default |
| ---------- | --------- | ---------------------------------- | ------- |
| `choice`   | `Object`  | The choice data sent by breadboard |         |
| `disabled` | `Boolean` | Disable the choice                 | `false` |

### Events

| Name    | Description                                           |
| ------- | ----------------------------------------------------- |
| `click` | <br/>**Arguments**<br/><ul><li>**`e: any`**</li></ul> |



## ConnectionStatus

This component will show players a message if they are disconnected from
the game due to a network interruption. Breadboard will automatically
reconnect if possible.

### Slots

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| `default` | The message to be shown when the client is disconnected |

### Props

| Name         | Type     | Description | Default                |
| ------------ | -------- | ----------- | ---------------------- |
| `color`      | `String` |             | `"info"`               |
| `transition` | `String` |             | `"slide-x-transition"` |



## PlayerChoices

A container for all of the player choices

### Slots

| Name     | Description |
| -------- | ----------- |
| `choice` | &nbsp;      |

### Props

| Name                | Type       | Description |
| ------------------- | ---------- | ----------- |
| `player` *required* | `Object`   |             |
| `choice-filter`     | `Function` | &nbsp;      |



## PlayerText

A container for the HTML content shown to the player

### Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `prepend` | Add something before the player content |
| `default` |                                         |
| `append`  | Add something after the player content  |

### Props

| Name                | Type     | Description |
| ------------------- | -------- | ----------- |
| `player` *required* | `Object` | &nbsp;      |



## PlayerTimers

The container for all of the player's timers. Multiple timers can be running
at the same time and this component creates them.

### Basic usage:
```vue
 <PlayerTimers
   :player="player" />
```

### Custom timer:
```vue
 <PlayerTimers
   :player="player">
   <template #timer="{ timer }">
     <MyCustomTimerComponent :timer="timer" />
   </template>
</PlayerTimers>
```

### Slots

| Name    | Description                                    |
| ------- | ---------------------------------------------- |
| `timer` | Replace all the the timers with a custom timer |

### Props

| Name                | Type     | Description       |
| ------------------- | -------- | ----------------- |
| `player` *required* | `Object` | The player object |



## SVGGraph

The SVG Graph component shows the graph to the player and updates in real time.
It allows you to easily react to
click events on nodes and edges within the graph, trivially transform the graph
by modifying node sizes and colors,
customize the appearance of the graph with images and text and customize the
force-directed layout algorithm without
modifying the component itself.

### Slots

| Name           | Description                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `edge`         | Replace the edge with your own edge. This could be used to replace lines with Bezier curves or arrows. Positioning has to be done manually.    |
| `edge-label`   | Add an element at the center of the edge                                                                                                       |
| `node`         | Replace the entire node with your own node. Positioning is done automagically. This might be used to change the circle to an image or a square |
| `node-content` | Add something inside the node. This object will be positioned relative to the origin of the node (upper left) and must be centered manually    |

### Props

| Name                | Type                                       | Description                                                                                                                             | Default                                                                                  |
| ------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `player` *required* | `PlayerData`                               | The player object sent up by breadboard                                                                                                 |                                                                                          |
| `graph` *required*  | `Graph`                                    | The client graph object                                                                                                                 |                                                                                          |
| `layout`            | `LayoutOptions`                            | The force-directed layout options                                                                                                       | `() => ({ linkDistance: 100, chargeStrength: -500, centerRepel: 500 } as LayoutOptions)` |
| `center-ego`        | `Boolean`                                  | A boolean indicating whether or not the ego should be centered on the screen                                                            | `true`                                                                                   |
| `node-stroke`       | `string` &#124; `ObjMapFunc<Node, string>` | Change the color of each node border by supplying a new color or a mapping function                                                     | `"black"`                                                                                |
| `node-stroke-width` | `number` &#124; `ObjMapFunc<Node, number>` | Change the size of each node border by supplying a new size or a mapping function                                                       | `2`                                                                                      |
| `node-fill`         | `string` &#124; `ObjMapFunc<Node, string>` | Change the fill color of each node using a color string or a mapping function                                                           | `"grey"`                                                                                 |
| `node-radius`       | `number` &#124; `ObjMapFunc<Node, number>` | Change the size of each node using a number or a mapping function                                                                       | `30`                                                                                     |
| `edge-stroke-width` | `number` &#124; `ObjMapFunc<Edge, number>` | Change the size of each edge using a number or a mapping function                                                                       | `2`                                                                                      |
| `edge-opacity`      | `number` &#124; `ObjMapFunc<Edge, number>` | Change the opacity of each edge using a number or a mapping function. This could be used to show decay of edges.                        | `1`                                                                                      |
| `edge-stroke`       | `string` &#124; `ObjMapFunc<Edge, string>` | Change the color of each edge using a number or a mapping function.                                                                     | `"#999"`                                                                                 |
| `graph-padding`     | `Number`                                   | How much space to try to keep around the edge of the graph. Nodes will try to stay at least this far away from the borders of the graph | `10`                                                                                     |
| `ignored-props`     | `() => String[]`                           | Any properties that should not be assigned as attributes on the nodes                                                                   | `() => ['text', 'choices', 'x', 'y', 'timers', 'timerUpdatedAt']`                        |

### Events

| Name             | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `nodeClick`      | <br/>**Arguments**<br/><ul><li>**`node: any`**</li><li>**`e: any`**</li></ul> |
| `edgeClick`      | <br/>**Arguments**<br/><ul><li>**`edge: any`**</li><li>**`e: any`**</li></ul> |
| `edgeLabelClick` | <br/>**Arguments**<br/><ul><li>**`edge: any`**</li><li>**`e: any`**</li></ul> |



## Timer

### Slots

| Name      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `prepend` | Add something before the timer label. For example a dollar sign. |
| `label`   | Replace the default timer message with your own                  |
| `append`  | Add something after the label. For example a percentage (%)      |

### Props

| Name                      | Type                | Description                                       | Default |
| ------------------------- | ------------------- | ------------------------------------------------- | ------- |
| `timer` *required*        | `() => PlayerTimer` | The timer object sent from the server             |         |
| `timer-elapsed-tolerance` | `Number`            | How far off the timer can be from the server time | `2000`  |
| `update-rate`             | `Number`            | How frequently to update the timer on the client  | `1000`  |



