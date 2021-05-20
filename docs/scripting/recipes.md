# Recipes
Below are some common design patterns and the code to implement them:

### Table of Contents
- [Assign labels](#assign-labels)
- [Choose a neighbor](#choose-a-neighbor)
- [Make and cut ties](#make-and-cut-ties)
- [Showing transitivity](#showing-transitivity)
- [Surveys in breadboard](#surveys-in-breadboard)

-------------------------------------------------

### Assign labels
In this example, we'll show each player's numeric score privately and assign an alphabetic label that is visible to their neighbors:

###### Recipe
```groovy
// Start with 'A'
def label = 'A'

// Iterate through each player in random order 
// and assign a private score and public label
g.V.shuffle.each { v->
  // The private property, score, keeps track of each player's points
  v.private.score = 1000
  // The public property, score, is displayed, by default, on the player's node
  v.score = label
  // Increment the label (e.g. A->B)
  label++
}
```

### Choose a neighbor
You will often want a player to choose one neighbor (to remove a tie with, contribute points to, etc.) In this example, we're implementing a public goods game where each player can either defect or choose a single neighbor to contribute points to:

###### Recipe
```groovy
// Iterate through each player
g.V.each { v->
  // Create an empty array to hold this player's choices
  def choices = []
  // Define the defect choice
  def defectChoice = [
    name: "Defect (0)",
    result: { 
      v.cooperation = -1
    }
  ]
  // Add the defect choice to the array
  choices << defectChoice

  // Now add one cooperate choice per neighbor
  // we're using public score to identify each neighbor
  // (see 'Assign labels' above)
  v.neighbors.each { n->
    def cooperateChoice = [
      name: "Cooperate with " + n.score + " (-50)",
      result: {
        v.cooperation = 1
        v.private.score -= 50
        n.private.score += 100
      }
    ]
    choices << cooperateChoice
  }

  // Finally, add all choices as an action to the player 
  a.add(v, *choices) 
}
```

### Make and cut ties
In these examples we're allowing players to choose to make new ties or cut existing ties. Neighbors are labeled alphabetically (see 'Assign labels' above.) To choose a neighbor with whom to cut ties:

###### Recipe
```groovy
g.V.each { v->
  def choices = []
  // Cut ties with none
  def cutNone = [
    name: "Cut none",
    result: { 
      // No result
    }
  ]
  choices << cutNone

  // Now add one cut ties choice per neighbor 
  v.neighbors.each { n->
    def cutTieChoice = [
      name: "Cut ties with " + n.score,
      result: {
        // Find edge between v and n
        def edge = g.getEdge(v, n)
        // If edge has not already been cut
        if (edge != null) {
          //Remove the edge
          g.removeEdge(edge)
        }
      }
    ]
    choices << cutTieChoice
  }

  a.add(v, *choices) 
}
```

To allow choosing a new tie from among the players not already connected with: 
###### Recipe
```groovy
g.V.each { v->
  def choices = []
  // Add ties with none
  def addNone = [
    name: "Add none",
    result: { 
      // No result
    }
  ]
  choices << addNone

  // Now add one add ties choice per non-neighbor 
  g.V.except(v.neighbors.toList() << v).each { v2->
    def addTieChoice = [
      name: "Add tie with " + v2.score,
      result: {
        // Find edge between v and v2
        def edge = g.getEdge(v, v2)
        // If edge has not already been made 
        if (edge == null) {
          //Add the edge
          g.addEdge(v, v2, "connected")
        }
      }
    ]
    choices << addTieChoice
  }

  a.add(v, *choices) 
}
```

### Showing transitivity
By default, the breadboard client will show ego-alter ties and will not show alter-alter ties. You may want to show your players the ties between their neighbors if this information will influence their choices.

###### Recipe

After creating the graph, store the IDs of each player's neighbors in an array:

```groovy
g.random(0.3)
g.V.each { v->
  // Create an empty array to store neighbor IDs
  v.nids = []
  v.neighbors.each { n->
    v.nids << n.id
  }
}
```

Then insert the following JavaScript at line 265 of the Client Graph dialog, immediately preceding the call to ```update();```.

```javascript
// Show transitivity
for (var i = 0; i < (nodes.length - 1); i++) {
  if (nodes[i].id != clientId) {
    for (var j = i + 1; j < nodes.length; j++) {
      if (nodes[j].id != clientId && _.contains(nodes[i].nids, nodes[j].id)) {
        var newLink = {
          source: nodes[i],
          target: nodes[j],
          name: "connected",
          id: nodes[i].id + "_" + nodes[j].id
        };
        var existingLink = _.find(links, function(l) {
          return (l.target.id == newLink.target.id && l.source.id == newLink.source.id);
        });
        if (existingLink == null) {
          links.push(newLink);
        }
      }
    }
  }
}
```


### Surveys in breadboard
You may want to conduct a survey or, in the course of a game, have your participant enter input beyond pushing buttons. This is supported through a `custom` parameter of the player action object.

You can put any HTML form elements in the custom parameter of the player action. Make sure to add the class `param` to the input so the value will be acessible from the breadboard result closure. In addition, add a `ng-model` attribute and set the input as `required` if you want the survey question to be required.

###### Recipe
```groovy
g.V.each { v->
  a.add(v,
  [name: "Submit",
  custom: """
  <p><strong>Radio Buttons</strong></p>
  <div>
    <input type="radio" class="param" name="radio" ng-model="radio" value="yes" required> 
    <label for="yes"> Yes</label><br>
    <input type="radio" class="param" name="radio" ng-model="radio" value="no" required> 
    <label for="no"> No</label><br>
  </div>
  <p><hr></p>
  <p><strong>Number</strong></p>
  <div>
    <input type="number" class="param" min="1" max="10" name="numeric" ng-model="numeric" required>
  </div>
  <p><hr></p>
  <div>
    <input type="range" class="param" min="1" max="100" name="range" ng-model="range">
  </div>
  <p><hr></p>
  <p><strong>Checkboxes</strong></p>
  <div>
    <input type="checkbox" class="param" name="checkboxes" ng-model="dogs" value="dogs" ng-required="!cats && !fish && !birds && !other">
    <label for="dogs"> Dogs</label><br>
    <input type="checkbox" class="param" name="checkboxes" ng-model="cats" value="cats" ng-required="!dogs && !fish && !birds && !other">
    <label for="cats"> Cats</label><br>
    <input type="checkbox" class="param" name="checkboxes" ng-model="fish" value="fish" ng-required="!dogs && !cats && !birds && !other">
    <label for="fish"> Fish</label><br>
    <input type="checkbox" class="param" name="checkboxes" ng-model="birds" value="birds" ng-required="!dogs && !cats && !fish && !other">
    <label for="birds"> Birds</label><br>
    <input type="checkbox" class="param" name="checkboxes" ng-model="other" value="other" ng-required="!dogs && !cats && !fish && !birds">
    <label for="other"> Other</label><br>
    <input ng-if="other" type="text" name="othertext" class="param" ng-model="othertext" required>
  </div>
  """.toString(),
  result: { params->
    println(params)
    v.text = """
    <ul>
      <li>Radio: ${params['radio']}</li>
      <li>Numeric: ${params['numeric']}</li>
      <li>Range: ${params['range']}</li>
      <li>Checkboxes: ${params['checkboxes']}</li>
      <li>Textboxes: ${params['othertext']}</li>
    </ul>
    """.toString()
  }])
}
```

Custom inputs don't support recording data using an event property on the choice so you’ll have to add a call to a.addEvent() in the result closure, example:

```
a.addEvent("RangeEvent", 
  ["value":params['range'],
     "pid":v.id
  ]
)
```

