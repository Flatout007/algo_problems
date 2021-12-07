/*
// 1967. Number of Strings That Appear as Substrings in Word
[Easy]

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
*/
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    let p1, p2;
    let i = 0, count = 0;
    
    while(i < patterns.length) {
        if(findSubString(patterns[i], word.substring(p1, p2)) || p2 > word.length) {
            count += 1;
        } else {
            p1 = p2;
            p2 = p2 + patterns[i].length;
        }
       
      if(p2 > word.length) i += 1;  
    }
};

var findSubstring = function(pattern, word) {
    if(pattern === word) return true;
}



// p1 = 0
// p2 = length of s - 1
// if we dont find it on first iteration increment i by p2