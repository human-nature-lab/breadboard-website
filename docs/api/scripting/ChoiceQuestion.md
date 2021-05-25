ChoiceQuestion      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="ChoiceQuestion"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/ChoiceQuestion)
*   [No Frames](ChoiceQuestion.html)

*   Summary: 
Nested   *   [Field](#field_summary)
      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
*   [Field](#field_detail)
      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class ChoiceQuestion
-------------------------------

*   ChoiceQuestion

*   * * *
    
      
    
    class ChoiceQuestion
    extends [Question](../DefaultPackage/Question.html)
    
    A choice question type. Can be single or multiple choice. Optionally can randomize the order of the choices.
    

*   *   ### Field Summary
        
        Fields 
        
        Modifiers
        
        Name
        
        Description
        
        `**java.lang.Boolean**` 
        
        `[isRandom](#isRandom)`
        
        `**java.lang.Boolean**` 
        
        `[multiple](#multiple)`
        
    
    *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[ChoiceQuestion](#ChoiceQuestion(java.util.Map)) (java.util.Map opts)`  
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.util.Map`
        
        `**[assignTo](#assignTo(Vertex, int))**([Vertex](../Vertex.html) player, int seed)`  
        
        `java.util.Map`
        
        `**[formatResult](#formatResult(java.lang.String, java.lang.String, java.util.Map, java.util.Map))**(java.lang.String form, java.lang.String playerId, java.util.Map res, java.util.Map state)`  
        Mutate the result map before it is stored in the db
        
        `java.lang.Boolean`
        
        `**[isCorrect](#isCorrect(java.lang.Object))**(java.lang.Object response)`  
        
    *   ### Inherited Methods Summary
        
        Inherited Methods 
        
        Methods inherited from class
        
        Name
        
        `class [Question](../DefaultPackage/Question.html)`
        
        `[assignTo](../DefaultPackage/Question.html#assignTo(Vertex)), [formatResult](../DefaultPackage/Question.html#formatResult(java.lang.String, java.lang.String, java.util.Map, java.util.Map)), [saveResult](../DefaultPackage/Question.html#saveResult(java.util.Map))`
        
        `class [Block](../DefaultPackage/Block.html)`
        
        `[assignTo](../DefaultPackage/Block.html#assignTo(Vertex))`
        

*   *   ### Field Detail
        
        *   #### public java.lang.Boolean **isRandom**
            
        
        *   #### public java.lang.Boolean **multiple**
            
    
    *   ### Constructor Detail
        
        *   #### **ChoiceQuestion**(java.util.Map opts)
            
    
    *   ### Method Detail
        
        *   #### java.util.Map **assignTo**([Vertex](../Vertex.html) player, int seed)
            
        
        *   #### java.util.Map **formatResult**(java.lang.String form, java.lang.String playerId, java.util.Map res, java.util.Map state)
            
            Mutate the result map before it is stored in the db
            
        
        *   #### java.lang.Boolean **isCorrect**(java.lang.Object response)
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/ChoiceQuestion)
*   [No Frames](ChoiceQuestion.html)

*   Summary: 
Nested   *   [Field](#field_summary)
      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
*   [Field](#field_detail)
      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)