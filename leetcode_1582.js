/**
 * 1582. Special Positions in a Binary Matrix[Easy]

Given an m x n binary matrix mat, return the number of special positions in mat.
A position (i, j) is called special if mat[i][j] == 1 and all other elements in 
row i and column j are 0 (rows and columns are 0-indexed).

Example 1:
Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
 */
/**
 * @param {number[][]} mat
 * @return {number}
 * A program that returns the number of special positions in mat.
 * A position "(i, j)" is called special if mat[i][j] == 1 & all other 
   elements in row i & column j are 0
 */
   var numSpecial = function(mat) {
    // 1. go through mat
    // 2. getting the j'th column & ith row, 
    // 3.checking if mat[i][j] == 1 & if j'th & ith row  
    // contains more than one 1 if they do, count it, else continue
    
    let count = 0; 
    
    for(let i = 0; i<mat.length; i++) {
        for(let j = 0; j<mat[0].length; j++) {
            if(mat[i][j] === 1) {
              if(fun2(fun1(mat, j)) && fun2(mat[i])) 
                 count += 1;
            }
        }
    }
    
    return count;
};

// get cth column
var fun1 = function(mat, c) {
     let arr = [];
     for(let j = c; j<mat[0].length; j++) {
        for(let i = 0; i<mat.length; i++) {
            arr.push(mat[i][j]);
        }
         break;
    }
    return arr;
}

// check if array contains more than one 1
var fun2 = function(arr) {
    let count = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === 1) count += 1;
        if(count > 1) return false;
    }
    
    return true;
}