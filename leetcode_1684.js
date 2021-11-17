/*
// 1684. Count the Number of Consistent Strings[Easy]
You are given a string allowed consisting of distinct characters and an array of strings words. 
A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let count = 0;
    
    /*
    for i in words:
        only if allowed[i] exist in words[i]? increment count.
    */
    
    for(let i = 0; i<words.length; i++) {
        if(isConsistent(allowed, words[i])) {
            count += 1;
        }
    }
    
    return count;
};

var isConsistent = (allowed, str) => {
   let hash = {};
    
   for(let i in allowed) {
       hash[allowed[i]] = allowed[i];
   } 
    
   for(let i in str) {
       if(!hash[str[i]]) {
           return false;
       } else continue;
   }
    
   return true;
}