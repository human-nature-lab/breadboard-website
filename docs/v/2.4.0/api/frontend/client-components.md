# Vue browser components


<!-- This content was generated from source code. DO NOT EDIT -->
The client components are the core components used in most breadboard games.
Most of them are designed to be easily customized and include things like an
extendable Graph visualization, Timers, Connection Status, Choices, etc.

A few optional [modules](../modules) are also available to use.

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



