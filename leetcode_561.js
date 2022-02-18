/** 
// 561. Array Partition I[Easy]

Given an integer array nums of 2n integers, group these integers 
into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum 
of min(ai, bi) for all i is maximized. Return the maximized sum.

Example 1:
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    let count = 0;
    let a, b = 1;
    
    // sort the list
    nums = nums.sort((a,b) => a-b);
   
    // n times: add the min element from n pairs to a running count
    for(a = 0; a<nums.length; b+=2, a+=2) { 
            count += Math.min(nums[a], nums[b]);
    }
    
    return count;  
};

// sort
// [1,4,3,2] => [1,2,3,4]
// n = 4
// n times: add the min element from n pairs to a running count
    // count => 1, i => 0; => [1,2], min => 1
    // count => 3, i => 2; => [3,4], min => 3
    // increment i by 2
// (1 + 3) => 4
// return count => 4;
    

