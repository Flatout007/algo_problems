/*
// 748. Sum of Unique Elements[Easy]
You are given an integer array nums. The unique elements of an array 
are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let arr = [];
    let hash = {};
    
    for(let i in nums) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else hash[nums[i]] += 1;
    }
    
    for(let i = 0; i<Object.values(hash).length; i++) {
        if(hash[Object.keys(hash)[i]] === 1) {
            arr.push(Object.keys(hash)[i]);
        } 
    }
    
    return arr.reduce((acc, ele) => acc + parseFloat(ele), 0);
};