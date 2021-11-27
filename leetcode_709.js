/*
// 709. To Lower Case[Easy]
Given a string s, return the string after 
replacing every uppercase letter with the same 
lowercase letter.

Example 1:
Input: s = "Hello"
Output: "hello"
*/
/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    s = s.split('');
    
    for(let i in s) {
        s[i] = s[i].toLowerCase();
    } 
    
    return s.join('')
};