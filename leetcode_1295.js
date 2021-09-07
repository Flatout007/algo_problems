/*
// 1295. Find Numbers with Even Number of Digits
Given an array nums of integers, return how many of them contain an even number of digits.
 
Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    // problem: find out how many of these numbers have digits of even length
    
    //1. evenLengths <- []
    //2. for each nums[i], if digit length of nums[i] even ?
    //3. push nums[i] into evenLengths[]
    //4. return length of evenLengths[]
    
    let evenLengths = [];
    
    for(let i =0; i<nums.length; i++) {
        if(findDigitLength(nums[i]) % 2 === 0) {
            evenLengths.push(nums[i]);
        }
    }
    
    return evenLengths.length;
};


var findDigitLength = function(num) {
    // digit length is found by counting each of the digits except the first,
    // adding it to 1, and finally dividing its base by the given n.

    let digitLength = 1;
 
    if(num >= 10000) {
        digitLength += 4;
        num /= 10000;
    }
    
    if(num >= 1000) {
        digitLength += 3;
        num /= 1000;
    }
    
    if(num >= 100) {
        digitLength += 2;
        num /= 100;
    }
    
    if(num >= 10) digitLength += 1;
    
    return digitLength;
}