/**
 * 821. Shortest Distance to a Character[Easy]

Given a string s and a character c that occurs in s, return an array of 
integers answer where answer.length == s.length and answer[i] is the distance 
from index i to the closest occurrence of character c in s.
The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
 */
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * A program that returns an array of the abs values. 
   each cell must store the abs difference between index i &
   the closest occurrence of char c in s for each s[i] respectively.
 */
   var shortestToChar = function(s, c) {
    //1. use MAX_INT variable to update output arr, going through s,
    //2. searching for c. if c is found update idx with i,
    //3. appending the abs of (idx - i) to output array. 
    //4. go through s backwards to backtrack & get min values(i.e "closer" values), 
    // repeating 2,3 but checking output[i] is > than abs, if it is, overwrite output[i] with abs
    
    let output = [], idx = Number.MAX_VALUE;
    
    for(let i = 0; i<s.length; i++) {
        if(s[i] === c) 
            idx = i;
        output[i] = Math.abs(idx - i);
    }
    
    for(let i=s.length-1; i>=0; i--) {
        if(s[i] === c) 
            idx = i;
        if(output[i] > Math.abs(idx - i)) 
            output[i] = Math.abs(idx - i)
        else continue;
    }
    
    
    return output;
};