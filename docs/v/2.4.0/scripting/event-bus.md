# Event Bus
Breadboard has an event bus API (defined as `events`) intended to simplify message passing between the server and client and enable more complex applications such as chat or real-time collaboration.

See the [API documentation](../api/scripting#events) for more information.

[[toc]]

## Usage

### Player helpers
The most common use-case will be sending messages back and forth to a single player. There are some convenience functions on the player node to help with this process.

#### Script engine
In the script engine add some code to listen for and respond to chat messages
```groovy

def player = g.getVertex(playerId)

// Receive a chat message sent from the browser
player.on("chat", { v, data ->
  // Do something with this chat data
  player.send("chat", [
    message: "Hello, Player!"
  ])
})

```

#### Browser
In the browser add similar methods to listen for and send chat messages

```javascript

// Receive chat messages
Breadboard.on('chat', data => {
  // Do something with the chat message
  console.log('chat', data.message)
})

// Send a chat message
Breadboard.send('chat', {
  message: 'Hello, Breadboard!'
})

```


### Global events
Sometimes it might be necessary to communicate with multiple players at the same time. For these cases, the global `events` API will help.

#### Broadcast
```groovy

def player = g.getVertex(playerId)

// Listen for the "admin-chat" event and send it up to the player. This would
// typically be placed in the `onJoinStep`
events.on("admin-chat", { data ->
  player.send("admin-chat", data)
})

// Send an admin-chat event
events.send("admin-chat", [ message: "Hello, Players!" ])

```