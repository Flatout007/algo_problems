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
    // does not work all the way
    let scount = Object.values(fun1(s)).reduce((acc, ele) => acc += ele);
    let tcount = Object.values(fun1(t)).reduce((acc, ele) => acc += ele);
    let schars = Object.keys(fun2(s));
    let tchars = fun2(t);
    // if they have the same chars its also false
    if(scount !== tcount || s.length !== t.length) return false;
    return true;
};
    
var fun1 = function(s) {
    let hash = {};
    
    for(let i in s) {
        if(!hash[s[i]]) {
            hash[s[i]] = 1;
        } 
    }
    
    return hash;
}

var fun2 = function(s) {
    let hash = {};
    
    for(let i in s) {
        if(!hash[s[i]]) {
            hash[s[i]] = 1;
        } else hash += 1;
    }
    
    return hash;
}    
    
    