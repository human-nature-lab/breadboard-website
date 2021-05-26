# Steps Dialog
**The Steps dialog allows the user to set up repeatable experiment logic and pause the progression of a game until all players have made their choices in the preceding step.**

When you create a new experiment, there are three default steps:

- **InitStep**: 

    This step is run when the Run button is clicked or, in the case of an AMT experiment, automatically when the HIT lifetime + tutorial time has elapsed. This step should be used to set up and start the experiment once all the subjects have joined.   

- **OnJoinStep**:

    This step is run when the participants join the game, the run closure is passed the participant's ID which can be used to access the participant's node. This step should be used to set up tasks you want the participants to complete while they are waiting for all participants to gather.

- **OnLeaveStep**:

    This step is run when nodes are removed from the graph.

Each step consists of a run closure and a done closure:

```groovy
initStep = stepFactory.createStep()

initStep.run = {
  g.random(connectivity)
  
  g.V.each { v->
    v.score = initScore
    v.cooperation = 0
    v.text = c.get("Tutorial")
    a.add(v, [name: "Ready", result:{ v.text += c.get("PleaseWait")}])
  }
}

initStep.done = {
  cooperationStep.start()
}
```

In this example the participants are arranged in an Erdős–Rényi random graph, each participant is assigned an initial score and cooperation property, tutorial text is displayed, and a Ready button is displayed. Once all participants have clicked the Ready button, the 'done' closure is run and the CooperationStep is started.

![The Steps Dialog](https://github.com/human-nature-lab/breadboard/wiki/images/the-steps-dialog.png)

### Video:

<iframe width="750" height="480" src="https://www.youtube.com/embed/bdLhCn9kI18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
