/*
// 1971. Find if Path Exists in Graph[Easy]

There is a bi-directional graph with n vertices, where each vertex is 
labeled from 0 to n - 1 (inclusive). The edges in the graph are represented
as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional 
edge between vertex ui and vertex vi. Every vertex pairis connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists 
from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

Example 1:
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    let hash = {}; // {  }
    let seen = new Array(n).fill(false); // seen = [false, false, false]
    let q;
    // convert 2d list of edges into 2d list of neighbors 
    edges.forEach((edge) => {
        let [u,v] = edge;
        if(!hash[u]) {
            hash[u] = [v];
        } else hash[u].push(v);
        if(!hash[v]) {
            hash[v] = [u];
        } else hash[v].push(u);
    });  
    
    // place starting node in queue   
    q = [source]; // q = [2];
    
    // while q has a length, dfs until we seen all nodes connected to source
    while(q.length) {
        let edge = q.shift(); // 2
        if(edge === destination) return true;
        seen[edge] = true; 
        hash[edge].forEach(ele => {
            if(!seen[ele]) {
                q.push(ele);
            }
        });
    }
     
     return false; 
  };
  