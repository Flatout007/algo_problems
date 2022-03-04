/**
 * 1403. Minimum Subsequence in Non-Increasing Order[Easy]
 * 
Given the array nums, obtain a subsequence of the array whose sum of 

elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and

if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. 

A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. 

Also return the answer sorted in non-increasing order.

Example 1:
Input: nums = [4,3,10,9,8]
Output: [10,9] 
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements. 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    // find the max of the array, & mantain an array of sub subsequences, 
    // comparing the subsum with the sum of all elements.
    // if subsum <= to (sum - subsum), add next max to the subsequence
    // TIME: O(N^P) N->nums[].length, P->ints[].length
    // SPACE: 0(K) + 0(J) K->deep copy of nums[], J->sub[].length  
    let max = -Infinity, sub = [], ints = [...nums],
    sum = nums.reduce((acc, ele) => acc += ele);    
    
    for(let i = 0; i<nums.length; i++) {
        max = Math.max(...ints);
        sub.push(max);
        ints.splice(ints.indexOf(max), 1);
        let subsum = sub.reduce((acc, ele) => acc += ele);
        if(subsum <= sum - subsum) continue;
        break;
    }
    
    sub = sub.sort((a,b) => b-a);
    
    return sub;
};

