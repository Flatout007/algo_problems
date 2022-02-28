/**
 * 1337. The K Weakest Rows in a Matrix[Easy]

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's 

(representing civilians). The soldiers are positioned in front of the civilians.

That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:
-The number of soldiers in row i is less than the number of soldiers in row j.
-Both rows have the same number of soldiers and i < j.

Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

Example 1:
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    // PROBLEM: Identify the weaker rows,
   // that is, all the 1's will appear to the left of all the 0's in each row.
   //  A row i is weaker than a row j if row[i] has < or equal the amount of 1's
   //  Return the indices of the k weakest rows
   
   // 1. traverse each row while counting & recording 
   // the number of all 1's found & the index of the row
   
   // 2. once a 0 is found stop checking that row & move to the next
   
   // 3. repeat step 1 & 2 until reached final row of mat
   
   // 4. sort [rows, count] by count & return first k rows
   let mymat = [], count, output = [];
   
   for(let i = 0; i<mat.length; i++) {
       count = 0;
       for(let j = 0; j<mat[i].length; j++) {
           if(mat[i][j] === 1) mymat[i] = [i, ++count];
           else if(!mat[i][0]) {
            mymat[i] = [i, 0]; 
            break;
           } else break; 
       }
   }

   mymat = mymat.sort((a, b) => {
       if(a[1] > b[1]) return 1;
       if(a[1] < b[1]) return -1;
       else return 0;
   });

   for(let i = 0; i<k; i++) {
       output[i] = mymat[i][0]; 
   }
   
   return output;
};