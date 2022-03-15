/**
 * 58. Length of Last Word[Easy]

Given a string s consisting of some words separated by some 
number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let str = s.split(" ");
    
    for(let i = str.length-1; i>=0; i--) {
        if(str[i].length) {
            return str[i].length;
        }
    }
};