


/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
-Open brackets must be closed by the same type of brackets.
-Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true
*/
 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    // use stack to match opening chars with closing ones.
    
   for(let i in s) {
       if(['[','(','{'].includes(s[i])) stack.push(s[i]);
       let top = stack[stack.length - 1];
       
       if(s[i] === ')') {
           if(top === '(') {
             stack.pop();
           } else return false;
       }
       if(s[i] === '}') {
           if(top === '{') {
             stack.pop();
           } else return false;
       }
       if(s[i] === ']') {
           if(top === '[') {
             stack.pop();
           } else return false;
       }
   }
    
    return stack.length === 0;
};