/**
 * 1935. Maximum Number of Words You Can Type
[Easy]

There is a malfunctioning keyboard where some letter keys do not work. 

All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) 

and a string brokenLetters of all distinct letter keys that are broken, return the number of words

in text you can fully type using this keyboard.

Example 1:
Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.
 */
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    // 1. go through each word in text,
    // 2. using a helper function to check if a broken letter is
    //    in word[i] or not, 
    // 3.if it's not, the helper function returns true, so add 1
    //   to count;
    
    text = text.split(" ");
    let broke = brokenLetters;
    let count = 0;
    
    for(let i = 0; i<text.length; i++) {
        if(fun(text[i], broke)) count += 1;
    }
    
    return count;
};

var fun = function(word, check) {
    for(let i = 0; i<check.length; i++) {
       if(word.includes(check[i])) return false; 
    }
    return true;
}

