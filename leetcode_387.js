/**
@description @param {
    387. First Unique Character in a String[Easy]

    Given a string s, find the first non-repeating character in it and 
    return its index. If it does not exist, return -1.
}
@example @param {
    Example 1:
    Input: s = "leetcode"
    Output: 0
}
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let str = s;
    let hash = {};
    
    // count frequencies and track index
    for(let i in str) {
        if(!hash[str[i]]) {
            hash[str[i]] = [1, str.indexOf(str[i])]
        } else {
            hash[str[i]][0] += 1;
            hash[str[i]][1] = str.indexOf(str[i]);
        }   
    }
    
    // look for first key with a 1 value; return its index immediately
    for(let i = 0; i<Object.values(hash).length; i++) {
        if(Object.values(hash)[i][0] === 1) {
            return Object.values(hash)[i][1];
        }
    }
    
    return -1;
};