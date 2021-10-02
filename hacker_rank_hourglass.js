/*
Given a  2D Array, :
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:
a b c
  d
e f g
An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in the 2d array, then return the max sum.
*/

function hourglassSum(arr) {
    let maxSum = -Infinity;
    let hourGlassSum = 0;
    // Write your code here
    for(let i = 0; i<arr.length - 2; i++) {
        for(let j = 0; j<arr.length - 2; j++) {
            hourGlassSum = ( 
            (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + 
                         arr[i+1][j+1] + 
            (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
            );
            maxSum = Math.max(maxSum, hourGlassSum);      
        }
    }
    
    return maxSum;
}