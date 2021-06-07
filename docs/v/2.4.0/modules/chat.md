# Chat Module

::: tip
This module is experimental and is subject to change.
:::

The chat module adds a few chat components to the frontend library and a customizable scripting interface to enable chat between participants. 


[[toc]]

## Usage

Load this module by adding the following to your `client-graph.js` file:

```javascript
await Breadboard.loadModules('chat')
```

Add the chat component somewhere in your `client-html` file:

```vue
<template>
  <BreadboardChat :player="player"></BreadboardChat>
</template>
```

In the scripting engine enable chat between two or more players using the chat
methods.

TODO
```groovy
def room = new ChatRoom()
```