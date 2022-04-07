/**
 * 
 * @param {
    * 498. Diagonal Traverse [Medium]
    * 
    * Given an m x n matrix mat, return an array of all the 
    * elements of the array in a diagonal order.
    * 
    * Example 1:
    * Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
    * Output: [1,2,4,7,5,3,6,8,9]
 * } 
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(arr) {
    /*
    1.SET an new array
      (to fill with traversed diagonals & return)
    
    2.TRAVERSE up then down diagonals, storing them & doing step#3
      
    3.UPDATE i & j after step#2 by increasing j if going up;
      increasing i if going down;
      (*IF out of bounds when updating going up, increase i)
      (*IF out of bounds when updating going down, increase j)
    */
    
    let mat = [];
    let turn = 0;
    let row = 0, col = 0, area = arr.length * arr[0].length;
    
    // Matrix is less than 2. Impossible to get diagaonals, so flatten matrix
    if(arr.length<2 || arr[0].length<2) 
        return arr.flat();
    
    while(arr.length < area) {
        // alternate up,down by checking if even or odd
        
        if(turn % 2 === 0) {
            
            while (row > 0 && col < arr[0].length-1) {
                mat.push(arr[row--][col++]);
            }
            
            // get the final or single cell in diaganal
            mat.push(arr[row][col]);

            if (row == arr.length-1 && col == arr[0].length-1) break;

            // puts row,col in position to get next diagonal
            else if (col >= arr[0].length-1)
                row++;
            else col++;
           
        } else {
            
            while (row < arr.length-1 && col > 0) {
                mat.push(arr[row++][col--]);
            }
        
            mat.push(arr[row][col]);
            
            if (row == arr.length-1 && col == arr[0].length-1) break;

            else if (row >= arr.length-1)
                col++;
            else row++;
        }
     
        turn ++;   
    }
    
    return mat;
};