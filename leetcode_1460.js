/**
 * 1460. Make Two Arrays Equal by Reversing Sub-arrays[Easy]

You are given two integer arrays of equal length target and arr. 

In one step, you can select any non-empty sub-array of arr and reverse it. 

You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.

Example 1:
Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
 */
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    target = target.sort((a,b) => a-b);
    arr = arr.sort((a,b) => a-b);
    
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] !== target[i]) return false;
    }
    
    return true;
};