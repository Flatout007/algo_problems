## Pseudo Code
**N.B** _A program that rotates an  ```n * n``` matrix 90 degrees (clockwise)_.

```c
 1.TRANSPOSE or "flip" the matrix's rows & columns
 
 2.REVERSE every row in matrix
```

## JavaScript

```js
/**
 * A program that rotates an  n * n
   matrix 90 degrees (clockwise)
 *
 * Time Complexity: O(n*m) : n->matrix.length, m->matrix[0].length
 * Space Complexity: O(1) 
 *
 * @param {number[][]} matrix
 * @return {void} void
 */
   var rotate90 = function(matrix) {
       for(let i = 0; i<matrix.length; i++) {
           for(let j = i; j<matrix[0].length; j++) {
                if(i === j) 
                    continue;
                else {
                    let tmp = matrix[i][j];
                    matrix[i][j] = matrix[j][i];
                    matrix[j][i] = tmp;
                } 
           }
       }

       for(let i = 0; i<matrix.length; i++) {
           matrix[i] = matrix[i].reverse();
       }
   }
```
