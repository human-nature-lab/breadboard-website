# Players Dialog
This dialog shows a list of all of the players in the graph. It is synchronized with the graph dialog so that players selected in one dialog will also be selected in the other dialog. Clicking on a player will show all of the properties currently assigned to that player node. Click on nested properties to expand them.

It includes a filter function that includes the ability to perform simple queries on the players in Breadboard. Currently, it is not possible to use multiple operators for a query only one operator can be used at a time.

## Examples

### Show active players
Assuming you've set a property called "active" on each player vertex that is either true or false. You can see only the active players using `active=1` or only the inactive players by using the query `active=0`.

### Query player scores
If you have a "score" property for each player you can query for players using `<`, `>`, `>=`, and `<=` operators. To see all players with a score of 10 or lower you'd use the query `score <= 10`

### Players with X number of messages
If you're using a list of messages on the player node, you can query the length of this list using `messages.length > 5` for players with more than 5 messages.

### Nested properties
Querying nested properties works using "dot" notation. Just add a dot for each level into the player node. For example `messages.0.timestamp < 1000` would check to see if the first message in a list has a timestamp lower than 1000.

## Operators

### Equal `=`
Check if two values are the same. This comparison uses ["loose equality"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) in JavaScript to compare values. This means that `1` and `true` are equal and `0` and `false` are also equal.

### Greater than / less than `>`, `<`
Compare if one number (or string) is greater than another. This behavior can be
inconsistent in strings.

### Contains `~`
Check if one string is contained in another string. A query for `text~world` would include players with a text property set to `"Hello, World"` and `"Worldwide"`. 