PageSection      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="PageSection"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/PageSection)
*   [No Frames](PageSection.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class PageSection
----------------------------

*   PageSection

*   * * *
    
      
    
    class PageSection
    extends [FormBase](../DefaultPackage/FormBase.html)
    
    Represents a section of a Page within a Form. Optionally handles randomizing and selecting a subset of questions to display to each player.
    

*   *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[PageSection](#PageSection()) ()`  
        
        `[PageSection](#PageSection(java.util.Map)) (java.util.Map opts)`  
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[addBlock](#addBlock(Block))**([Block](../DefaultPackage/Block.html) block)`  
        Add a block instance directly to this page.
        
        `java.lang.Object`
        
        `**[addBlock](#addBlock(java.util.Map))**(java.util.Map blockDesc)`  
        Add a block via a Map.
        
        `java.util.Map`
        
        `**[assignTo](#assignTo(Vertex, int))**([Vertex](../Vertex.html) player, int seed)`  
        Assign this PageSection to a player, randomizing questions if necessary.
        

*   *   ### Constructor Detail
        
        *   #### **PageSection**()
            
        
        *   #### **PageSection**(java.util.Map opts)
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **addBlock**([Block](../DefaultPackage/Block.html) block)
            
            Add a block instance directly to this page.
            
            **Parameters:**
            
            `{Block}` - block - The block instance
            
        
        *   #### java.lang.Object **addBlock**(java.util.Map blockDesc)
            
            Add a block via a Map. The block.type parameter is required for all types of blocks, but the other options will vary depending on the \[BlockType\].
            
            **Parameters:**
            
            `{Map}` - block - A map which represents this block
            
            `{BlockType}` - block.type - The type of block to be used. See \[BlockType\] for supported types.
            
        
        *   #### java.util.Map **assignTo**([Vertex](../Vertex.html) player, int seed)
            
            Assign this PageSection to a player, randomizing questions if necessary.
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/PageSection)
*   [No Frames](PageSection.html)

*   Summary: 
Nested   Field      *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field      *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)