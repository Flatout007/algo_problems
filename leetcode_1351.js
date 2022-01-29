/*
// 1351. Count Negative Numbers in a Sorted Matrix[Easy]

Given a m x n matrix grid which is sorted in non-increasing order both row-wise 
and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let count = 0;
    
    grid.forEach(arr  => {
       arr.forEach((ele, i) => {
          if(ele < 0) count += 1; 
       }); 
    });
    
    return count;
};