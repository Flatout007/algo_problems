/**
 * 217. Contains Duplicate[Easy]

Given an integer array nums, return true if any value appears 
at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 * A program that returns true if an Array cell contains the same 
 * number more than once, else returns false
 */
 var containsDuplicate = function(nums) {
    // 1. go through nums, with a seen array
    // 2. if the cell in seen array at index nums[i] is seen again 
    // return false
    // 3. check if the number is seen before, by storing true 
    // in seen array at index nums[i]
    let seen = []; 
    
    for(let i = 0; i<nums.length; i++) {
        if(seen[nums[i]]) return true;
        seen[nums[i]] = true;
    }
    
    return false;
};
