# Form Module APIs

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
| players | List<Vertex> | | A list of player vertices |

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

##### Returns
[`Score`](#Score)
#### onDone(Closure cb)
Add a closure to run when the form is completed by a player
#### start()
Start the form.

# Interfaces

## Score
A map with the following parameters.