SharedTimer      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="SharedTimer"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/SharedTimer)
*   [No Frames](SharedTimer.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class SharedTimer
----------------------------

*   SharedTimer

*   * * *
    
      
    
    class SharedTimer
    extends [BreadboardBase](../DefaultPackage/BreadboardBase.html)
    
   A timer that is assigned to one or more players. Removes the need to create duplicate timers for each player.
    

*   *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[SharedTimer](#SharedTimer(int)) (int seconds)`  
        
        `[SharedTimer](#SharedTimer(java.util.Map)) (java.util.Map opts)`  
        Create a shared timer via a Map
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[addPlayer](#addPlayer(Vertex))**([Vertex](../Vertex.html) player)`  
        Add a single player to this timer
        
        `java.lang.Object`
        
        `**[addPlayers](#addPlayers(java.lang.Object))**(java.lang.Object players)`  
        Add multiple players at once
        
        `java.lang.Object`
        
        `**[addTime](#addTime(int))**(int delta)`  
        Add time to an existing timer
        
        `java.lang.Object`
        
        `**[cancel](#cancel())**()`  
        Cancel the timer early and remove it from each player
        
        `java.lang.Object`
        
        `**[onDone](#onDone(groovy.lang.Closure))**(groovy.lang.Closure cb)`  
        Register a closure to be called when the timer has ended
        
        `java.lang.Object`
        
        `**[pause](#pause())**()`  
        Pause the timer
        
        `java.lang.Object`
        
        `**[removePlayer](#removePlayer(Vertex))**([Vertex](../Vertex.html) player)`  
        Remove a single player from the timer.
        
        `java.lang.Object`
        
        `**[restart](#restart())**()`  
        Restart the timer as though it just started
        
        `java.lang.Object`
        
        `**[resume](#resume())**()`  
        Resume the timer
        
        `java.lang.Object`
        
        `**[setDuration](#setDuration(int))**(int duration)`  
        Set the duration for this timer
        
        `java.lang.Object`
        
        `**[tick](#tick(int))**(int delta)`  
        This updates the timer for each player attached to this timer.
        

*   *   ### Constructor Detail
        
        *   #### **SharedTimer**(int seconds)
            
        
        *   #### **SharedTimer**(java.util.Map opts)
            
            Create a shared timer via a Map
            
            **Parameters:**
            
            `{Map}` - opts
            
            `{Number}` - \[opts.time\] - Timer time in seconds
            
            `{Number}` - \[opts.duration\] - Timer time in milliseconds
            
            `{Vertex}` - \[opts.player\] - A player to add this timer to
            
            `{Vertex[]}` - \[opts.players\] - A list of players to add this timer to
            
            `{Boolean}` - \[opts.lazy\] - Start the timer when the first player is added
            
            `{Closure}` - \[opts.result\] - Call this closure when the timer expires
            
            `{String}` - \[opts.timerText\] - The timer label to display
            
            `{String}` - \[opts.name\] - The unique key to use for this timer
            
            `{Number}` - \[opts.updateRate\] - How often this timer should update
            
            `{String}` - \[opts.type="time"\] - Valid options are "time" and "currency"
            
            `{String}` - \[opts.direction = "down"\] - Valid options are "up" or "down"
            
            `{Number}` - \[opts.currencyAmount\] - Initial currency for the timer
            
            `{String}` - \[opts.appearance=""\] - The color to use to display the timer
            
            `{Map}` - \[opts.content\] - A content map to use for fetching the timer label content
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **addPlayer**([Vertex](../Vertex.html) player)
            
            Add a single player to this timer
            
            **Parameters:**
            
            `{Vertex}` - player - The player to add to this timer
            
        
        *   #### java.lang.Object **addPlayers**(java.lang.Object players)
            
            Add multiple players at once
            
            **Parameters:**
            
            `{Vertex[]}` - players - An iterable list of players to add to this timer
            
        
        *   #### java.lang.Object **addTime**(int delta)
            
            Add time to an existing timer
            
            **Parameters:**
            
            `{int}` - delta - The number of milliseconds to add to the timer
            
        
        *   #### java.lang.Object **cancel**()
            
            Cancel the timer early and remove it from each player
            
        
        *   #### java.lang.Object **onDone**(groovy.lang.Closure cb)
            
            Register a closure to be called when the timer has ended
            
            **Parameters:**
            
            `{Closure}` - cb - Closure without arguments
            
        
        *   #### java.lang.Object **pause**()
            
            Pause the timer
            
        
        *   #### java.lang.Object **removePlayer**([Vertex](../Vertex.html) player)
            
            Remove a single player from the timer.
            
            **Parameters:**
            
            `{Vertex}` - player - The player to remove
            
            
        
        *   #### java.lang.Object **restart**()
            
            
            
        
        *   #### java.lang.Object **resume**()
            
            Resume the timer
            
        
        *   #### java.lang.Object **setDuration**(int duration)
            
            Set the duration for this timer
            
            **Parameters:**
            
            `{int}` - duration - The new timer duration in milliseconds
            
        
        *   #### java.lang.Object **tick**(int delta)
            
            This updates the timer for each player attached to this timer.
            
            **Parameters:**
            
            `{Int}` - delta - The number of milliseconds to increase the timer by.
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/SharedTimer)
*   [No Frames](SharedTimer.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)