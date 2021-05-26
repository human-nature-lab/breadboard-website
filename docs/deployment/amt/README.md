# Amazon Mechanical Turk

Once you have designed and tested your experiment locally you may want to run an experiment online using AMT workers. You will need a publicly accessible server with a domain name and SSL certificate, an AMT Requester Account, and a properly configured copy of breadboard running on your server. This guide will walk you through the steps necessary to get your experiment up and running with AMT participants.

### Configuring breadboard for Amazon Mechanical Turk 
1. [Setting up a server](../setting-up-a-server)
2. [Installing a SSL Certificate](../installing-a-ssl-certificate)
3. [Create an AMT Requester Account](./creating-an-amt-requester-account)
4. [Configuring breadboard](./configuring-breadboard)
5. [Creating a HIT](./creating-a-hit)


### Configuring a breadboard experiment for Amazon Mechanical Turk
In order to use Amazon Mechanical Turk effectively, three common problems must be solved within the experiment.
1. [Collecting players](#Collecting-players)
TODO
#### Collecting players

#### Finding inactive players
AMT players will occasionally not finish or start the game after joining. This must be handled using experiment code and can be solved in several different ways. With synchronous experiments it is usually a good idea to make sure that all players are still active by measuring if they are still making choices. This can be done using a timer that resets whenever the player sends an update. This gives the player X amount of time to respond before being told that they will be dropped from the game unless they make a selection.

#### Paying players
When an AMT worker is done with a game they need to submit the HIT in before they can get paid. Breadboard provides a default form for submitting HITs which can be assigned to the text property on a vertex when the game is complete. After the worker has submitted their HIT they will appear in AMT Dialog
###### Example
```groovy
finishStep = stepFactory.createStep()

finishStep.run = {
  g.V.each { v->
    v.text = "<h2>Thank you for participating in this task.</h2>"
    v.text += "<p>Please submit the assignment below.</p>"
    v.text += g.getSubmitForm(v, v.score)
  }
}
```
For more information about the getSubmitForm method refer to the [Language Reference](../../scripting/language-reference.md#g-getsubmitform-player-bonus-reason-sandbox-comments).
