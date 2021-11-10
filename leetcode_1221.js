/*
// 1221. Split a String in Balanced Strings[Easy]
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.
Return the maximum amount of split balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let windStart = 0;
    let count = 0;
    s = s.split('');
    let i = 0;
    
    /*
    while(i <= s.length):
       if current window does not have the same amount of R's and L's increment i.
       else if it does, increment count & update the window.
    */
    
    while(i <= s.length) {  
        if(!hasSameAmount(s.slice(windStart, i + 1))) {
            i+=1;
        } else {
            count += 1;
            windStart = i + 1;
            i = windStart + 1;
        }
    }

    return count;
};

var hasSameAmount = (arr) => {
    let hash = {};
    let eles;
    let ele;
    let count = 0;
    
    for(let i of arr) {
        if(!hash[i]) {
            hash[i] = 1;
        } else hash[i] += 1;
    }
    
    eles = Object.values(hash);
    ele = eles[0];
    for(let i = 0; i<eles.length; i++) {
        if(eles.length > 1) {
            if(ele === eles[i]) count += 1;
        } else return false;
    }
    
    return count === eles.length;
};
