/**
@description @namespace { 
    73. Set Matrix Zeroes[Medium]

    Given an m x n integer matrix matrix, if an element is 0, 
    set its entire row and column to 0's.

    You must do it in place.

    Example 1:
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]`
}
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Given an m x n integer matrix matrix, if an element is 0,
   set its entire row & column to 0's.
 */
   var setZeroes = function(matrix) {
    // 1. go through matrix, 
    // 2. getting both row & column,
    // &  keeping track of where the zeros are.
    // 3. change the row & columns according to 
    // the position of the zeros.
    
    let pos = [];
    
    for(let i = 0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
               pos.push([i,j]);
            }
        }
    }
    
    for(let i = 0; i<pos.length; i++) {
        let [r, c] = pos[i];
        let k;
        fun1(matrix, r);
        fun2(matrix, c);
    }
};

// assign 0's to each row cell 
var fun1 = function(mat, r) {
    for(let i = r; i<mat.length; i++) {
        for(let j = 0; j<mat[0].length; j++) {
            mat[i][j] = 0;
        }
        break;
    }
}

// assign 0's to each column cell
var fun2 = function(mat, c, k) {
    for(let j = c; j<mat[0].length; j++) {
        for(let i = 0; i<mat.length; i++) {
            mat[i][j] = 0;
        }
        break;
    }
}