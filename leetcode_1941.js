/*
// 1941. Check if All Characters Have Equal Number of Occurrences[Easy]
Given a string s, return true if s is a good string, or false otherwise.
A string s is good if all the characters that appear in s have the same 
number of occurrences (i.e., the same frequency).

Example 1:
Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    let hash = {};
    let values;
    
    for(let i in s) {
        if(!hash[s[i]]) {
            hash[s[i]] = 1;
        } else hash[s[i]] += 1;
    }
    
    values = Object.values(hash);
    
    for(let i = 0; i<values.length; i++) {
        if(!values[i+1]) break;
        if(values[i] === values[i+1]) {
            {}
        } else return false;
    }
    
    return true;
};
