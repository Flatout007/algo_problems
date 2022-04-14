## Pseudo Code

**N.B** _A program that traverses a matrix diagonally from start to end boundaries_ <br>

```c
    1.SET start,end boundaries of matrix;

    2.WHILE the start boundaries are less than end boundaries;
      DO step#3;

    3.FOR up then down diagonals traverse them, checking 2 cases after each traversal;
      IF at last row & column of matrix break out loop;
      IF cant set up for next diagonal traversal, increment row or column respectively;
      ELSE set up for next diagonal traversal;
```

## JavaScript

**N.B** _A program that traverses a matrix diagonally from start to end boundaries_

```js
/**
 * A program that traverses a matrix diagonally from start to end boundaries
 *
 * @param {number[][]} mat
 * @return {void}
 * TIME: O(m*n)
 * SPACE: O(1)
 */
var diagonal = function (mat) {
  let r = 0,
    c = 0,
    maxC = mat[0].length,
    maxR = mat.length;

  while (r < maxR && c < maxC) {
    // up diagonally
    for (let j = c; j < maxC - 1; j++) {
      if (r <= 0) break;
      console.log(mat[r--][j]);
      c++;
    }
    console.log(mat[r][c]);

    if (c === maxC - 1 && r === maxR - 1) break;

    // IF can't set up for next traversal, increment row
    if (c >= maxC - 1) {
      r++;
    } else c++;

    // down diagonally
    for (let i = r; i < maxR - 1; i++) {
      if (c <= 0) break;
      console.log(mat[i][c--]);
      r++;
    }
    console.log(mat[r][c]);

    if (r === maxR - 1 && c === maxC - 1) break;

    // IF can't set up for next traversal, increment column
    if (r >= maxR - 1) {
      c++;
    } else r++;
  }
};
```
