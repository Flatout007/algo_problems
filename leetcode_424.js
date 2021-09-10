/*
// 424. Longest Repeating Character Replacement

you are given a string s and an integer k. 
You can choose any character of the string and c
hange it to any other uppercase English character. 
You can perform this operation at most k times.
Return the length of the longest substring containing 
the same letter you can get after performing the above operations.

// Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa

// Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

v/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let hash = {},
        windEnd,
        windStart = 0, 
        maxLength = 0,
        maxCharInt = 0,
        maxChar = '';
       
       //count char frequencies
       for(windEnd = 0; windEnd < s.length; windEnd++) {
           let right = s[windEnd];
           if(!hash[right]) {
               hash[right] = 1;
           } else hash[right] += 1;
           
           // track max char in current window
           maxCharInt = Math.max(maxCharInt, hash[right]);
           maxChar = Object.keys(hash).find(ele => hash[ele] === maxChar);
           
           
           
           // shrink window if letters to be replaced are more than k
           let sub = s.substring(windStart, windEnd + 1);
           if(k === 1) return sub.length - maxCharInt;
           while((sub.length - maxCharInt) > k) {
               let left = s[windStart];
               hash[left] -= 1;
               windStart += 1;
           }
          
          // track max length of replaced chars
          let replaceSub = sub.replace(/[A-Z]/gi, maxChar);
          maxLength = Math.max(maxLength, replaceSub.length);
          
       }
       
       
       return maxLength;
   };