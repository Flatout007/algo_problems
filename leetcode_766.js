/**
 * 766. Toeplitz Matrix[Easy]

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 * A program that returns true if every diagonal from top-left to 
   bottom-right has the same elements, else returns false
 */
   var isToeplitzMatrix = function(matrix) {
    // 1. get every diagonal from bottom-left to top-right
    // storing them inside a 2d array
    // 3. if every inner array has the same values or only 1 element
    // return true, else false
    
    let output = [];
    
    for(let i = matrix.length - 1; i>=0; i--) {
        output.push(fun1(matrix, [i,0]));
        
    }
    
    for(let j = 1; j<matrix[0].length; j++) {
        output.push(fun1(matrix, [0, j]));
    }
    
    for(let i = 0; i<output.length; i++) {
        if(!fun2(output[i])) {
            return false;
        }
    }
    
    return true;
};

// get diagonal
var fun1 = function(matrix, [i,j]) { 
    let arr = [];
    
    while(i<matrix.length && j<matrix[0].length) {
          arr.push(matrix[i++][j++]);
    } 
    
    return arr;
};

// check if every element in arr is the same
var fun2 = function(arr) {
    if(arr.length === 1) return true;
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] !== arr[0]) return false;
    }
    
    return true;
};