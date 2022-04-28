/** 
@description {
 20. Valid Parentheses

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
    determine if the input string is valid.

    An input string is valid if:
    -Open brackets must be closed by the same type of brackets.
    -Open brackets must be closed in the correct order.
}
@example 
    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true
 * @param {string} s
 * @return boolean
 */
 var isValid = function(s) {
  let stk = [];
  
  for(let i = 0; i<s.length; i++) {
      if(s[i] === '{' || s[i] === '[' || s[i] === '(')
          stk.push(s[i]);
      else if(s[i] === ']' || s[i] === '}' || s[i] === ')') {
          if(stk.length > 0 && fun(stk[stk.length-1], s[i])) {
              stk.pop();
          } else return false;
      }
  }
  
  return stk.length === 0;
};


var fun = function(p1,p2) {
// returns true if p1 & p2 are a valid pair else false.

  if(p1 === '{' && p2 ==='}')
      return true;
  if(p1 === '[' && p2 ===']')
      return true;
  if(p1 === '(' && p2 ===')')
      return true;
  
  return false;
}