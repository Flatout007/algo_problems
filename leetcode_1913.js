/*
// 1913. Maximum Product Difference Between Two Pairs[Easy]
The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
Return the maximum such product difference.

Example 1:
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) { 
    let w,x,y,z;
    let maxarr = [];
    let minarr = [];
    let minnums = nums;
    let maxnums = nums; 
    let max = nums[0];
    let min = nums[0]; 
    let i = 0; 
     
    /*
     Until the two max && the two 
     min values have been found:
           Find them and store them.
     Once values are stored, return difference of (max1 * max2) - (min1 * min2).
    */  

    while(maxarr.length < 2) {
        if(i >= maxnums.length) {
            i = 0;
            maxarr.push(max);
            maxnums.splice(maxnums.indexOf(max), 1);
            max = maxnums[0];
        } 
        
        if(max < maxnums[i]) max = maxnums[i];
     i++;     
    }
     
   while(minarr.length < 2) {
        if(i >= minnums.length) {
            i = 0;
            minarr.push(min);
            minnums.splice(minnums.indexOf(min), 1);
            min = minnums[0];
        } 
        
        if(min > minnums[i]) min = minnums[i];
     i++;     
    }  
     
    w = minarr[0];
    x = minarr[1];
    y = maxarr[0];
    z = maxarr[1];
     
    return  (y*z) - (w*x);
 };
     