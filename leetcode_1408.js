/**
 * 1408. String Matching in an Array[Easy]

Given an array of string words. Return all strings in 
words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained 
removing some characters to left and/or right side of words[j].

Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
 */
/**
 * @param {string[]} words
 * @return {string[]}
 Given an array of string words. Return all strings in words 
 which is substring of another word. i.e "as" is a substring of "mass"
 */
 var stringMatching = function(words) {
    // 1. go through words, go through each word
    // 2. check if word[i] is a substring of word[j]
    
    let output = [];
    
    for(let i = 0; i<words.length; i++) {
        for(let j = 0; j<words.length; j++) {
            if(i !== j) {
                if(words[i].length >= words[j].length)
                    continue;
                else
                   if(fun(words[i], words[j])) {
                       output.push(words[i]);
                   } 
            }
        }
    }
    
    return Array.from(new Set(output));
};

// check if word1 is a substring of word2
var fun = function(wd1, wd2) {
   return wd2.includes(wd1);  
}