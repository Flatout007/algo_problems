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
 var twoOutOfThree = function (nums1, nums2, nums3) {
   let output = [];

   // compare the arrays nums1 & nums2, nums2 & nums3, & finally nums1 & nums3
   nums1.forEach((ele) => {
     if (nums2.includes(ele) && !output.includes(ele)) output.push(ele);
   });

   nums2.forEach((ele) => {
     if (nums3.includes(ele) && !output.includes(ele)) {
       output.push(ele);
     }
   });
   
   nums3.forEach((ele) => {
     if (nums1.includes(ele) && !output.includes(ele)) output.push(ele);
   });

   return output;
 };

