## Pseudo Code
**N.B** _Given an m x n matrix, return all elements of the matrix in spiral order_
```c
    1.SET the start & end boundaries to traverse the matrix.

    2.WHILE the start boundaries are less than the end boundaries DO step#3.

    3.FOR the top, right, bottom, & left sides of matrix respectively, traverse & 
    print them in a clockwise motion, updating start or end position after each loop.
```

## JavaScript 
**N.B** _Given an m x n matrix, return all elements of the matrix in spiral order_
```js
/**
 * A program that prints the values of a
   matrix in a clockwise spiral from outside to inside
 *
 * Time Complexity: O(n*m) : n->arr.length, m->arr[0].length
 * Space Complexity: O(1) 
 *
 * @param {number[][]} arr
 * @return {void}
 */
var printSpiral = function(arr) {
    let r = 0, maxR = arr.length;
    let c = 0, maxC = arr[0].length;

    while(c < maxC && r < maxR) {
        // top 
        for(let j = c; j<maxR; j++) {
            console.log(arr[r][j]);
        }
        r++; 

        // right 
        for(let i = r; i<maxC; i++) {
            console.log(arr[i][maxC-1]);
        }
        maxC--; 
        
        // if r or c is a cell already seen by previous loops
        if(r>maxR-1 || c>maxC-1) 
            break; 

        // bottom 
        for(let j = maxC-1; j>=c; i--) {
            console.log(arr[maxR-1][j]);
        }
        maxR--;

        // left 
        for(let i = maxR-1; i>=r; i--) {
            console.log(arr[i][c]);
        }
        c++;
    }
}

```