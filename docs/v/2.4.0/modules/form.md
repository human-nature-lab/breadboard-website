# Form Module

::: tip
This module is experimental and is subject to change.
:::

The form module is designed to simplify collection of survey data and designing 
tutorials in Breadboard. See the [Forms API](../api/modules/form) documentation for more detailed information about each property and method available on the forms.

[[toc]]

## Usage
Before using the form, add the `Form` component to your Vue template somewhere. 
This component will render a form when one is assigned to the player in the 
script engine.

### Frontend
Add the `Form` component in your Vue template somewhere.
```vue
<template>
  <Form :player="player" />
</template>
```

### Scripting
Define a form and then assign it to players.

```groovy
def form = new Form([
  // Add a form definition here as shown by the examples below.
])

form.start() // Start the form

// In the onPlayerJoin step show a player this form
form.addPlayer(player)
```

### Form Scoring
The randomization and subset features of forms can make it difficult to 
determine if a player has answered questions correctly or not. A few methods are
built into Breadboard forms to assist with this problem. Breadboard can compute
scores for "scale" and "choice" question types by using an "answer" property for
these questions. Simply add the correct answer when defining the question and
use the methods below compute the score for a player.

#### Computing a score
When a player completes a form, you can get the raw score data by calling the [`form.getScore`](../api/modules/form/README.md#getscore-vertex-player) method. This method returns a [Score](../api/modules/form/README.md#score) object. To determine
if a player passed the quiz, convert the score object to a number between 0 and 1 using the [`form.calculatePercent`](../api/modules/form/README.md#calculatepercent-score-score) method.

```groovy
def form = new Form([
  pages: [[
    blocks: [[
      type: "choice",
      answer: "red",
      content: "Choose red",
      choices: ["red", "yellow"]
    ]]
  ]]
])

form.onDone{ player ->
  def score = form.getScore(player)
  def percent = form.calculatePercent(score)
  if (percent >= 0.7) {
    // Do something when they passed
  } else {
    // Do something when they failed
  }
}
```
A score object includes all of the relevant information needed to compute a
player's score. See the score [Score](../api/modules/form/README.md#score) definition for more information.


## Examples
### Full example
Create a simple tutorial with a description followed by a "choice" question.
```groovy
def tutorial = new Form([
  name: "tutorial",
  pages: [[
    blocks: [
      type: "html",
      content: "This message is shown on this page. I could also use the `contentKey` property instead to use content written with the content dialog."
    ]
  ], [
    blocks: [
      type: "choice",
      content: "Please choose red",
      randomize: true,
      name: "color",
      answer: "red",
      choices: ["red", "blue", "green", "yellow"]
    ]
  ]]
])

// Start completing the tutorial
tutorial.start()

// Closure that runs when a player completes the form
tutorial.onDone{ player ->
  def score = tutorial.getScore(player)
  def percent = tutorial.calculatePercent(score)
  def passed = percent == 1 // 100% is the only passing grade

  a.addEvent("comprehension-result", [
    player: player.id,    // Which player this score is for
    score: percent,       // Record their score
    passed: passed 
  ])

  if (percent == 1) {
    // Do something when the player passes. For example send them into a game
  } else {
    // Do something else when they fail. In AMT this will likely mean asking
    // them to return the HIT
  }
}

// In the onJoinStep add this:
tutorial.addPlayer(player)

```


### Scale question
Create a Likert scale type question. Define the available choices and questions
as two separate lists.

```groovy
def quiz = new Form([
  name: "quiz",
  showStepper: false,
  pages: [[
    blocks: [[
      type: "scale",
      name: "personality",
      choices: [[
        value: 1,
        content: "Not at all"
      ], [
        value: 2,
        content: "A little"
      ], [
        value: 3,
        content: "Somewhat"
      ], [
        value: 4,
        content: "A lot"
      ], [
        value: 5,
        content: "100%"
      ]],
      items: [[
        value: "cat",
        content: "How much do you identify as a cat?",
      ], [
        value: "dog",
        content: "How much do you identify as a dog?"
      ]]
    ]]
  ]]
])
```


### Randomize everything
To randomize the order of questions or choices add a `randomize: true` parameter
to the configuration for either the question or page you want to randomize.

#### Randomize questions in a page
```groovy
def form = new Form([
  pages: [[
    randomize: true,
    blocks: [...] // Add more than one question definition that will appear in random order
  ]]
])
```

#### Randomize choices in a question
```groovy
def quiz = new Form([
  pages: [[
    blocks: [[
      type: "choice",
      name: "colors",
      content: "Pick your favorite color",
      randomize: true,
      choices: ["red", "blue", "green", "yellow"]
    ]]
  ]]
])
```

### Use a subset of questions
Forms have a `subset` configuration option which allows you to define more 
questions than are actually asked to a single participant. This technique can 
help combat some automation and information sharing techniques used by some AMT
workers.

This feature can be used with the [form scoring feature](#form-scoring) and 
will only score the questions that are asked for each participant.

```groovy
def quiz = new Form([
  pages: [[
    subset: 3,
    blocks: [
      // Define 3 or more questions here. Only 3 will be asked to each player.
    ]
  ]]
])
```
