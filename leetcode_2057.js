/*
// 2057. Smallest Index With Equal Value[Easy]
Given a 0-indexed integer array nums, return the smallest index i of 
nums such that i mod 10 == nums[i], or -1 if such index does not exist.

x mod y denotes the remainder when x is divided by y.

Example 1:
Input: nums = [0,1,2]
Output: 0
Explanation: 
i=0: 0 mod 10 = 0 == nums[0].
i=1: 1 mod 10 = 1 == nums[1].
i=2: 2 mod 10 = 2 == nums[2].
All indices have i mod 10 == nums[i], so we return the smallest index 0.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
    let hash = {};
    let min = 100;
    
    for(let i in nums) {
        if(i % 10 === nums[i]) {
           hash[nums[i]] = true;
           min = Math.min(min, i); 
           } else {
               if(!hash[nums[i]]) hash[nums[i]] = false;
           }
    }
    
    if(Object.values(hash).every(ele => ele === false)) {
        return -1;
    } else return min;
};