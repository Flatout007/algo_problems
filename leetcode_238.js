/*
// 238. Product of Array Except Self     MEDIUM

Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0] 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    // problem: return an array that contain the
    // products of all nums except current nums[i]
    
    // the trick is iterate, use 1 to get first value then find all before products.
    // then, go through nums again backwards to use 1 to find last value then all after products. 
    // finally, multipy both before and after product arrays.

    let beforeProds = []; // [1,1,2,6]
    let beforeProd = 1; 
    let afterProds = []; // [24,12,4,1]
    let afterProd = 1;
    let prods = [];  // [24,12,8,6]
    
    nums.forEach(ele => {
        beforeProds.push(beforeProd);
        beforeProd = beforeProd * ele;
    }); 
    
    for(let i = nums.length - 1; i>= 0; i--) {
        afterProds[i] = afterProd;
        afterProd = afterProd * nums[i]; 
    }
    
    for(let i = 0; i<beforeProds.length; i++) {
       prods.push(beforeProds[i] * afterProds[i]);
    }
    
    return prods;
};




