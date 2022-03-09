/**
 * 1207. Unique Number of Occurrences[Easy]

Given an array of integers arr, return true if the number of occurrences 
of each value in the array is unique, or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let freq = {}, set = {}; // 1
    
    for(let i of arr) {
        if(!freq[i]) {
            freq[i] = 1;
        } else freq[i] += 1;
    }
    
    let vals = Object.values(freq);   // 2
    for(let i = 0; i<vals.length; i++) {
        if(set[vals[i]]) 
           return false; 
        set[vals[i]] = vals[i];
    }
    
    return true;
};