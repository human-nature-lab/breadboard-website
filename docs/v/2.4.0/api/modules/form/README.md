# Form Module APIs

Find more information and examples of forms [here](../../../modules/form.md).

[[toc]]
## Form

### Constructor

Arguments: `Map opts`

`Map opts`
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | The unique key to use to identify this form |
| stepper | Boolean | `true` | Indicates whether or not the progress through the form should be shown |
| nonLinear | Boolean | `false` | Indicates whether the form can only be navigated in order (this is the default) or if the players can jump to different pages |
| recordResults | Boolean | `true` | Record an event for each page submission |
| recordNav | Boolean | `false` | Record an event for each form navigation |
| pageDefaults | Map | `[:]` | Sets default options for each page added to this form |
| sectionDefaults | Map | `[:]` | Sets default options for each section added to this form |
| questionDefaults | Map | `[:]` | Sets default options for each question added to this form |

### Methods

#### addPage(Page page)
#### addPage(Map pageDescriptor)
Add a single page to this form.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page *optional* | Page | | An already instantiated page |
| pageDescriptor *optional* | Map | | A valid page descriptor to pass to the Page constructor |

#### addPages(List pages)
Add multiple pages at the same time
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| pages | List<Page \| Map> | | A list of instantiated pages or valid page descriptors as described above |

#### addPlayer(Vertex player)
Add a player to this form
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| player | Vertex | | A player vertex |

#### addPlayers(List players)
Add multiple players to this form at once
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| players | List\<Vertex\> | | A list of player vertices |

#### calculatePercent(Score score)
Convert a score into a percentage.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| score | Score | | A score as returned from `getScore` |

##### Returns
`Double`

#### clear()
Clear out all players / results for this form
#### end()
End the form and perform cleanup for all players
####	getScore(Vertex player)
This method will calculate the percentage of correct responses for this player
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| player | Vertex | | The player node to score |

##### Returns
[`Score`](#Score)
#### onDone(Closure cb)
Add a closure to run when the form is completed by a player
#### start()
Start the form.


# Interfaces

## Form Definition
A Map with the following parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| name | String | | The unique key to use to identify this form
| stepper *optional* | Boolean | `true` | Indicates whether or not the progress through the form should be shown
| nonLinear *optional* | Boolean | `false` | Indicates whether the form can only be navigated in order (this is the default) or if the players can jump to different pages
| recordResults *optional* | Boolean | `true` | Record an event for each page submission
| recordNav *optional* | Boolean | `false` | Record an event for each form navigation
| pageDefaults *optional* | [Page Definition](#page-definition) | `[:]` | Sets default options for each page added to this form
| sectionDefaults *optional* | [Section Definition](#section-definition) | `[:]` | Sets default options for each section added to this form
| questionDefaults *optional* | [Question Definition](#question-definition) | `[:]` | Sets default options for each question added to this form

## Page Definition
A Map with the following parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| title *optional* | String | `""` | The title to display for this page |
| onEnter *optional* | Closure | | A closure that will be called when a player enters a page. |
| onExit *optional* | Closure | | A closure that will be called when a player exits a page. |
| sectionDefaults *optional* | [Section Definition](#section-definition) | | Default values to use for each section of this page. |
| blocks \| questions | List<[Question Definition](#question-definition)> | | The questions to show on this page |
| groups \| sections *optional* | List<[Section Definition](#section-definition)> | | The sections to show on this page. Can't be used with "questions" or "blocks". |

## Section Definition
A Map with the following parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| blocks \| questions | List<[QuestionDefinition](#question-definition)> | | Questions to be shown in this section |
| subset *optional* | Integer | | How many questions to randomly show to each player. Implies `randomize: true` |
| randomize *optional* | Boolean | `false` | Whether or not to randomize the order of questions shown to each player |
| questionDefaults *optional* | [QuestionDefinition](#question-definition) | `[:]` | Default values to use for each question in this section |

## Question Definition
The question definition will vary depending on the question type. The base 
question definition is a Map with the following parameters.
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| type | "choice", "html", "scale", "text" | | The type of question to use |
| name | String | | The unique name to use for this question. Data recorded for this question will appear under this name |
| content \| contentKey | String | | Either a string with the content for this question or the name of content defined in the content dialog |
| answer *optional* | String | | The correct answer for this question |
| required *optional* | Boolean | `true` | Whether or not this question can be skipped |
| fills *optional* | List<String> | | The fills to use when using the `contentKey` property |

### Choice Question
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| multiple *optional* | Boolean | `false` | Allow the user to select more than one choice |
| choices | List<String | Choice> |  | Which choices to display to the player |
| randomize | Boolean | `false` | Whether or not to randomize the order of the choices |

### Scale Question
TODO

### Text Question
TODO

## Score
A Map with the following parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| correct | Integer | | How many answers were correct |
| incorrect | Integer | | How many answers were not correct |
| total | Integer | | How many questions were asked |
| skipped | Integer | | How many questions were skipped |