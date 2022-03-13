// program that prints out the numbers in a matrix in
// a zig-zag order.

// 1.traverse the matrix, starting with the first 
// cell

// 2. from first/current cell, get right cell, then
// get entire downward diagonal, get bottom cell
// then get entire upward diagonal

// 3. repeat step 2 until all cells have been
// traversed 
// does not work right, I need to fix this
function zig(matrix) {
   let k = 0, idx = 0, i = 0, len=matrix[0].length;
   for(let j = 0; j<matrix.length; j++) {
             console.log(matrix[i][k]);
	     if(i === 0)
		console.log(matrix[i][++k]);
	     if(k >= len-1) {
		i += 1;
		idx = i;
	    }
	     while(k > 0) {
		console.log(matrix[++idx][--k]);
	     }
	     k = 0, idx += 1;
	     while(idx >= 0) {
		console.log(matrix[idx][k]);
		k++;
		idx--;
	     }
  }
}