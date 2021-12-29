/*
// 1374. Generate a String With Characters That Have Odd Counts[Easy]
Given an integer n, return a string with n characters such that each
character in such string occurs an odd number of times.The returned string 
contain only lowercase English letters. If there are multiples valid strings, return any of them.  

Example 1:
Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 
'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
*/
/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    let arr = [];
     
    for(let i = 0; i<n; i++) {
        arr.push('a');
    }
     
    if(n % 2 !== 0) {
        return arr.join('');
    } else return arr.map((ele, i, arr) => {
                            if(i === arr.length - 1) {
                                return ele = 'b';
                            } else return ele = 'a';
                  }).join('');
 };