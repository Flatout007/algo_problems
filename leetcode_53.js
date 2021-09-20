/*
// 53. Maximum Subarray
Given an integer array nums, find the contiguous 
subarray (containing at least one number)
which has the largest sum and return its sum. 
A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0;
    let windStart = 0;
    let maxSum = -Infinity;
   
   // the trick is to use a window to grow or shrink a subarray based 
   // on the constraint that 0 cant be greater than the sum. Keep track of the max sum so far.
   
   for(let i = 0; i<nums.length; i++) {
       sum += nums[i];
       maxSum = Math.max(sum, maxSum); 
       
       while(0 > sum) {
           sum -= nums[windStart];
           windStart += 1;  
       } 
       
   }

   return maxSum;
};


