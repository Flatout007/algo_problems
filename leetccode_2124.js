/**
 * 2124. Check if All A's Appears Before All B's [Easy]
 
Given a string s consisting of only the characters 'a' and 'b',
return true if every 'a' appears before every 'b' in the string.
Otherwise, return false.

Example 1:
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    if(s.indexOf('b') === -1) return true;
    const idx = s.indexOf('b');
    
    for(let i = 0; i<s.length; i++) {
        if(s[i] === 'a') {
            if(idx < i) return false;
        }
    }
    
    return true;
};