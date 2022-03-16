/**
 * 1380. Lucky Numbers in a Matrix[Easy]

Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
A lucky number is an element of the matrix such that it is the minimum 
element in its row and maximum in its column.

Example 1:
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * A program that returns all lucky numbers in the matrix.
   A lucky number is an element of the matrix that's the minimum 
   element in its row and maximum in its column.
 */
   var luckyNumbers  = function(matrix) {
    // 1. go through matrix 
    // 2. checking if curr[i] is the max in each column
    // & min in each row.
    // 3.if it is, store curr[i] in arr, else continue
    
    let mat = matrix, output = [];
    
    for(let i = 0; i<mat.length; i++) {
        for(let j = 0; j<mat[0].length; j++) {
            if(mat[i][j] === Math.max(...fun(mat, j)) && 
               mat[i][j] === Math.min(...mat[i])) {
                output.push(mat[i][j]);
            }
        }
    }
    
    return output;
};

// get column
var fun = function(mat, c) {
    let arr = [];
    
    for(let j = c; j<mat[0].length; j++) {
        for(let i = 0; i<mat.length; i++) {
            arr.push(mat[i][j]);
        }
        break;
    }
    return arr;
};