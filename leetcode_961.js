/*
// 961. N-Repeated Element in Size 2N Array[Easy]
You are given an integer array nums with the following properties:
nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example 1:
Input: nums = [1,2,3,3]
Output: 3
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    // length: 2 * n
    // nums = [1,2,3,3] 2 / nums.length = n
    
    let hash = {};
    
    for(let i = 0; i<nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else hash[nums[i]] += 1;
        
        if(hash[nums[i]] === Math.round(nums.length / 2)) {
            return nums[i];
        }
    }
};