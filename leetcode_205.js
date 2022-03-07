/**
 * 205. Isomorphic Strings[Easy]

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 

No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapT = [];
    let mapS = [];
    
    for(let i = 0; i<s.length; i++) {
        let tcode = parseFloat(t[i].charCodeAt(0));
        let scode = parseFloat(s[i].charCodeAt(0));
        
        if(!mapS[scode]) {
            if(!mapT[tcode]) {
                mapS[scode] = t[i];
                mapT[tcode] = s[i];
            } else return false;
        }
        
        else if(mapS[scode] === t[i]) {
            continue;
        } else return false;
    }  
    
    return true;
};
    

    
    