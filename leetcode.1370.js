/**
 * 1370. Increasing Decreasing String[Easy]

You are given a string s. Reorder the string using the following algorithm:

-Pick the smallest character from s and append it to the result.
-Pick the smallest character from s which is greater than the last appended character to the result and append it.
-Repeat step 2 until you cannot pick more characters.
-Pick the largest character from s and append it to the result.
-Pick the largest character from s which is smaller than the last appended character to the result and append it.
-Repeat step 5 until you cannot pick more characters.
-Repeat the steps from 1 to 6 until you pick all characters from s.
-In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append 
it to the result.

Return the result string after sorting s with this algorithm.

Example 1:
Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
 */
/**
 * @param {string} s
 * @return {string}
 */
 var sortString = function(s) {
    var sortString = function(s) {
        // phase 1
            // fill arr[26] with 0's
            let arr = [], p = 0, len = s.length, str = [];
            for(let i = 0; i<26; i++) {
                arr[i] = 0;
            }
            // for each i to s(n):
            for(let i = 0; i<s.length; i++) {
                // increment 0's in arr by 1 according to the diffrence of a - s[i]
                    // i.e if (a - s[i]) => 2; arr[2] += 1;
                let a = 'a'.charCodeAt(0);
                let char = s[i].charCodeAt(0);
                arr[char-a] += 1;
            }
        
        // phase 2
            // until p > len
             while(p < len) {
                 // for each i to arr(n):
                for(let i = 0; i<arr.length; i++) {
                    // if there is a char at arr[i],
                    if(arr[i]) {
                        // add the char at (a + i) to str
                        let char =  'a'.charCodeAt(0);
                        str.push( String.fromCharCode(char + i) );
                        arr[i] -= 1;
                        p++;
                    }   
                }
                 
                // for each i down to 0:
                 for(let i = arr.length; i>=0; i--) {
                     // if there is a char at arr[i],
                    if(arr[i]) {
                        // add the char at (a + i) to str
                        let char = 'a'.charCodeAt(0);
                        str.push( String.fromCharCode(char + i) );
                        arr[i] -= 1;
                        p++;
                    }   
                }
            }
                      
                                
        return str.join('');
    };
};



