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
function arrayPairSum(nums: number[]): number {
    let arr1: number[] = [];
    let arr2: number[] = [];
    
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
    
    //nsole.log(arr1, arr2);
    return arr1;
};

/*
Input: nums = [1,4,3,2]
Output: 4

**group these integers into n pairs
***find All unique possible pairings
*** get pairs of all unique indices

basically make a loop that does this...

get this 
array first
  ^
  |
i   j        p  q       indices
[1][4]      [3][2]    [0][1]  [2][3]
[1][3]      [4][2]    [0][2]  [1][3]
[1][2]      [4][3]    [0][3]  [1][2]

the next pairs of i and j cant be starting row idx or it's self
p has to be greater than prev index
*/