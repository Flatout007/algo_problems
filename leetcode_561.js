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
// does not work, try diff approach
function arrayPairSum( nums) {
    let arr1;
    let arr2;
    
    for(let i = 0; i<nums.length; i++) {
        for(let j = 0; j<nums.length; j++) {
            arr1.push(nums[i], nums[j]);
        }
        break;
    }
    
    for(let p = 1; p<nums.length; p++) {
        if(p === nums.length-2) break;
        for(let q = 1; q<nums.length; q++) { 
            if(q !== p && q > p) {
                arr2.push(nums[p], nums[q]);
            } else continue;
        }
    }

};

