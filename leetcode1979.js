/*
// 1979. Find Greatest Common Divisor of Array[Easy]
Given an integer array nums, return the greatest common divisor 
of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive 
integer that evenly divides both numbers.

Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    return maxGcf(min, max);
};

var maxGcf = function(n1, n2) {
    let num;
    let max = 0;
    let i = 1;
    
    while(i < n2+1) {
        if(n2 % i === 0) {
            if(n1 % i === 0) {
                num = i;
            }
        }
        max = Math.max(max, num);
    i += 1;    
    }
    
    return max;
}
