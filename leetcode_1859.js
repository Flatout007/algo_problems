/*
// 1859. Sorting the Sentence[Easy]
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
Each word consists of lowercase and uppercase English letters. A sentence can be 
shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 
is2 This1" or "is2 sentence4 This1 a3". Given a shuffled sentence s containing no more than 9 words, 
reconstruct and return the original sentence.

Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions 
"This1 is2 a3 sentence4", then remove the numbers.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let hash = {};
    s = s.split(' ');
    let arr = new Array(s.length);

    for(let i = 0; i<s.length; i++) {
         hash[s[i].charAt(s[i].length - 1)] = s[i].substring(0, s[i].length - 1);
    }

    for(let [k,v] of Object.entries(hash)) {
      arr[k-1] = v;
    }
    
    return arr.join(' ');
};