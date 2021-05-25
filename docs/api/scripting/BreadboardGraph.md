BreadboardGraph      <!-- if (location.href.indexOf('is-external=true') == -1) { parent.document.title="BreadboardGraph"; } //--> 

<div>JavaScript is disabled on your browser.</div>

[](#skip-navbar_top "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/BreadboardGraph)
*   [No Frames](BreadboardGraph.html)

*   Summary: 
*   [Nested](#nested_summary)
   Field   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)
   

\[Groovy\] Class BreadboardGraph
--------------------------------

*   BreadboardGraph

*   * * *
    
      
    
    class BreadboardGraph
    extends EventGraph<TinkerGraph>
    
    The core graph implementation in Breadboard. It has several convenient functions for creating networks of various types and handles synchronizing data between players.
    

*   *   ### Nested Class Summary
        
        Nested classes 
        
        Modifiers
        
        Name
        
        Description
        
        `**class**` 
        
        `[BreadboardGraph.1](../DefaultPackage/BreadboardGraph.1.html)`
        
    
    *   ### Properties Summary
        
        Properties 
        
        Type
        
        Name and description
        
        `**java.lang.Object**` 
        
        `[defaultGraphOptions](#defaultGraphOptions)`  
        
        `**java.lang.Object**` 
        
        `[eventTracker](#eventTracker)`  
        
    
    *   ### Constructor Summary
        
        Constructors 
        
        Constructor and description
        
        `[BreadboardGraph](#BreadboardGraph(java.lang.Object, java.lang.Object)) (java.lang.Object baseGraph, java.lang.Object eventTracker)`  
        
    
    *   ### Methods Summary
        
        Methods 
        
        Type Params
        
        Return Type
        
        Name and description
        
        `java.lang.Object`
        
        `**[_removeEdge](#_removeEdge(com.tinkerpop.blueprints.Edge, java.lang.Boolean))**([Edge](../com.tinkerpop.blueprints.Edge.html) e, java.lang.Boolean track)`  
        
        `java.lang.Object`
        
        `**[addAI](#addAI(java.lang.Object, int, java.lang.Object))**(java.lang.Object a, int n, java.lang.Object behavior)`  
        
        `java.lang.Object`
        
        `**[addAIPlayer](#addAIPlayer(java.lang.Object, java.lang.String, java.lang.Object))**(java.lang.Object a, java.lang.String id, java.lang.Object behavior)`  
        
        `[Edge](../com.tinkerpop.blueprints.Edge.html)`
        
        `**[addEdge](#addEdge(Vertex, Vertex, java.lang.String))**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2, java.lang.String label)`  
        
        `[Edge](../com.tinkerpop.blueprints.Edge.html)`
        
        `**[addEdge](#addEdge(Vertex, Vertex))**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)`  
        
        `[Edge](../com.tinkerpop.blueprints.Edge.html)`
        
        `**[addEdge](#addEdge(java.lang.Object, Vertex, Vertex, java.lang.String))**(java.lang.Object id, [Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2, java.lang.String label)`  
        
        `java.lang.Object`
        
        `**[addPlayer](#addPlayer(java.lang.Object))**(java.lang.Object id)`  
        
        `java.lang.Object`
        
        `**[addPlayers](#addPlayers(java.lang.Object))**(java.lang.Object n)`  
        
        `java.lang.Object`
        
        `**[addTimer](#addTimer(java.lang.Integer, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, groovy.lang.Closure, Vertex, java.lang.String))**(java.lang.Integer time, java.lang.String name, java.lang.String timerText, java.lang.String direction, java.lang.String type, java.lang.String currencyAmount, groovy.lang.Closure result, [Vertex](../Vertex.html) player, java.lang.String appearance)`  
        
        `java.lang.Object`
        
        `**[addTimer](#addTimer(java.util.Map))**(java.util.Map params)`  
        
        `java.lang.Object`
        
        `**[addTrackedEdge](#addTrackedEdge(java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object))**(java.lang.Object v1, java.lang.Object v2, java.lang.Object label, java.lang.Object track)`  
        
        `[Vertex](../Vertex.html)`
        
        `**[addVertex](#addVertex(java.lang.Object))**(java.lang.Object id)`  
        
        `java.lang.Object`
        
        `**[addVertices](#addVertices(java.lang.Object))**(java.lang.Object n)`  
        
        `java.lang.Object`
        
        `**[barabasiAlbert](#barabasiAlbert(int, java.util.Map))**(int v, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[barbasiAlbert](#barbasiAlbert(int, java.util.Map))**(int v, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[complete](#complete(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[empty](#empty())**()`  
        
        `java.lang.Object`
        
        `**[geometricRandom](#geometricRandom(java.lang.Object, java.util.Map))**(java.lang.Object v, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[getEdge](#getEdge(Vertex, Vertex))**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)`  
        
        `java.lang.Object`
        
        `**[getSubmitForm](#getSubmitForm(java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object))**(java.lang.Object player, java.lang.Object dollars, java.lang.Object reason, java.lang.Object sandbox, java.lang.Object comments)`  
        Return a default AMT submission form.
        
        `java.lang.Object`
        
        `**[grid](#grid(int, java.util.Map))**(int maxX, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[grid](#grid(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[hasEdge](#hasEdge(Vertex, Vertex))**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)`  
        
        `java.lang.Object`
        
        `**[hasVertex](#hasVertex(java.lang.Object))**(java.lang.Object id)`  
        
        `java.lang.Object`
        
        `**[ladder](#ladder(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[lattice](#lattice(int, java.util.Map))**(int maxX, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[lattice](#lattice(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[mRing](#mRing(int, java.lang.Boolean))**(int m, java.lang.Boolean random)`  
        
        `java.lang.Object`
        
        `**[mRing](#mRing(int, java.util.Map))**(int m, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[numEdges](#numEdges())**()`  
        
        `java.lang.Object`
        
        `**[numVertices](#numVertices())**()`  
        
        `java.lang.Object`
        
        `**[pairs](#pairs(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[random](#random(double, java.util.Map))**(double connectivity, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[removeConnectedEdge](#removeConnectedEdge(Vertex, Vertex))**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)`  
        
        `java.lang.Object`
        
        `**[removeEdges](#removeEdges(Vertex, java.lang.Object))**([Vertex](../Vertex.html) v, java.lang.Object track)`  
        
        `java.lang.Object`
        
        `**[removeEdges](#removeEdges(java.lang.Object))**(java.lang.Object track)`  
        
        `java.lang.Object`
        
        `**[removePlayer](#removePlayer(java.lang.Object))**(java.lang.Object id)`  
        
        `java.lang.Object`
        
        `**[removeVertices](#removeVertices())**()`  
        
        `java.lang.Object`
        
        `**[ring](#ring(java.lang.Boolean))**(java.lang.Boolean random)`  
        
        `java.lang.Object`
        
        `**[ring](#ring(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[ringLattice](#ringLattice(int, java.lang.Boolean))**(int m, java.lang.Boolean random)`  
        
        `java.lang.Object`
        
        `**[ringLattice](#ringLattice(int, java.util.Map))**(int m, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[setupGraphAlgorithm](#setupGraphAlgorithm(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[smallWorld](#smallWorld(int, java.util.Map))**(int k, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[smallWorldColoring](#smallWorldColoring(int, java.util.Map))**(int k, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[star](#star(Vertex, java.util.Map))**([Vertex](../Vertex.html) centerPlayer, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[star](#star(int, java.util.Map))**(int index, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[star](#star(java.util.Map))**(java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[wattsStrogatz](#wattsStrogatz(int, double, java.util.Map))**(int k, double p, java.util.Map opts)`  
        
        `java.lang.Object`
        
        `**[wheel](#wheel(java.util.Map))**(java.util.Map opts)`  
        

*   *   ### Property Detail
        
        *   #### java.lang.Object **defaultGraphOptions**
            
        
        *   #### java.lang.Object **eventTracker**
            
    
    *   ### Constructor Detail
        
        *   #### **BreadboardGraph**(java.lang.Object baseGraph, java.lang.Object eventTracker)
            
    
    *   ### Method Detail
        
        *   #### java.lang.Object **\_removeEdge**([Edge](../com.tinkerpop.blueprints.Edge.html) e, java.lang.Boolean track)
            
        
        *   #### java.lang.Object **addAI**(java.lang.Object a, int n, java.lang.Object behavior)
            
        
        *   #### java.lang.Object **addAIPlayer**(java.lang.Object a, java.lang.String id, java.lang.Object behavior)
            
        
        *   #### [Edge](../com.tinkerpop.blueprints.Edge.html) **addEdge**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2, java.lang.String label)
            
        
        *   #### [Edge](../com.tinkerpop.blueprints.Edge.html) **addEdge**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)
            
        
        *   #### [Edge](../com.tinkerpop.blueprints.Edge.html) **addEdge**(java.lang.Object id, [Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2, java.lang.String label)
            
        
        *   #### java.lang.Object **addPlayer**(java.lang.Object id)
            
        
        *   #### java.lang.Object **addPlayers**(java.lang.Object n)
            
        
        *   #### java.lang.Object **addTimer**(java.lang.Integer time, java.lang.String name, java.lang.String timerText, java.lang.String direction, java.lang.String type, java.lang.String currencyAmount, groovy.lang.Closure result, [Vertex](../Vertex.html) player, java.lang.String appearance)
            
        
        *   #### java.lang.Object **addTimer**(java.util.Map params)
            
        
        *   #### java.lang.Object **addTrackedEdge**(java.lang.Object v1, java.lang.Object v2, java.lang.Object label, java.lang.Object track)
            
        
        *   #### [Vertex](../Vertex.html) **addVertex**(java.lang.Object id)
            
        
        *   #### java.lang.Object **addVertices**(java.lang.Object n)
            
        
        *   #### java.lang.Object **barabasiAlbert**(int v, java.util.Map opts)
            
        
        *   #### java.lang.Object **barbasiAlbert**(int v, java.util.Map opts)
            
        
        *   #### java.lang.Object **complete**(java.util.Map opts)
            
        
        *   #### java.lang.Object **empty**()
            
        
        *   #### java.lang.Object **geometricRandom**(java.lang.Object v, java.util.Map opts)
            
        
        *   #### java.lang.Object **getEdge**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)
            
        
        *   #### java.lang.Object **getSubmitForm**(java.lang.Object player, java.lang.Object dollars, java.lang.Object reason, java.lang.Object sandbox, java.lang.Object comments)
            
            Return a default AMT submission form.
            
        
        *   #### java.lang.Object **grid**(int maxX, java.util.Map opts)
            
        
        *   #### java.lang.Object **grid**(java.util.Map opts)
            
        
        *   #### java.lang.Object **hasEdge**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)
            
        
        *   #### java.lang.Object **hasVertex**(java.lang.Object id)
            
        
        *   #### java.lang.Object **ladder**(java.util.Map opts)
            
        
        *   #### java.lang.Object **lattice**(int maxX, java.util.Map opts)
            
        
        *   #### java.lang.Object **lattice**(java.util.Map opts)
            
        
        *   #### java.lang.Object **mRing**(int m, java.lang.Boolean random)
            
        
        *   #### java.lang.Object **mRing**(int m, java.util.Map opts)
            
        
        *   #### java.lang.Object **numEdges**()
            
        
        *   #### java.lang.Object **numVertices**()
            
        
        *   #### java.lang.Object **pairs**(java.util.Map opts)
            
        
        *   #### java.lang.Object **random**(double connectivity, java.util.Map opts)
            
        
        *   #### java.lang.Object **removeConnectedEdge**([Vertex](../Vertex.html) v1, [Vertex](../Vertex.html) v2)
            
        
        *   #### java.lang.Object **removeEdges**([Vertex](../Vertex.html) v, java.lang.Object track)
            
        
        *   #### java.lang.Object **removeEdges**(java.lang.Object track)
            
        
        *   #### java.lang.Object **removePlayer**(java.lang.Object id)
            
        
        *   #### java.lang.Object **removeVertices**()
            
        
        *   #### java.lang.Object **ring**(java.lang.Boolean random)
            
        
        *   #### java.lang.Object **ring**(java.util.Map opts)
            
        
        *   #### java.lang.Object **ringLattice**(int m, java.lang.Boolean random)
            
        
        *   #### java.lang.Object **ringLattice**(int m, java.util.Map opts)
            
        
        *   #### java.lang.Object **setupGraphAlgorithm**(java.util.Map opts)
            
        
        *   #### java.lang.Object **smallWorld**(int k, java.util.Map opts)
            
        
        *   #### java.lang.Object **smallWorldColoring**(int k, java.util.Map opts)
            
        
        *   #### java.lang.Object **star**([Vertex](../Vertex.html) centerPlayer, java.util.Map opts)
            
        
        *   #### java.lang.Object **star**(int index, java.util.Map opts)
            
        
        *   #### java.lang.Object **star**(java.util.Map opts)
            
        
        *   #### java.lang.Object **wattsStrogatz**(int k, double p, java.util.Map opts)
            
        
        *   #### java.lang.Object **wheel**(java.util.Map opts)
            

[](#skip-navbar_bottom "Skip navigation links")

*   [Overview](../overview-summary.html)
*   [Package](package-summary.html)
*   Class
*   [Deprecated](../deprecated-list.html)
*   [Index](../index-all.html)
*   [Help](../help-doc.html)

*   [Frames](../index.html?DefaultPackage/BreadboardGraph)
*   [No Frames](BreadboardGraph.html)

*   Summary: 
*   [Nested](#nested_summary)
   Field   *   [Property](#property_summary)
   *   [Constructor](#constructor_summary)
   *   [Method](#method_summary)
   

*    | Detail: 
Field   *   [Property](#prop_detail)
   *   [Constructor](#constructor_detail)
   *   [Method](#method_detail)