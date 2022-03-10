/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box[Medium]

You have n boxes. You are given a binary string boxes of length n, 

where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. 

Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one 

ball in some boxes. Each answer[i] is calculated considering the initial state of the boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations 
needed to move all the balls to the ith box.

Example 1:
Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
- 1) First box: you will have to move one ball from the second box to the first box in one operation.
- 2) Second box: you will have to move one ball from the first box to the second box in one operation.
- 3) Third box: you will have to move one ball from the first box to the third box in two operations, 
    and move one ball from the second box to the third box in one operation.
 */
/**
 * @param {string} boxes
 * @return {number[]}
 */
 var minOperations = function(boxes) {
    // create a moves array to track moves &
    // use nested for loops to traverse boxes,
    // checking if a box[j] is empty or not. if its not, 
    // update move[i] with the diffrence of i - j
     
     let moves = []; for(let i=0;i<boxes.length;i++){moves[i]=0;}
     
     for(let i = 0; i<boxes.length; i++) {
         for(let j = 0; j<boxes.length; j++) {
             if(boxes[j] === '1')
                 moves[i] += Math.abs(i-j);
         }
     }
     
     return moves;
 };