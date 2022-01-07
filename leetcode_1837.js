/* 
// 1837. Sum of Digits in Base K[Easy]
Given an integer n (in base 10) and a base k, return the sum of the 
digits of n afterconverting n from base 10 to base k.
After converting, each digit should be interpreted as a base 10 number, 
and the sum should be returned in base 10.

Example 1:
Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    let conversion = handleConvert(n, k);
    let sum = handleSum(conversion.split(''));
    
    return sum;
};
    
    
var handleConvert = function(n, k) {
    return n.toString(k);
};

var handleSum = function(strNumArr) { 
    return strNumArr.reduce((acc, ele) => {return acc += parseFloat(ele)}, 0);
};