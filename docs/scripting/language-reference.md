# Language reference
[[toc]]

## Actions
The player actions object is represented by the global object ```a```. The player actions object is used to assign choices to players and record experiment data.

### Methods

#### a.add(player, [optional: init], choice, [optional: choice2, choice3, ....])

##### Parameters
  - **player**: The vertex, player, in the graph who is making this choice 
  - **init**: (optional) A closure that is run when this choice or choices are displayed
  - **choice**: A map with the following key/value pairs:
    - name: The label placed on the button 
    - result: A closure that is run when the player clicks this button
    - event: (optional) The event to record in the experiment data if this choice is made, a map with the following key/value pairs:
      - name: A string identifying the event in the data
      - data: A map with one or more key-value pairs where the keys and values are both (max 255 character) strings
    - class: (optional) A HTML class to apply to the button, allows for styling with CSS

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

#### a.addEvent(eventName, data)
Record an event in the experiment data not associated with a player action.

##### Parameters
  - **eventName**: A string identifying the event in the data
  - **data**: A map with one or more key-value pairs where the keys and values are both (max 255 character) strings

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

#### a.remove(v)
Remove all player actions assigned to vertex `v`

#### a.remove(id) *(Alias for `a.remove(v)`)*
Remove all player actions assigned to vertex with `id`. 

##### Parameters
  - **v**: A vertex as returned by `g.getVertex(id)`

-------------------------------------------------

## <a name="content">Content</a>
The content object is represented by the global object `c`. The content object is used to retrieve html entered using the Content dialog.

### Methods

#### c.get(contentId[, optional: fill_0, fill_1, ...])
#### c.getTranslated(contentId, languageCode[, optional: fill_0, fill_1, ...])

##### Parameters
  - **contentId**: A string that matches the name of the tab in the Content dialog
  - **fill_n**: (optional) One or more values with string representations. If provided, each value will replace ```{n}``` in the content where ```n``` is an integer starting from 0 that matches the position of the fill parameter 

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

```text
Each round you may make the choice to contribute 50 points for 
each player you are connected with to award them 100 points.
```


-------------------------------------------------


## Graph
In scripts, the graph is represented by the global object, ```g```. The graph is an in-memory [Blueprints TinkerGraph](https://github.com/tinkerpop/blueprints/wiki) and all methods as described in the [JavaDoc](http://www.tinkerpop.com/docs/javadocs/blueprints/2.6.0/) are available. The most commonly used methods and properties of the ```g``` object, including those added by breadboard, are listed below.

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

##### Parameters
  - **a**: The PlayerAction object, must be ```a```
  - **n**: Number of AI players to add to the graph with random behavior, by default
  - **behavior**: (optional) A closure that is run when the AI player has a choice to make

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

##### Parameters
  - **n**: Number of vertices to add to the graph

#### g.empty()

This method removes all edges and vertices from the graph. Note: This does not drop players from the game. A removed vertex will be re-added to the graph when a player refreshes their browser window (this will cause the onJoinStep to be run again).

#### g.getEdge(v1, v2)

This method returns an Edge as identified by the two connected vertices or null if no edge exists between the vertices.

##### Parameters
  - **v1, v2**: Two vertices, as returned by g.getVertex, that are connected by an edge 
  rm

#### g.getVertex(id)

This method returns a vertex as identified by the provided ID or null if no vertex exists.

##### Parameters
  - **id**: The unique ID identifying the vertex in the graph

#### g.hasEdge(v1, v2)

This method returns ```true``` if there is an edge that connects the vertices provided or ```false``` otherwise. 

##### Parameters
  - **v1, v2**: Two vertices, as returned by g.getVertex, that are members of the graph ```g```

#### g.removeEdges([optional: v])

If a vertex, ```v``` is provided, this method removes the edges connected to the given vertex; otherwise, this method removes all edges in the graph. 

#### g.removeVertices()

This method removes all vertices in the graph. Note: This method does not handle dropping players from a game (see ```g.empty()```).

#### g.getSubmitForm(player, bonus, [reason], [sandbox], [comments])

This utility method returns a submit form that can be displayed to AMT workers at the completion of their task.

##### Parameters
  - **player**: The vertex of the player
  - **dollars**: The amount of the bonus, in US Dollars, to be applied to the player. Should be set to 0 if no bonus is awarded
  - **reason**: (optional) A text tag to keep track of why the player is submitting the task (e.g. dropped/too_many_players/failed_test). Defaults to ```"completed"```
  - **sandbox**: (optional) If true, it will create a form that will submit to the AMT sandbox, useful for testing. Defaults to ```false```
  - **comments**: (optional) If true, it will add a text area for freetext comments by the participants. These comments can be viewed by logging into the AMT Requester account and downloading the data. Defaults to ```false```

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

#### e.private(v, keyValueMap)
This method sets one or more properties of the edge that are visible only to one of the two vertices connected to the edge. These private properties override a public property of the same name.

##### Parameters
  - **v**: The vertex to whom the private property is visible
  - **keyValueMap**: A key, value map of private properties to add to the edge

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

-------------------------------------------------

## Random
This is an instance of java.util.Random that can be accessed using the global variable ```r```

### Methods
In addition to the methods describe below, all methods listed [here](https://docs.oracle.com/javase/7/docs/api/java/util/Random.html) are available

#### r.nextInt(n)
Returns a pseudorandom integer value between 0 and n-1

#### r.nextDouble()
Returns a pseudorandom double value between 0.0 and 1.0

-------------------------------------------------
