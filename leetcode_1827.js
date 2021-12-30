/*
// 1827. Minimum Operations to Make the Array Increasing[Easy]
You are given an integer array nums (0-indexed). In one operation, you can choose 
an element of the array and increment it by 1.
For example, if nums = [1,2,3], you can choose toincrement nums[1] to make nums = [1,3,3].
Return the minimum number of operations needed to make nums strictly increasing.
An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

Example 1:
Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let count = 0;
    
    for(let i = 0; i<nums.length; i++) {
        if(!nums[i+1]) break;
        if(nums[i] < nums[i+1]) {
            continue;
        } else {
            while(nums[i+1] <= nums[i]) {
                nums[i+1] += 1; 
                count += 1;
            }
        }
    }
    
    return count; 
};



