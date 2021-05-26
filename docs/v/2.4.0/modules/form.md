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

```vue
<template>
  <Form :player="player" />
</template>
```

## Examples
### Trivial example
Create a simple tutorial with a description followed by a simple "choice"
question.
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

// Closure that runs when each player completes the form
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
    // Do something when the player passes
  } else {
    // Do something else when they fail
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
    blocks: [
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
    ]
  ]]
])
```


### Randomize everything
TODO

### Use a subset of questions
TODO