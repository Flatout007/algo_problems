
/*
// 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let windEnd,
    windStart = 0,
    hash = {},
    maxLength = 0;

    // count char frequencies using hashtable
    for(windEnd = 0; windEnd < s.length; windEnd++) {
        let right = s[windEnd];
        if(!hash[right]) {
            hash[right] = 1;
        } else hash[right] += 1;
        
        // shrink sliding window until there are no more duplicate chars.
        while(hash[right] >= 2) {
            let left = s[windStart];
            hash[left] -= 1;
            windStart += 1;
        }
        
        // remember max length of substring
        maxLength = Math.max(maxLength, s.substring(windStart, windEnd+1).length);
    }
    
    
    return maxLength;
};