Form      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="Form"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/Form)
*   [No Frames](Form.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class Form
---------------------

*   Form

*   * * *
    
      
    
    class Form
    extends [FormBase](../DefaultPackage/FormBase.html)
    
    Creates a \`Form\` in Breadboard for basic surveys, tutorials, and comprehension tests.
    

*   *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[Form](#Form(java.util.Map)) (java.util.Map opts)`  
        
        **Parameters:**
        
        `{Map}` - opts
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[addPage](#addPage(Page))**([Page](../DefaultPackage/Page.html) page)`  
        Add a single page instance
        
        `java.lang.Object`
        
        `**[addPage](#addPage(java.util.Map))**(java.util.Map pageDesc)`  
        Add a page to this form
        
        `java.lang.Object`
        
        `**[addPages](#addPages(java.util.List))**(java.util.List pages)`  
        Add multiple pages at the same time
        
        `java.lang.Object`
        
        `**[addPlayer](#addPlayer(Vertex))**([Vertex](../Vertex.html) player)`  
        Add a player to this form
        
        `java.lang.Object`
        
        `**[addPlayers](#addPlayers(java.lang.Object))**(java.lang.Object players)`  
        Add multiple players to this form at once
        
        `java.lang.Double`
        
        `**[calculatePercent](#calculatePercent(java.util.Map))**(java.util.Map score)`  
        Convert a score into a percentage.
        
        `java.lang.Object`
        
        `**[clear](#clear())**()`  
        Clear out all players / results for this form
        
        `java.lang.Object`
        
        `**[end](#end())**()`  
        End the form and perform cleanup for all players
        
        `java.util.Map`
        
        `**[getScore](#getScore(Vertex))**([Vertex](../Vertex.html) player)`  
        This method will calculate the percentage of correct responses for this player
        
        `java.lang.Object`
        
        `**[onDone](#onDone(groovy.lang.Closure))**(groovy.lang.Closure cb)`  
        Add a closure to run when the form is completed by a player
        
        `java.lang.Object`
        
        `**[start](#start())**()`  
        Start the form.
        

*   *   ### Constructor Detail
        
        *   #### **Form**(java.util.Map opts)
            
            **Parameters:**
            
            `{Map}` - opts
            
            `{String}` - name - The unique key to use to identify this form
            
            `{Boolean}` - \[stepper=true\] - Indicates whether or not the progress through the form should be shown
            
            `{Boolean}` - \[nonLinear=false\] - Indicates whether the form can only be navigated in order (this is the default) or if the players can jump to different pages
            
            `{Boolean}` - \[recordResults=true\] - Record an event for each page submission
            
            `{Boolean}` - \[recordNav=false\] - Record an event for each form navigation
            
            `{Map}` - \[pageDefaults=\[:\]\] - Sets default options for each page added to this form
            
            `{Map}` - \[sectionDefaults=\[:\]\] - Sets default options for each section added to this form
            
            `{Map}` - \[questionDefaults=\[:\]\] - Sets default options for each question added to this form
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **addPage**([Page](../DefaultPackage/Page.html) page)
            
            Add a single page instance
            
        
        *   #### java.lang.Object **addPage**(java.util.Map pageDesc)
            
            Add a page to this form
            
            **Parameters:**
            
            `{Map}` - page - A map which represents a form page. See Page constructor for all options.
            
        
        *   #### java.lang.Object **addPages**(java.util.List pages)
            
            Add multiple pages at the same time
            
            **Parameters:**
            
            `{List}` - pages - Either a list of Maps or Page objects
            
        
        *   #### java.lang.Object **addPlayer**([Vertex](../Vertex.html) player)
            
            Add a player to this form
            
            **Parameters:**
            
            `{Vertex}` - player - The player to add
            
        
        *   #### java.lang.Object **addPlayers**(java.lang.Object players)
            
            Add multiple players to this form at once
            
        
        *   #### java.lang.Double **calculatePercent**(java.util.Map score)
            
            Convert a score into a percentage. Takes into account skipped questions.
            
            **Parameters:**
            
            `{Map}` - score - The score returned from the \`getScore\` method
            
        
        *   #### java.lang.Object **clear**()
            
            Clear out all players / results for this form
            
        
        *   #### java.lang.Object **end**()
            
            End the form and perform cleanup for all players
            
        
        *   #### java.util.Map **getScore**([Vertex](../Vertex.html) player)
            
            This method will calculate the percentage of correct responses for this player
            
            **Parameters:**
            
            `{Vertex}` - player - The player to get the score for
            
        
        *   #### java.lang.Object **onDone**(groovy.lang.Closure cb)
            
            Add a closure to run when the form is completed by a player
            
            **Parameters:**
            
            `{Closure}` - cb - A closure which is passed the player who just completed the form
            
        
        *   #### java.lang.Object **start**()
            
            Start the form. Once this is called, the form will be shown to all added players and any players added after the form has been started will automatically be shown the form.
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/Form)
*   [No Frames](Form.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)