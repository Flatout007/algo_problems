/**
 * 566. Reshape the Matrix[Easy]

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix 
into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows 
and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in 
the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the 
new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
 */
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * A program that takes in a matrix, row & column ("r,c") 
   & returns a new matrix that is "reshaped"
   according to the given row & column number
 */
   var matrixReshape = function(mat, r, c) {
    //1. init a new matrix ```output``` with the correct rows & columns("r,c")
    //2. go through mat, checking step#3 before filling output[p][k++] with mat[i][j]
    //3. if k("current output column") is ever >= c("given column") reset k & 
    //   increment p("current output row") to start filling next row of output
        
  const m = r, n = c;
  // if new array cant hold all of old arrays elements
  if(r*c !== mat[0].length * mat.length) 
      return mat; 
   
  let output = new Array(m), k = 0, p = 0; 
  for(let i = 0; i<m; i++){output[i] = new Array(n);} 
  
  for(let i = 0; i<mat.length; i++) {
      for(let j = 0; j<mat[0].length; j++) {
          if(k>=n) {
              p++;
              k=0;
          }
          output[p][k++] = mat[i][j];
      }
  }
  
  return output;
};
