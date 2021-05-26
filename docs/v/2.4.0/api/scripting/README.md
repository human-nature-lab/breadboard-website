# Scripting API
[[toc]]

## Actions
The player actions object is represented by the global object ```a```. The player actions object is used to assign choices to players and record experiment data.

### Methods

#### add(Vertex player, Map choices)
#### add(Vertex player, Closure init, Map choices)

##### Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| player | Vertex | | The vertex, player, in the graph who is making this choice  |
| init *optional* | Closure | | A closure that is run when this choice or choices are displayed |
| choices | Map<[Choice](#choice)> | | A map matching the [Choice](#choice) interface |


##### Example
```groovy
// Add the choices to cooperate or defect to each player in the graph
g.V.each { v->
  a.add(v, 
    [name: "Cooperate",
		 result: {
		   v.cooperation = 1
			 v.score -= coc * v.neighbors.count()
			 v.neighbors.each { n->
			   n.score += po
			 }
		}],
		[name: "Defect",
		 result: {
		   v.cooperation = -1
		}]
	)
}
```

#### a.addEvent(String eventName, Map data)
Record an event in the experiment data not associated with a player action.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| eventName | String | | A string identifying the event in the data |
| data | Map | | A map with one or more key-value pairs where the keys and values are both (max 255 character) strings |

##### Example
```groovy
// Record the experiment's initial parameters in the data
a.addEvent("GameParameters", 
  ["coc":coc,
	 "po":po,
	 "initScore":initScore,
	 "nRounds":nRounds]
)
```

#### a.empty()
Remove all assigned player actions

#### a.remove(Vertex v)
#### a.remove(String playerId)
Remove all player actions assigned to vertex `v` or player with the matching id.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| v | Vertex | | A vertex as returned by `g.getVertex(id)` |
| playerId | String | | A player id |

#### a.setDropPlayers(Boolean dropPlayers)
Whether or not to drop players that aren't interacting with the game within the configured amount of time (set by `setIdleTime`)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| dropPlayers | Boolean | |`True` means players will be dropped|


#### a.setDropPlayerClosure(Closure dropPlayerClosure)
Configure behavior when a player is inactive and will be dropped.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| dropPlayerClosure | Closure | {} | Do something with the player when they are dropped. |

#### a.setDropPlayers(Boolean dropPlayers)
Whether or not to drop players that aren't interacting with the game within the configured amount of time (set by `setIdleTime`)
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| dropPlayers | Boolean | false | Whether or not the players will be dropped. |

#### a.setDropTime(Long dropTime)
How long to wait before "dropping" the player. Starts counting when they are inactive.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| dropTime | Long | | Time to wait before dropping a player |

#### a.setIdleTime(Long idleTime)
How long to wait before "firing" the player.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| idleTime | Long | | How long to wait before showing the idle timer. |

#### a.size(): Integer
Size of the actions queue.

#### a.turnAIOff()
Turn all AI off.

#### a.turnAIOn()
Turn all AI on.




## Content fetcher
The content object is represented by the global object `c`. The content object is used to retrieve html entered using the Content dialog.

### Methods

#### c.get(String contentId[, optional: fill_0, fill_1, ...])
#### c.getTranslated(String contentId, String languageCode[, optional: fill_0, fill_1, ...])
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| contentId | String | | Matches the name of the tab in the Content dialog |
| languageCode | String | | The matching code in the translations panel | 
| fill_n | Object | | Values to use for [interpolation](#c-interpolate-string-content-object-parameters) | 

##### Example
Given content within a "Tutorial" tab with the following HTML value:

```html
<p>
  Each round you may make the choice to contribute {0} points for 
  each player you are connected with to award them {1} points.
</p>
```

```groovy
// Display tutorial text to each client 
// Fill in the coc and po parameters in the content
g.V.each { v->
	v.text = c.get("Tutorial", coc, po)
}
```

If the coc parameter is set to 50 and the po parameter is set to 100 the following text would be displayed:

> Each round you may make the choice to contribute 50 points for
> each player you are connected with to award them 100 points.


#### c.setDefaultLanguage(String language)
Set which language will be used when `c.get(name)` is called. Doesn't affect `c.getTranslated(name, language)`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| languageCode | String | | A valid language code or name | 

#### c.interpolate(String content, Object[] parameters)
If provided, each value will replace `{n}` in the content where `n` is an integer starting from 0 that matches the position of the fill parameter.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| content | String | | A string with content to interpolate. Works the same way the `get` and `getTranslated` methods work. |
| parameters | Object[] | | One or more values to replace `{n}` with. |

##### Returns
`String`




## Graph
In scripts, the graph is represented by the global object, ```g```. The graph is an in-memory [Blueprints TinkerGraph](https://github.com/tinkerpop/blueprints/wiki) and all methods as described in the [JavaDoc](http://www.tinkerpop.com/docs/javadocs/blueprints/2.6.0/) are available. The most commonly used methods and properties of the ```g``` object, including those added by breadboard, are listed below.

See [graph algorithms](../../scripting/graph-algorithms.md) for additional graph methods.

### Properties

#### g.V

The collection of vertices in the graph

##### Example
```groovy
// iterate through the vertices and assign each a score of 100
g.V.each { v->
  v.score = 100
}
```

#### g.E

The collection of edges in the graph

### Methods

#### g.addAI(a, n, [behavior])

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| a | PlayerActions | | The PlayerAction object, must be `a` |
| n | Integer | | Number of AI players to add to the graph with random behavior, by default |
| behavior *optional* | Closure | |  A closure that is run when the AI player has a choice to make |

##### Example
```groovy
def aiBehavior = { ai->
  // Sanity check to make sure the AI actually has choices to make
  if (ai.getProperty("choices")) {
    // A random delay is a good idea to make the AI
    // appear more human and to avoid potential race conditions
    def randomDelay = 1000 + r.nextInt(3000)
    new Timer().runAfter(randomDelay) {
      def choices = ai.getProperty("choices")
      // Choose a random choice
      def choice = choices[r.nextInt(choices.size())]
      a.choose(choice.uid)
    }
  }
}
// Add 20 AI players using the defined behavior
g.addAI(a, 20, aiBehavior)
```

#### g.addVertices(n)
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| n | Integer | | Number of vertices to add to the graph |


#### g.empty()

This method removes all edges and vertices from the graph. Note: This does not drop players from the game. A removed vertex will be re-added to the graph when a player refreshes their browser window (this will cause the onJoinStep to be run again).

#### g.getEdge(Vertex v1, Vertex v2)

This method returns an Edge as identified by the two connected vertices or null if no edge exists between the vertices.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| v1 | Vertex | | A vertex as returned by `g.getVertex` |
| v2 | Vertex | | A vertex as returned by `g.getVertex` |


##### Returns
`Edge`

#### g.getVertex(String id)

This method returns a vertex as identified by the provided ID or null if no vertex exists.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| id | String | | The unique ID identifying the vertex in the graph|

##### Returns
`Vertex`

#### g.hasEdge(Player v1, Player v2)

This method returns ```true``` if there is an edge that connects the vertices provided or ```false``` otherwise.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| v1 | Vertex | | A vertex as returned by `g.getVertex` |
| v2 | Vertex | | A vertex as returned by `g.getVertex` |

##### Returns
`Boolean`

#### g.removeEdges()
#### g.removeEdges(Vertex v)

If a vertex, ```v``` is provided, this method removes the edges connected to the given vertex; otherwise, this method removes all edges in the graph.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| v | Vertex | | A vertex as returned by `g.getVertex` |

#### g.removeVertices()

This method removes all vertices in the graph. Note: This method does not handle dropping players from a game (see `g.empty()`).

#### g.getSubmitForm(Vertex player, String bonus)
#### g.getSubmitForm(Vertex player, String bonus, String reason, Boolean sandbox, Boolean comments)

This utility method returns a submit form that can be displayed to AMT workers at the completion of their task.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| player | Vertex | | A vertex as returned by `g.getVertex` |
| bonus | String | | The amount of the bonus, in US Dollars, to be applied to the player. Should be set to 0 if no bonus is awarded |
| reason *optional* | String | `"completed"` | A text tag to keep track of why the player is submitting the task (e.g. dropped/too_many_players/failed_test) |
| sandbox *optional* | Boolean | `false` | If true, it will create a form that will submit to the AMT sandbox, useful for testing |
| comments *optional* | Boolean | `false` | If true, it will add a text area for free text comments by the participants. These comments can be viewed by logging into the AMT Requester account and downloading the data. |

##### Example
```groovy
// The FinishedStep is run when the game has been completed
finishStep = stepFactory.createStep()

finishStep.run = {
  g.V.each { v->
    v.text = "<h2>Thank you for participating in this task.</h2>"
    v.text += "<p>Please submit the assignment below.</p>"
    v.text += g.getSubmitForm(v, v.score)
  }
}
```

#### g.addTimer(Map params)
#### g.addTimer(Integer time, String name, String timerText, String direction, String type, String currencyAmount, Closure result, Vertex player, String appearance)
Add a timer to a player that they can see as a progress bar while playing. If "player" is omitted then it will be assigned to all players.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| time | Integer | | How long the timer will last |
| name | String | | The unique key for this timer. Multiple timers for the same player should have different names. |
| timerText | String | | Text to show to the player on the timer. |
| direction | `"up"`, `"down"` | `"down"` | Which way the timer should count. |
| type | `"time"`, `"currency"`, `"percent"` | `"time"` | Should the timer value show up as a time, currency or percentage. |
| currencyAmount | String | `"0"` | A string representing an amount of currency. Required when type is currency. |
| result | Closure |  | A closure that will be called when the timer expires |
| player | Vertex |  | The player to assign this timer to |
| appearance | `"error", "warn", "success", "info"` | `"info"` | Which style to use for this timer. |
| params | Map |  | A map where all of the other properties are optional. |

##### Returns
[`SharedTimer`](#shared-timer)

##### Example
```groovy

def timer = g.addTimer([
  name: "first",          // Timer key
  player: g.getVertex("one"),
  time: 30 * 1000,
  appearance: "success",  // Timer will appear green
  result: {
    println "timer complete"
  }
])

```


## Edge
Once an edge is retrieved from the graph either by using the ```g.getEdge(v1, v2)``` method or by iterating through the edges in the graph you can get/set custom properties of the edge or access the following defined properties and methods. In these examples, we have assigned an edge to the variable ```e```.

### Properties

#### e.bothV
A collection consisting of both vertices connected to the edge

#### e.inV
The head vertex connected to the edge

#### e.outV
The tail vertex connected to the edge

#### e.randV
This property returns a random vertex connected to the edge

### Methods

#### e.private(Vertex v, Map keyValueMap)
This method sets one or more properties of the edge that are visible only to one of the two vertices connected to the edge. These private properties override a public property of the same name.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| v | Vertex | | The vertex to whom the private property is visible |
| keyValueMap | Map | | A key, value map of private properties to add to the edge |

##### Example
```groovy
g.E.each { edge->
  edge.private(edge.getVertex(Direction.IN), ["foo":"bar"])
}
```

```css
line[foo="bar"] {
  stroke: red;
}
```


## Vertex
Once a vertex is retrieved from the graph either by using the ```g.getVertex(pid)``` method or by iterating through the vertices in the graph you can get/set custom properties or access the following defined properties. In these examples, we have assigned ther vertex to the variable ```v```.

### Properties

#### v.bothE

The collection of edges connected to the vertex 

#### v.neighbors

The collection of vertices who are connected by edges to the vertex 

##### Example
```groovy
// Add 100 points to the score of each vertex connected to the player
v.neighbors.each { n->
	n.score += 100
}
```

#### v.private

A map of properties that are visible only to the owning vertex. These properties override public properties of the same name.

##### Example
```groovy
// Set the public property isSpy equal to false for all vertices
g.V.each { v->
	v.isSpy = false
}
// pick a random vertex
def spy = g.V.shuffle.next() 
// set the private isSpy property of the vertex to true
spy.private.isSpy = true
```

### Methods

#### v.on(String name, Closure handler)
Listen for events from this player node.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | The name to use for this event |
| handler | Closure | | A closure to handle received messages. The first argument is the Vertex that received the message, the second is whatever data was sent with the message. |

#### Example
```groovy
player.on("tick", { Vertex v, Object data ->
  println v.id, data
})
```

#### v.send(String name, Object[] ...data)
Send an ephemeral message directly to this player node with the specified name.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | The name to use for this event |
| data | Object[] | | One or more pieces of data to send. Can be any serializable data type |

#### Example
```groovy
// Send a random Double
player.send("random", r.nextDouble())

// Send a random Integer
player.send("random", r.nextInt(100))

// Send a string
player.send("random", "not random")

// Send a map
player.send("random", [ data: "message here " ])
```

## Random
This is an instance of java.util.Random that can be accessed using the global variable ```r```

### Methods
In addition to the methods describe below, all methods listed [here](https://docs.oracle.com/javase/7/docs/api/java/util/Random.html) are available

#### r.nextInt(n)
Returns a pseudorandom integer value between 0 and n-1

#### r.nextDouble()
Returns a pseudorandom double value between 0.0 and 1.0


## BBTimer
A Breadboard extension of the default Timer class in Groovy. Should be used anywhere a Timer would normally be used.

```groovy
def timer = new BBTimer()

timer.scheduleAtFixedRate({
  // Do something every second
}, 0, 1000)
```

## SharedTimer
A shared instance of BBTimer that is shared with multiple players and shown to 

# Interfaces

## Choice
A Map with the following key/value pairs

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | The label placed on the button |
| result | Closure | | A closure that is run when the player clicks this button |
| event *optional* | [Event](#event) | | The event to record in the experiment data if this choice is made. Matches the [Event](#event) interface |
| class *optional*  | string | | A HTML class to apply to the button, allows for styling with CSS |

## Event
A Map with the following key/value pairs
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | A string identifying the event in the data|
| data | Map | `[]` | A Map with one or more key-value pairs where the keys and values are both (max 255 character) strings |
