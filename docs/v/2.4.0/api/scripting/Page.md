Page      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="Page"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/Page)
*   [No Frames](Page.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class Page
---------------------

*   Page

*   * * *
    
      
    
    class Page
    extends [FormBase](../DefaultPackage/FormBase.html)
    
    One page in a form. Controls how the page is displayed by setting a title and optionally randomizing sections.
    

*   *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[Page](#Page()) ()`  
        
        `[Page](#Page(java.util.Map)) (java.util.Map opts)`  
        
        **Parameters:**
        
        `{Map}` - opts
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[addSection](#addSection(PageSection))**([PageSection](../DefaultPackage/PageSection.html) section)`  
        Add a section to a page
        
        `java.lang.Object`
        
        `**[addSection](#addSection())**()`  
        Add a section to a page
        
        `java.lang.Object`
        
        `**[addSection](#addSection(java.util.Map))**(java.util.Map sectionDesc)`  
        Add a section as a map.
        
        `java.util.Map`
        
        `**[assignTo](#assignTo(Vertex, int))**([Vertex](../Vertex.html) player, int seed)`  
        Assign this page to a player, randomizing sections if necessary.
        
        `java.lang.Object`
        
        `**[enter](#enter(Vertex, java.lang.Boolean))**([Vertex](../Vertex.html) player, java.lang.Boolean isForward)`  
        Perform page enter actions
        
        `java.lang.Object`
        
        `**[exit](#exit(Vertex, java.lang.Boolean))**([Vertex](../Vertex.html) player, java.lang.Boolean isForward)`  
        Perform page exit actions
        
        `java.lang.Object`
        
        `**[saveResults](#saveResults(java.lang.String, Vertex, java.util.Map, java.util.Map))**(java.lang.String form, [Vertex](../Vertex.html) player, java.util.Map results, java.util.Map state)`  
        Format and store the page results in the DB
        
        `java.lang.Boolean`
        
        `**[validate](#validate(java.util.Map, java.util.Map))**(java.util.Map results, java.util.Map state)`  
        Validate the types of results for this page
        

*   *   ### Constructor Detail
        
        *   #### **Page**()
            
        
        *   #### **Page**(java.util.Map opts)
            
            **Parameters:**
            
            `{Map}` - opts
            
            `{List}` - \[opts.blocks\] - A list of block descriptions to add. Cannot be used with the sections argument.
            
            `{List}` - \[opts.sections\] - A list of section descriptions to add. Cannot be used with the blocks argument.
            
            `{String}` - \[opts.title\] - A string which will be shown to the user when using the form stepper.
            
            `{Closure}` - \[opts.onExit\] - Closure which is called each time the page is left by a player.
            
            `{Closure}` - \[opts.onEnter\] - Closure which is called each time this page is entered by a player.
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **addSection**([PageSection](../DefaultPackage/PageSection.html) section)
            
            Add a section to a page
            
            **Parameters:**
            
            `section` - {PageSection} The PageSection instance to add
            
        
        *   #### java.lang.Object **addSection**()
            
            Add a section to a page
            
        
        *   #### java.lang.Object **addSection**(java.util.Map sectionDesc)
            
            Add a section as a map.
            
            **Parameters:**
            
            `sectionDesc` - {Map} A Map describing a page section to create.
            
        
        *   #### java.util.Map **assignTo**([Vertex](../Vertex.html) player, int seed)
            
            Assign this page to a player, randomizing sections if necessary.
            
        
        *   #### java.lang.Object **enter**([Vertex](../Vertex.html) player, java.lang.Boolean isForward)
            
            Perform page enter actions
            
            **Parameters:**
            
            `{Vertex}` - player - The current player
            
            `{Boolean}` - isForward - True if we're entering the page via the next button (or first entrance of the first page)
            
        
        *   #### java.lang.Object **exit**([Vertex](../Vertex.html) player, java.lang.Boolean isForward)
            
            Perform page exit actions
            
            **Parameters:**
            
            `{Vertex}` - player - The current player
            
            `{Boolean}` - isForward - True if we're leaving the page by hitting the next button or "Done"
            
        
        *   #### java.lang.Object **saveResults**(java.lang.String form, [Vertex](../Vertex.html) player, java.util.Map results, java.util.Map state)
            
            Format and store the page results in the DB
            
        
        *   #### java.lang.Boolean **validate**(java.util.Map results, java.util.Map state)
            
            Validate the types of results for this page
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/Page)
*   [No Frames](Page.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)