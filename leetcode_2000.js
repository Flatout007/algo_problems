/**
 * 2000. Reverse Prefix of Word[Easy]

Given a 0-indexed string word and a character ch, reverse the

segment of word that starts at index 0 and ends at the index of the 

first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts

at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

Return the resulting string.

Example 1:
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
 */
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    // if first char is 'ch' return word
    if(word[0] === ch) return word;
    let arr;
    // if I dont get a prefix... ch is not in word, so return word
    if(!getPrefix(word, ch)) return word;
    else arr = getPrefix(word, ch);
    return Array.from(arr[0]).reverse().join('') + arr[1];
};

var getPrefix = function(word, ch) {
    let i = 0;
    
    while(i <= word.length) {
        // as soon as 'ch' is found, return the prefix and rest of string;
        if(word[i] === ch) {
            let tmpsubstr = word.substring(0, i + 1); 
            return [tmpsubstr,word.substring(i + 1, word.length)];
        }
    i+=1;    
    }
    // return 0 falsey value, becuause loop finished without finding ch;
    return 0;
}

// input: word = "abcdefd",
// ch = "d"

// i times: as soon as 'ch' is found, return it
        // substring => [a] i = 0;
        // substring => [ab] i = 1;
        // substring => [abc] i = 2;
        // substring => [abcd] i = 3;
        // word[i] equals 'd', so return substring
// output: word = "dcbaefd"