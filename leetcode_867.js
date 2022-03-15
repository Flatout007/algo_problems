/**
 * 867. Transpose Matrix[Easy]

Given a 2D integer array matrix, return the transpose of matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, 
switching the matrix's row and column indices.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * A program that takes a Matrix & returns a transposed 
   copy. To transpose a matrix is to switch the matrix's rows & columns
 */
   var transpose = function(matrix) {
    // 1. get number of matrix rows n & number of 
    // columns m to init a new matrix.
    // 2. return a new n * m matrix, n should be columns, 
    // m shouls be rows.
    // 3. insert matrix columns into new matrix as its rows.
     // insert matrix rows into new matrix as its columns
    const n = matrix.length, m = matrix[0].length; 
     
    let output = new Array(m);
     
    for(let i = 0; i<m; i++) 
        output[i] = new Array(n);
     
     for(let j = 0; j<m; j++) {
         for(let i = 0; i<n; i++) {
             output[j][i] = matrix[i][j];
         }
     }
     
     for(let i = 0; i<n; i++) {
         for(let j = 0; j<m; j++) {
             output[j][i] = matrix[i][j];
         }
     }
     
     return output;
 };