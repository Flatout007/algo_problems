## Pseudo Code
**N.B** _A program that "transposes" or flips the matrix's row and column indices_ <br>
**N.B** _This "in-place" implementation only works if ```row length == column``` length_
 
```c
    1.FOR 0'th row to len of matrix & 
        FOR cur row to len of matrix's columns; REPEAT steps#2 & 3.
    2.IF not part of main diagonal, DO step#3.
    3.SWAP current row with corresponding column;
```

## JavaScript
**N.B** _A program that "transposes" or flips the matrix's row and column indices_

```js
/**
 * A program that "transposes" or flips the matrix's row and column indices
 *
 * @param {number[][]} matrix
 * @return {void} // in-place
 * TIME: O(n*m) n->matrix.length; m->matrix[0].length
 * SPACE: O(1) in-place
 */
var transpose = function(matrix) {
    for(let i = 0; i<matrix.length; i++) {
        for(let j = i; j<matrix[0].length; j++) {
            if(i !== j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}
```