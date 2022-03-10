/**
 * 1974. Minimum Time to Type Word Using Special Typewriter[Easy]

There is a special typewriter with lowercase English letters 'a' to 'z' 
arranged in a circle with a pointer. A character can only be typed if the pointer 
is pointing to that character. The pointer is initially pointing to the character 'a'.
Each second, you may perform one of the following operations:

-Move the pointer one character counterclockwise or clockwise.
-Type the character the pointer is currently on.

Given a string word, return the minimum number of seconds to type out the characters in word.

Example 1:
Input: word = "abc"
Output: 5
Explanation: 
The characters are printed as follows:
- Type the character 'a' in 1 second since the pointer is initially on 'a'.
- Move the pointer clockwise to 'b' in 1 second.
- Type the character 'b' in 1 second.
- Move the pointer clockwise to 'c' in 1 second.
- Type the character 'c' in 1 second.
 */
/**
 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function(word) {
    // go through word, subtracting the charcodes of 
    // word of i & cursor. if diff is greater than half the alphabet i.e (13), count 
    // moves counter-clockwise i.e (subtract 26 from diff, then add to count)
    // else, count moves clockwise i.e(just add the diff to count).
      
      let count = word.length, cursor = 'a';
      
      for(let i = 0; i<word.length; i++) {
         let code = Math.abs(cursor.charCodeAt() - word[i].charCodeAt());
         if(code > 13) {
            count += Math.abs(code - 26);
         } else {
             count += code;
         }
         cursor = word[i]; 
      }
      return count;
  };