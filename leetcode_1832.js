/*
// 1832. Check if the Sentence Is Pangram[Easy]
A pangram is a sentence where every letter of 
the English alphabet appears at least once.
Given a string sentence containing only lowercase 
English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
*/
/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let hash = {};
    sentence = sentence.split('');
    
    for(let i in alphabet) {
        hash[alphabet[i]] = 1;
    }
    
    for(let i in sentence) {
        if(hash[sentence[i]]){
          hash[sentence[i]] -= 1;  
        } 
    }
    
    let vals = Object.values(hash)
    for(let i in vals) {
        if(!(vals[i] <= 0)) {
            return false;
        }
    }
    
    return true;
};

