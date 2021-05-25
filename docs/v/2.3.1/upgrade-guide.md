# Upgrade Guide

## Migrating from v2.2 to v2.3
You have two options for migrating existing experiments from v2.2 to v2.3: exporting your experiment using v2.2 and 
importing your experiment using the v2.3 import feature, or copying your v2.2 database file into your installation
of v2.3.

### Export and import your experiment in v2.3
1. Export your experiment from v2.2 existing experiments from v2.2.x and download these directories to your machine locally.
2. Create a new version of breadboard by [downloading v2.3.0](http://breadboard.yale.edu/#install)
3. Setup the new instance of breadboard 2.3
4. Compress each of the experiments individually using Zip compression
5. Upload and import each experiment using the browser


### Major Feature changes
- Mobile support
	- Client can now run and resize to fit on mobile devices
- Import/Export of experiment
	- Experiments can now be imported/exported from the client interface
- UI/UX changes
	- Many changes were made to the user interface to improve the style and organization as well as make the intention of each button self-evident.
- Asynchronous loading
	- Client graph and client HTML now load after the page loads. This mean that some custom jQuery/JavaScript code won't work correctly without some modifications.
- Amazon Mechanical Turk Admin dialog
	- Most of the features that were recently removed from the AMT administrator console have been added to the new AMT management console. These include: bulk approving HITs and bonuses as well as create dummy HITs.
- Polling based updates
	- Previous versions of breadboard used an event based approach to updating clients with changes to the graph. v2.3 now uses a polling based update method which sends clients updates at a specific, configurable interval. This can be set by changing the value of `breadboard.clientUpdateRate` in `application.conf`. The old event based approach will be used if `breadboard.clientUpdateRate` is set to 0 or omitted from the configuration.
- Runs with JDK 7/8/9
- Players dialog updates

### Breaking changes
- Client graph and client HTML
	- Both of these files were changed to make the client view work on mobile devices. These changes will likely break experiments with customizations to these files so they will not be imported from v2.2 to v2.3. Any customizations that have been made to these two files will need to be merged manually.
	- See the specific changes to make in the “Upgrading Client HTML" and "Upgrading Client Graph” sections below.


### Minor changes
- Client graph, client HTML, and styles have all been moved to the Customize dialog
- Tabs show their state. Indicators show if the tab has been modified and still needs to be saved.
- *Test* button has been removed
- Parameter min/max values are being enforced
- Login link opens in new tab by default
- Dialog buttons no longer disappear when they are open. Instead it behaves more like an OS task bar.

### Upgrading Client HTML

1. Change:
```
1       <div id="mainDiv" ng-controller="ClientCtrl">	
```

To:
```
1       <div class="main" id="mainDiv">
```


2. Change:
```
6    <div id="statusDiv" … ng-hide="client.player.dropped == true">
7    <progressbar … </progressbar>
8    </div>
9    <div id="gameDiv">
```

To:
```
6    <div id="status" class="timers" 
       ng-hide="client.player.dropped == true">
7      <bb-timer 
         ng-repeat="timer in client.player.timers | orderBy:'order'"
         timer="timer">
8      </bb-timer>
9    </div>
10   <div id="game" class="game">
```

3. Change:
```
19      <button ng-repeat="choice in childChoices |
                           filter: {class: '!drop'}" 
          class="{{choice.class}}" 
          ng-click="makeChoice(choice.uid)" 
          ng-disabled="choicesForm.$invalid">
20                        {{choice.name}}
```

To:
```
19       <button ng-repeat="choice in childChoices | filter: {class: '!drop'}" 
          class="{{choice.class}}" 
          ng-click="makeChoice(choice.uid)" 
          ng-disabled="choicesForm.$invalid || hasSelectedChoice">
20         {{choice.name}} 
21         <span ng-if="choice.wasSelected" 
                 class="fa fa-spinner fa-spin"></span>
```


### Upgrading Client Graph

1. Change:
```
1    function Graph(w, h, clientId) {
2  
3      var width = (w == undefined) ? 600 : w;
4      var height = (h == undefined) ? 600 : h;
```

To:
```
1    function Graph(clientId, parentElement) {
2
3      var width = parentElement ? parentElement.clientWidth : 600;
4      var height = parentElement ? parentElement.clientHeight : 600;
```

2. Change:
```
14    var div = d3.select("#graph");
15    var vis = div.append("svg:svg")
16      .attr("width", width)
17      .attr("height", height);
```

To:
```
14    var div = parentElement ? d3.select(parentElement) : d3.select("#graph");
15    var vis = div.append("svg:svg")
16      .attr("viewBox", "0 0 600 600");
```
