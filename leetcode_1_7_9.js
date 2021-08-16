// 1. Two Sum

/* 
Given an array of integers nums and an integer 
target, return indices of the two numbers 
such that they add up to target
*/

// ex: input:([3,3], 6) output => [0,1];

const twoSum = (nums, target) => {
    let hash = new Map();
    let arr = [];
    let foundPair = false;
    let i = 0;
    let subtraction;

    while(i<nums.length) {
        hash[nums[i]] = i; 
        
        i++;
    }
    
    let k = 0;

    while(k<nums.length && !foundPair) {
        subtraction = target - nums[k];

        if(subtraction in hash) {
            if(k != hash[subtraction]) {
                arr.push(k);
                arr.push(hash[subtraction]);
                foundPair = true;
            }
        }

        k++;
    }
    return arr;
};

/////////////////////////////////////////////////////////////////////////////

// 7. Reverse Integer

/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the 
signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

// ex: input:(-123) output => -321;

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let under = Math.pow(-2, 31);
    let over = (Math.pow(2, 31)) - 1;
    
    if(my_reverse(x) < under) return 0;
    if(my_reverse(x) > over) return 0;
    
    return my_reverse(x);
};


const my_reverse = (x) => {
   let s;
    if(x < 0) {
        s = x.toString().split('').slice(1).reverse();
        s.unshift('-');
        return parseFloat(s.join(''))
    } else {
        s = parseFloat(x.toString().split('').reverse().join(''));
        return s;
    }
    
}
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


