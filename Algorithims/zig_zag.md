## Pseudo Code
 
*_A program that takes a string & stores it in a matrix in a zig-zag pattern on a given number of rows. returns new matrix._*

```c
    1.SET an n * n matrix mat. n equals numRows;

    2.WHILE iterator's less than len of s, DO step#3.;

    3.FOR 0 in range of mat's len, fill column with chars from s; then,
      FOR mat's len-2 down to 1, simulate diagonal by filling column, but excluding already seen & column cells to be used next iteration;
```

## JavaScript

*_A program that takes a string & stores it in a matrix in a zig-zag pattern on a given number of rows. returns new matrix._*

```js
/**
 * Exercises 1.3: Zig Zag Conversion
 * A program that takes a string & stores it in a matrix in a zigzag pattern 
 * on a given number of rows
 *
 * Time Complexity: O(p) + O(n2*m)
 * Space Complexity: 
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var zigZag = function(s, numRows) {
    let mat = new Array(numRows);
    for(let i = 0; i<mat.length; i++) {mat[i] = [];}

    let itr = 0;

    while(itr < s.length) {
        for(let j = 0; j<mat.length; i++) {
            // if run out of chars in s
            if(itr > s.length) 
                break;
         
            mat[i].push(s[itr++]);
        }

        // push to mat in between range's [mat.length-2..1] to simulate diagonal's 
        for(let i = mat.length-2; i>=1; i--) {
            if(itr > s.length) 
                break;
            mat[i].push(s[itr++]);
        }
    }

    return mat.flat().join("");
 }
```