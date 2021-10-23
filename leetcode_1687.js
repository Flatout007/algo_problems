/*
// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers   [Medium]
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. 
For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
Given a string n that represents a positive decimal integer,return the minimum number of 
positive deci-binary numbers needed so that they sum up to n.

Example 1:
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32
*/

/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {

   // Spread n out and find it's max int.
   // This is possible because by rule the minimum number of numbers 
   // needed so to sum up to n will always be the max int of n.
   
    const spread = n.split('');
     
    return Math.max(...spread);  
 };
 
 