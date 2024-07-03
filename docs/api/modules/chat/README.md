# Chat Module


<!-- This content was generated from source code. DO NOT EDIT -->
A description and examples of the chat module can be found [here](../../modules/chat).


## Chat

### Slots

| Name          | Description |
| ------------- | ----------- |
| `pre-content` |             |
| `empty`       |             |
| `default`     | &nbsp;      |

### Props

| Name              | Type                      | Description | Default                |
| ----------------- | ------------------------- | ----------- | ---------------------- |
| `player`          | `() => PlayerData | null` |             |                        |
| `state-key`       | `String`                  |             | `"chatState"`          |
| `show-recipients` | `Boolean`                 |             | `true`                 |
| `sender-name`     | `String`                  |             | `"Alter"`              |
| `placeholder`     | `String`                  |             | `"Write a message..."` |

### Events

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `message` | <br/>**Arguments**<br/><ul><li>**`lastMessage: any`**</li></ul> |



## ChatModal

### Slots

| Name   | Description |
| ------ | ----------- |
| `name` | &nbsp;      |

### Props

| Name              | Type                      | Description | Default                |
| ----------------- | ------------------------- | ----------- | ---------------------- |
| `player`          | `() => PlayerData | null` |             |                        |
| `state-key`       | `String`                  |             | `"chatState"`          |
| `show-recipients` | `Boolean`                 |             | `true`                 |
| `sender-name`     | `String`                  |             | `"Alter"`              |
| `placeholder`     | `String`                  |             | `"Write a message..."` |



