/*
// 49. Group Anagrams Medium

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a
different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let hash = {};
    
    for(let i = 0; i<strs.length; i++) {
        // create temp variable for sorting each string
        // by coincidence this will find all anagrams
        let temp = strs[i].split('').sort().join('');
        
        // push each distinct string into the hash's array of values
        // based on each key being the sorted string.
        if(!hash[temp]) {
            hash[temp] = [strs[i]];
        } else hash[temp].push(strs[i]);
    }
    
    return Object.values(hash);
    
    /*
    // frist iteration
    // hash : aet => [eat, tea, ate]
              atn => [tan, nat]
              atb => [bat]
    // values : [[eat, tea, ate], [tan, nat],[bat]]
    */
};