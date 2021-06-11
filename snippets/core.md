# Client Core
This is the backbone of the breadboard browser client. This API is used to load
all of the client JS and CSS resources and manage the WebSocket connection.

[[toc]]

## Loading scripts
```javascript
// In client-graph.js
async function init () {
  await Breadboard.addScriptFromURL("url-to-my-script.js")
}

init()
```