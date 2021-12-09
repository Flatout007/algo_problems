/*
// 704. Binary Search [Easy]
Given an array of integers nums 
which is sorted in ascending order, and an integer target, write a 
function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let p1 = 0;
    let p2 = nums.length - 1;
    
    while(p1 <= p2) {
        let mid = Math.floor((p1 + p2) / 2);
        if(nums[mid] < target) {
           p1 = mid + 1;
        } 
        if(nums[mid] > target) {
            p2 = mid - 1;
        }
        if(nums[mid] === target) {
            return mid;
        }
    }
    
    return -1;
};