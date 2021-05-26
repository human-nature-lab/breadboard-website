ReadyUpSequence      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="ReadyUpSequence"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/ReadyUpSequence)
*   [No Frames](ReadyUpSequence.html)

*   Summary: 
Nested   *   [Field](#field_summary)
   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
*   [Field](#field_detail)
   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class ReadyUpSequence
--------------------------------

*   ReadyUpSequence

*   * * *
    
      
    
    class ReadyUpSequence
    extends [FormBase](../DefaultPackage/FormBase.html)
    
    The ReadyUpSequence will wait for all players to join before continuing. On completion, it will return a list of readyPlayers and players who didn't ready up.
    

*   *   ### Field Summary
        
        Fields 
        
        Modifiers
        
        Name
        
        Description
        
        `**java.lang.Object**` 
        
        `[pendingContent](#pendingContent)`
        
    
    *   ### Properties Summary
        
        Properties 
        
        Type
        
        Name and description
        
        `**java.lang.Object**` 
        
        `[readyButtonContent](#readyButtonContent)`  
        
        `**java.lang.Object**` 
        
        `[readyContent](#readyContent)`  
        
        `**java.lang.Object**` 
        
        `[timerContent](#timerContent)`  
        
        `**java.lang.Object**` 
        
        `[waitingContent](#waitingContent)`  
        
    
    *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[ReadyUpSequence](#ReadyUpSequence()) ()`  
        
        `[ReadyUpSequence](#ReadyUpSequence(java.util.Map)) (java.util.Map opts)`  
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[addPlayer](#addPlayer(Vertex))**([Vertex](../Vertex.html) player)`  
        Add a single player to the ready up sequence.
        
        `java.lang.Object`
        
        `**[addPlayers](#addPlayers(java.lang.Object))**(java.lang.Object players)`  
        Add a list of players at the same time
        
        `java.lang.Object`
        
        `**[end](#end())**()`  
        End the ready up sequence by cleaning up timers and actions
        
        `java.lang.Object`
        
        `**[onDone](#onDone(groovy.lang.Closure))**(groovy.lang.Closure cb)`  
        Pass a closure to be called when the ready up sequence is complete
        
        `java.lang.Object`
        
        `**[removePlayer](#removePlayer(Vertex))**([Vertex](../Vertex.html) player)`  
        Remove a player from the ready up sequence
        
        `java.lang.Object`
        
        `**[start](#start())**()`  
        Begin the ready up sequence by showing all players a timer and a "ready" button
        

*   *   ### Field Detail
        
        *   #### public java.lang.Object **pendingContent**
            
    
    *   ### Property Detail
        
        *   #### java.lang.Object **readyButtonContent**
            
        
        *   #### java.lang.Object **readyContent**
            
        
        *   #### java.lang.Object **timerContent**
            
        
        *   #### java.lang.Object **waitingContent**
            
    
    *   ### Constructor Detail
        
        *   #### **ReadyUpSequence**()
            
        
        *   #### **ReadyUpSequence**(java.util.Map opts)
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **addPlayer**([Vertex](../Vertex.html) player)
            
            Add a single player to the ready up sequence.
            
        
        *   #### java.lang.Object **addPlayers**(java.lang.Object players)
            
            Add a list of players at the same time
            
        
        *   #### java.lang.Object **end**()
            
            End the ready up sequence by cleaning up timers and actions
            
        
        *   #### java.lang.Object **onDone**(groovy.lang.Closure cb)
            
            Pass a closure to be called when the ready up sequence is complete
            
        
        *   #### java.lang.Object **removePlayer**([Vertex](../Vertex.html) player)
            
            Remove a player from the ready up sequence
            
        
        *   #### java.lang.Object **start**()
            
            Begin the ready up sequence by showing all players a timer and a "ready" button
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/ReadyUpSequence)
*   [No Frames](ReadyUpSequence.html)

*   Summary: 
Nested   *   [Field](#field_summary)
   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
*   [Field](#field_detail)
   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)