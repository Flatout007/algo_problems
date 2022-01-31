/*
// 905. Sort Array By Parity][Easy]

Given an integer array nums, move all the even integers at the beginning of the array 
followed by all the odd integers.
Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
function sortArrayByParity(nums: number[]): number[] {
    let parityNums: number[] = []; 
    let j: number = 0;
    let idx: number;
    
    if(nums.every(ele => ele % 2 === 0) || nums.every(ele => ele % 2 !== 0)) return nums;
     
    for(let i: number = 0; i<nums.length; i++) { 
        if(nums[i] % 2 === 0) {
            parityNums.push(nums[i]);
        } else continue;
    }
    
    idx = parityNums.length; 
    while(parityNums.length < nums.length) {
        if(nums[j] % 2 !== 0) {
            parityNums[idx] = nums[j];
            idx++;
        } 
        j++;
    }

    return parityNums;
};
