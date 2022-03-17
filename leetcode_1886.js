/**
 * 1886. Determine Whether Matrix Can Be Obtained By Rotation[Easy]

Given two n x n binary matrices mat and target, return true if it is 
possible to make mat equal to target by rotating mat in 90-degree increments, 
or false otherwise.

Example 1:
Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
 */
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 * Given two n x n binary matrices mat & target, 
   return true if possible to make mat equal to target 
   by rotating mat in 90-degree increments, else false
 */
   var findRotation = function(mat, target) {
    // 1.rotate matrix by tracking (first row, first column, last column, last row) 
     // switching the positons in a 90 deg clockwise motion
    // 2.checking if each corresponding row & columns matches up with
   //  target's. if they all match, return true, else false
     
     let tracker = [], count = 0;  
     
     tracker.push([mat[0], 'top']);
     tracker.push([mat[mat.length-1], 'bottom']);
     tracker.push([fun2(mat, mat[0].length-1), 'right']);
     tracker.push([fun2(mat, 0), 'left']);
     
     for(let i = 0; i<4; i++) {
         for(let j = 0; j<tracker.length; j++) {
             let [arr, pos] = tracker[j];
             if(pos === "top") {
                 if(fun3(arr, target[0]))
                     count += 1;
             } else 
             if(pos === "bottom") {
                 if(fun3(arr, target[mat.length-1]))
                      count += 1;
             } else
             if(pos === "right") {
                 if(fun3(arr, fun2(target, target[0].length-1)))
                      count += 1;
             } else
             if(pos === "left") {
                 if(fun3(arr, fun2(target, 0)))
                      count += 1;
             }
            
             if(count >= 4) return true;
         }
         count = 0;
         tracker = fun1([...tracker]);
     } 
     
     return false;
 };
 
 // rotate mat 90 deg
 var fun1 = function(arr) {
     for(let i = 0; i<arr.length; i++) {
         switch(arr[i][1]) {
            case 'top': arr[i][1] = "right";
                 break;
            case 'bottom': arr[i][1] = "left";
                 break;
            case 'right': 
                 arr[i][0] = arr[i][0].reverse();
                 arr[i][1] = "bottom";
                 break;
            case 'left':
                 arr[i][0] = arr[i][0].reverse();
                 arr[i][1] = "top";
                 break;
            default: continue;    
         }
     }
     
     return arr;
 };
 
 // get the cth column
 var fun2 = function(mat, c) {
     let arr = [];
     
     for(let j = c; j<mat[0].length; j++) {
         for(let i = 0; i<mat.length; i++) {
             arr.push(mat[i][j]);
         }
         break;
     }
     return arr;
 };
     
 // compare arrays, check if they are same   
 var fun3 = function(arr1, arr2) {
     if(arr1.length !== arr2.length) return false;
     
     for(let i = 0; i<arr1.length; i++) {
         if(arr1[i] !== arr2[i]) return false;
     }
     
     return true;
 }