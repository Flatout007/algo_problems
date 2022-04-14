/**
 @description @param {
 * 1030. Matrix Cells in Distance Order[Easy]

    You are given four integers row, cols, rCenter, and cCenter. 
    There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).

    Return the coordinates of all cells in the matrix, sorted by their distance from 
    (rCenter, cCenter) from the smallest distance to the largest distance.

    You may return the answer in any order that satisfies this condition.
    The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.
}

@example @param {
    Example 1:

    Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
    Output: [[0,0],[0,1]]
    Explanation: The distances from (0, 0) to other cells are: [0,1]
}
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
   var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    // 1. create the matrix with the correct rows & columns
   //  filled with 0's
    // 2. go through matrix mantaining a 2d array of [abs value of |r1 - r2| + |c1 - c2|, [i,j]]
     // 3. sort the output arr by abs i.e arr[i][0], return all positions("[i,j]") i.e arr[i][1];
     
     const m = rows, n = cols;
     let mat = new Array(m), output = [];
     for(let i = 0; i<m; i++) {mat[i] = new Array(n).fill(0);}
     
     for(let i = 0; i<m; i++) {
         for(let j = 0; j<n; j++) {
             output.push([Math.abs(i - rCenter) + Math.abs(j - cCenter), [i,j]]);
         }
     }
     
     output = output.sort((a,b) => a[0] - b[0]);
     
     for(let i = 0; i<output.length; i++) 
         output[i] = output[i][1];
      
     return output;
 };