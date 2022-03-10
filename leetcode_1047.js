/**
 * 1047. Remove All Adjacent Duplicates In String[Easy]

You are given a string s consisting of lowercase English letters.

A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 

It can be proven that the answer is unique.

Example 1:
Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
and this is the only possible move.  The result of this move is that the string is "aaca", 
of which only "aa" is possible, so the final string is "ca".
 */
/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    //1. go through s mantaining a stack 
    // 2. checking the top to see if this char has been seen before. if it has, 
    // pop it from stack, else push it onto the stack
    // 3. after loop, return all chars remaining on the stack
    let stk = [];
    for(let i = 0; i<s.length; i++) {
        let top = stk[stk.length - 1];
        if(top && top === s[i]) {
            stk.pop();
        } else stk.push(s[i]);
    }
    return stk.join("");
};