/**
 * 824. Goat Latin[Easy]

You are given a string sentence that consist of words separated by spaces. 

Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

- If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
- If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
- Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

Return the final sentence representing the conversion from sentence to Goat Latin.

Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 */
/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    // If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), 
    // append "ma" to the end
    
    // If a word begins with a consonant (i.e., not a vowel), 
    // remove the first letter and append it to the end, then add "ma"
    
    // Add one letter 'a' to the end of each word per its word index in the sentence,
    // starting with 1, i.e the first word gets "a" added to the end, the second word
    // gets "aa"
     
    let output = [], wordArr = sentence.split(" "), vowels = new Set(['a', 'e', 'i', 'o','u']);
    let len = wordArr.length;
    
    for(let i = 0; i<len; i++) {
        let tmpchar = wordArr[i][0];
        if(!vowels.has(tmpchar.toLowerCase())) {
            tmpchar = tmpchar + "ma";
            output.push(wordArr[i].slice(1, wordArr[i].length) + tmpchar);
        } else {
            let tmpchar = wordArr[i].slice(0, wordArr[i].length) + "ma";
            output.push(tmpchar);
        }
    }
    
    for(let i = 0; i<len; i++) {
        output[i] = output[i] + 'a'.repeat(i+1);
    }
    
    return output.join(' ');
};