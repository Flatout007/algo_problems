/*
// 1588. Sum of All Odd Length Subarrays[Easy]
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
A subarray is a contiguous subsequence of the array.
Return the sum of all odd-length subarrays of arr.

Example 1:
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    
    for(let i = 0; i<arr.length; i++) {
        for(let j = 0; j<arr.length; j++) {
            if(arr.slice(i, j+1).length % 2 !== 0) {
                sum += arr.slice(i, j+1).reduce((acc, ele) => acc += ele);
            }
        }
    }
    
    return sum;
};