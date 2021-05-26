StepFactory      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="StepFactory"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/StepFactory)
*   [No Frames](StepFactory.html)

*   Summary: 
Nested   Field   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class StepFactory
----------------------------

*   StepFactory

*   * * *
    
      
    
    class StepFactory
    extends java.lang.Object
    
    Manages creating Steps.
    

*   *   ### Properties Summary
        
        Properties 
        
        Type
        
        Name and description
        
        `**java.lang.Object**` 
        
        `[eventTracker](#eventTracker)`  
        
        `**java.lang.Object**` 
        
        `[gameListener](#gameListener)`  
        
        `**[PlayerActions](../DefaultPackage/PlayerActions.html)**` 
        
        `[playerActions](#playerActions)`  
        
    
    *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[StepFactory](#StepFactory()) ()`  
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `[Step](../DefaultPackage/Step.html)`
        
        `**[createNoUserActionStep](#createNoUserActionStep(java.lang.String))**(java.lang.String name)`  
        Create a NoUserActionStep and correctly hook it into the player action queue, event tracker and game listener.
        
        `[Step](../DefaultPackage/Step.html)`
        
        `**[createStep](#createStep(java.lang.String))**(java.lang.String name)`  
        Create a default Step and correctly hook it into the player action queue, event tracker and game listener.
        
    *   ### Inherited Methods Summary
        
        Inherited Methods 
        
        Methods inherited from class
        
        Name
        
        `class java.lang.Object`
        
        `java.lang.Object#wait(long), java.lang.Object#wait(long, int), java.lang.Object#wait(), java.lang.Object#equals(java.lang.Object), java.lang.Object#toString(), java.lang.Object#hashCode(), java.lang.Object#getClass(), java.lang.Object#notify(), java.lang.Object#notifyAll()`
        

*   *   ### Property Detail
        
        *   #### java.lang.Object **eventTracker**
            
        
        *   #### java.lang.Object **gameListener**
            
        
        *   #### [PlayerActions](../DefaultPackage/PlayerActions.html) **playerActions**
            
    
    *   ### Constructor Detail
        
        *   #### **StepFactory**()
            
    
    *   ### Method Detail
        
        *   #### [Step](../DefaultPackage/Step.html) **createNoUserActionStep**(java.lang.String name)
            
            Create a NoUserActionStep and correctly hook it into the player action queue, event tracker and game listener.
            
        
        *   #### [Step](../DefaultPackage/Step.html) **createStep**(java.lang.String name)
            
            Create a default Step and correctly hook it into the player action queue, event tracker and game listener.
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/StepFactory)
*   [No Frames](StepFactory.html)

*   Summary: 
Nested   Field   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)