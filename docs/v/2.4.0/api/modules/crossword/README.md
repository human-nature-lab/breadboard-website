# Crossword Module


<!-- This content was generated from source code. DO NOT EDIT -->
# Crossword module

A description and examples of the crossword module can be found [here](../../modules/crossword).

## BreadboardCrossword

A synchronized crossword puzzle that can be worked on by multiple players.

### Props

| Name                        | Type              | Description                                                            | Default       |
| --------------------------- | ----------------- | ---------------------------------------------------------------------- | ------------- |
| `player` *required*         | `() => Player`    | A reference to the player node                                         |               |
| `event-key`                 | `String`          | The name of the event used to pass data for this crossword puzzle      | `"crossword"` |
| `prop-name`                 | `String`          | The name of the property where crossword data is stored on the player. | `"crossword"` |
| `throttle-rate`             | `Number`          | How frequently to send data to the server                              | `2000`        |
| `max-wait`                  | `Number`          |                                                                        | `5000`        |
| `client-side-interpolation` | `Boolean`         | Whether or not to use client-side interpolation                        | `true`        |
| `active` *required*         | `() => Position`  | Which cell is active                                                   |               |
| `direction` *required*      | `() => DIRECTION` | Which direction they keyboard is typing in                             |               |
| `size` *required*           | `Number`          |                                                                        | &nbsp;        |

### Events

| Name               | Description |
| ------------------ | ----------- |
| `update:active`    |             |
| `update:direction` | &nbsp;      |



## Cell

### Props

| Name              | Type                     | Description | Default |
| ----------------- | ------------------------ | ----------- | ------- |
| `v-model`         | `String`                 |             |         |
| `size`            | `Number`                 |             | `10`    |
| `type` *required* | `() => CELL_TYPE`        |             |         |
| `label`           | `String` &#124; `Number` |             |         |
| `direction`       | `() => DIRECTION`        |             |         |
| `active`          | `Boolean`                |             | &nbsp;  |

### Events

| Name    | Description |
| ------- | ----------- |
| `focus` |             |
| `keyup` |             |
| `blur`  | &nbsp;      |



## ClueLock

### Props

| Name       | Type      | Description |
| ---------- | --------- | ----------- |
| `unlocked` | `Boolean` | &nbsp;      |



## ClueUnlock

### Props

| Name              | Type      | Description | Default |
| ----------------- | --------- | ----------- | ------- |
| `unlocked`        | `Boolean` |             | `false` |
| `error-duration`  | `Number`  |             | `5000`  |
| `type` *required* | `String`  |             | &nbsp;  |

### Events

| Name     | Description                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `unlock` | <br/>**Arguments**<br/><ul><li>**`{         password: this.password.trim(),         type: this.type       }: any`**</li></ul> |



## Crossword

### Props

| Name                   | Type               | Description | Default                        |
| ---------------------- | ------------------ | ----------- | ------------------------------ |
| `crossword` *required* | `() => Crossword`  |             |                                |
| `conflicts`            | `Array`            |             |                                |
| `v-model` *required*   | `() => string[][]` |             |                                |
| `direction`            | `() => DIRECTION`  |             | `DIRECTION.ACROSS`             |
| `active`               | `() => Position`   |             | `() => ({ row: -1, col: -1 })` |
| `size` *required*      | `Number`           |             | &nbsp;                         |

### Events

| Name          | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| `update:cell` | <br/>**Arguments**<br/><ul><li>**`val: any`**</li><li>**`active: any`**</li></ul> |



## CrosswordClues

### Props

| Name                | Type                                                       | Description | Default |
| ------------------- | ---------------------------------------------------------- | ----------- | ------- |
| `player`            | `() => { unlockedDown: boolean, unlockedAcross: boolean }` |             |         |
| `labels` *required* | `() => Label[]`                                            |             |         |
| `clues` *required*  | `() => Clue[]`                                             |             |         |
| `v-model`           | `() => Position`                                           |             |         |
| `direction`         | `() => DIRECTION`                                          |             |         |
| `row`               | `Boolean`                                                  |             | `false` |

### Events

| Name               | Description                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `input`            | <br/>**Arguments**<br/><ul><li>**`{ row: label.row, col: label.col }: object`**</li></ul> |
| `update:direction` | <br/>**Arguments**<br/><ul><li>**`dir: any`**</li></ul>                                   |
| `unlock`           |                                                                                           |
| `unlock`           | &nbsp;                                                                                    |



