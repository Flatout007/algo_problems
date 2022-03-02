// multiply matrix and return a new matrix
function multiMat(mat1, mat2) {
    let output = new Array(), arr = [], sum = 0;
    for(let i = 0; i<mat1.length; i++) arr[i] = new Array();
    
    // number of columns in mat1 must equal the number of rows in mat2
    // before multiplying
   
    for(let i = 0; i<mat1.length; i++) {
     for(let j = 0; j<mat1.length; j++) {
       for(let k = 0; k<mat2.length; k++) {
           sum += mat1[i][k] * mat2[k][j]; 
       }
      arr[i].push(sum);
      sum = 0;
     }
    }
    return arr;
   }
   
   // test
   multiMat([
    [1,2], 
    [1,2]
   ], [
    [1,2],
    [1,2] 
   ]);
   