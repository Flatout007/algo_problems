/*
// 1252. Cells with Odd Values in a Matrix[Easy]
There is an m x n matrix that is initialized to all 0's. 
There is also a 2D array indices where each indices[i] = [ri, ci] 
represents a 0-indexed location to perform some increment operations on the matrix.
For each location indices[i], do both of the following:
Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

Example 1:
Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
*/
var oddCells = function(m, n, indices) { 
    let assArr = {}; 
    let arr = new Array(n); for(let i=0; i<n; i++){arr[i] = 0}; 
    let count = 0;
    
    for(let i = 0; i<m; i++) { 
        assArr[i] = arr.slice();
    }
    
    for(let i = 0; i<indices.length; i++) { 
        assArr[indices[i][0]] = assArr[indices[i][0]].map(ele => ele += 1);
        
        Object.values(assArr).map((ele) => {
           return ele[indices[i][1]] += 1;
        });
    }
      
    Object.values(assArr).forEach(arr => arr.forEach(ele => ele % 2 !== 0 ? count += 1: null));
    
    return count;
};