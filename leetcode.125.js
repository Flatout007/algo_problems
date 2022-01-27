/**
// 125. Valid Palindrome[Easy]
A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let hash1 = new Map();
    let hash2 = new Map();
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let set  = new Set(alpha.slice(0).split(''));
    s = s.slice(0).split(""); 
     
    for(let i = 0; i<s.length; i++) {
       if (Number.isInteger(parseFloat(s[i]))) {
                hash1.set(i, s[i]);
       } else if(set.has(s[i].toLowerCase())) hash1.set(i, s[i].toLowerCase());
    } 
     
    for(let i = s.length; i>0; i--) {
       if (Number.isInteger(parseFloat(s[i-1]))) {
                hash2.set(i-1, s[i-1]);
       } else if(set.has(s[i-1].toLowerCase())) hash2.set(i-1, s[i-1].toLowerCase());
    } 
     
    if (toStr(hash1) !== toStr(hash2)) {
          return false;
    }
     
    return true; 
 };
 
 var toStr = function(hash) {
     let s = "";
     
     for(let [k,v] of hash[Symbol.iterator]()) {
         s += hash.get(k);
     }
     
     return s;
 }
 
 
 
 