// Gets the row sum & column sum of all rows and columns of a matrix
function getRowColSum(matrix) {
    let colSum = [], rowSum = [], sum;
    
    // get row sum
    // i is static until j finishes 
    for(let i = 0; i<matrix.length; i++) {
     sum = 0;
     for(let j = 0; j<matrix[i].length; j++) {
      sum += matrix[i][j];
     }
     rowSum[i] = sum;
    }
   
    // get column sum
    // j is static until i finishes
    for(let j = 0; j<matrix[0].length; j++) {
     sum = 0;
     for(let i = 0; i<matrix.length; i++) {
      sum += matrix[i][j];
     }
     colSum[j] = sum;
    }
   
    return [[rowSum], [colSum]];
   }
   
   // tests
   getRowColSum([
    [1,2,3,3], 
    [1,2,3,3], 
    [1,2,3,3],
    [1,2,3,3]
   ]);
   
   // r = [9,9,9,9]
   
   // c = [3,6,9,12]
   
   // getRowColSum([
   //  [1,2,3,3], 
   //  [1,2,3,3], 
   //  [1,2,3,3]
   // ]);
   
   // r = [9,9,9]
   
   // c = [3,6,9,9]