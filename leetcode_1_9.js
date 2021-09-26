// 1. Two Sum

/* 
Given an array of integers nums and an integer 
target, return indices of the two numbers 
such that they add up to target
*/

// ex: input:([3,3], 6) output => [0,1];

const twoSum = (nums, target) => {
   
};


/////////////////////////////////////////////////////////////////////////////
// 9. Palindrome Number
 

// Given an integer x, return true if x is palindrome integer.

/*
An integer is a palindrome when it reads the same backward as forward. For example, 
121 is palindrome while 123 is not.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it's not a palindrome.
*/


// ex: input:(121) output => true;

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if(x < 0) return false;
       
    const reverseNum = parseFloat(x.toString().split('').reverse().join(''));
    const num = parseFloat(x.toString().split('').join(''));
       
    return reverseNum === num ?  true :  false;       
};


