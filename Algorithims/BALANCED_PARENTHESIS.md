
## Pseudo Code
**_given a string determine if the string is valid._**<br>
**N.B** _A string is valid if_:
:heavy_check_mark:**Open brackets are closed by the same type of brackets.**
:heavy_check_mark:**Open brackets are closed in the correct order.**

```c
 1.SET stack to compare last bracket pushed 
 
 2.FOR 0 to string len, REPEAT STEP#3;
 
 3.IF opening brackets, push on to stack;
   ELSIF closing brackets- 
    IF cur & top arePairs() & there's something on stack, pop from stack
    ELSE return false since they aren't pairs
```

## JavaScript 
**_given a string determine if the string is valid._**<br>

**N.B** _A string is valid if_:
:heavy_check_mark:**Open brackets are closed by the same type of brackets.**
:heavy_check_mark:**Open brackets are closed in the correct order.**
```js
/**
 * A program that determine if a set of string brackets is 
   valid or not.
 *
 * Time Complexity: O(n): n->str.length
 * Space Complexity: O(k): k->stk.length 
 *
 * @param {string} str
 * @return {boolean} boolean
 */
var valid = function(str) {
  let stk = [];

  for(let i = 0; i<str.length; i++) {
    if(str[i] === "(" || str[i] === "{" || str[i] === "{" ) {
        stk.push(str[i]);
    } else if(str[i] === ")" || str[i] === "}" || str[i] === "}") {
        if(arePairs(stk[stk.length-1], str[i]) && stk.length !== 0)
            stk.pop();
        else return false;   
    }
  }

  return stk.length === 0;
}

// checks if p1 & p2 are open & closed pair
var arePairs = function(p1, p2) {
    if(p1 === '{' && p2 === '}')
        return true;
    if(p1 === '(' && p2 === ')')
        return true;
    if(p1 === '[' && p2 === ']')
        return true;

    return false;    
}
```

