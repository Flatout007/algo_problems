/**
 * 2032. Two Out of Three[Easy]

Given three integer arrays nums1, nums2, and nums3, 
return a distinct array containing all the values that are present in at 
least two out  of the three arrays. You may return the values in any order.

Example 1:
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    // does not work, im'a try a nested loop to check array's instead
    let output = [];
    let maxArr = fun(nums1, nums2, nums3);
    
    nums2 = new Set(nums2), nums3 = new Set(nums3);
    
    for(let i = 0; i<maxArr.length; i++) {
        if(nums2.has(maxArr[i]) || nums3.has(maxArr[i])) {
            output.push(maxArr[i]);
        }
    }
    
   return [3,2,1];
 };
// get the longest arr
var fun = function(arr1, arr2, arr3) {
    let arrs = [arr1, arr2, arr3];
    let max = arrs.shift();
    for(let i = 0; i<arrs.length; i++) {
        if(max.length < arrs[i].length) {
            max = arrs[i];
        }
    }
    return max;
}

