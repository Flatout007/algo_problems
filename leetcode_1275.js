/**
 * 1275. Find Winner on a Tic Tac Toe Game[Easy]

Tic-tac-toe is played by two players A and B on a 3 x 3 grid. 
 
The rules of Tic-Tac-Toe are:
- Players take turns placing characters into empty squares ' '.
- The first player A always places 'X' characters, while the second player B 
  always places 'O' characters.
- 'X' and 'O' characters are always placed into empty squares, never on filled ones.
- The game ends when there are three of the same (non-empty) character filling 
  any row, column, or diagonal.
- The game also ends if all squares are non-empty.
- No more moves can be played if the game is over.
  Given a 2D integer array moves where moves[i] = [rowi, coli] 
  indicates that the ith move will be played on grid[rowi][coli]. 
  
return the winner of the game if it exists (A or B). 
In case the game ends in a draw return "Draw". 
If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), 
the grid is initially empty, and A will play first.

Example 1:
Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.
 */
/**
 * @param {number[][]} moves
 * @return {string}
 */
 const X = 'X', O = 'O';
 var tictactoe = function(moves) {
     /*
     1.SET a 2d 3*3 matrix;
     2.Fill it with moves;
     3.Find the winner, by checking IF any column, row, 
       or two main diagonals are filed with X's or O's
     */
     
     let mat = new Array(3);
     for(let i = 0; i<mat.length; i++)
         mat[i] = new Array(3);
     
     for(let i = 0; i<moves.length; i++) {
         let [k, j] = moves[i];
         
         if(i % 2 === 0) {
             mat[k][j] = X;  
         } else {
             mat[k][j] = O;
         }
     }
     
     // won row
     switch(fun1(mat)) {
         case X: return "A";
             break;
         case O: return "B"; 
             break;
         default: break;   
     } 
     
     // won column
     switch(fun2(mat)) {
         case X: return "A";
             break;
         case O: return "B"; 
             break;
         default: break; 
     }
     
     // won diagonal
     switch(fun3(mat)) {
         case X: return "A";
             break;
         case O: return "B";
             break;
         default: break; 
     }
     
     if(moves.length < 9)
         return "Pending";
     return "Draw";    
 };
 
 
 var fun1 = function(b) {
     // won row
     
     // x wins
     if(b[0][0] === X) {
         if(b[0][1] === X) {
             if(b[0][2] === X)
                 return X;
         }
     }
     
     if(b[1][0] === X) {
         if(b[1][1] === X) {
             if(b[1][2] === X)
                 return X;
         }
     }
     
     if(b[2][0] === X) {
         if(b[2][1] === X) {
             if(b[2][2] === X)
                 return X;
         }
     }
     
     // o wins
      if(b[0][0] === O) {
         if(b[0][1] === O) {
             if(b[0][2] === O)
                 return O;
         }
     }
     
     if(b[1][0] === O) {
         if(b[1][1] === O) {
             if(b[1][2] === O)
                 return O;
         }
     }
     
     if(b[2][0] === X) {
         if(b[2][1] === X) {
             if(b[2][2] === X)
                 return O;
         }
     }
 };
 
 var fun2 = function(b) {
     // won column
     
     // x wins
     if(b[0][0] === X) {
         if(b[1][0] === X) {
             if(b[2][0] === X) 
                 return X;
         }
     }
     
     if(b[0][1] === X) {
         if(b[1][1] === X) {
             if(b[2][1] === X) 
                 return X;
         }
     }
     
     if(b[0][2] === X) {
         if(b[1][2] === X) {
             if(b[2][2] === X) 
                 return X;
         }
     }
     
     // o wins
     if(b[0][0] === O) {
         if(b[1][0] === O) {
             if(b[2][0] === O) 
                 return O;
         }
     }
     
     if(b[0][1] === O) {
         if(b[1][1] === O) {
             if(b[2][1] === O) 
                 return O;
         }
     }
     
     if(b[0][2] === O) {
         if(b[1][2] === O) {
             if(b[2][2] === O) 
                 return O;
         }
     }
 };
 
 var fun3 = function(b) {
     // won main diagonals
     
     // x wins
     if(b[0][0] === X) {
         if(b[1][1] === X) {
             if(b[2][2] === X)
                 return X;
         }
     }
     
     if(b[0][2] === X) {
         if(b[1][1] === X) {
             if(b[2][0] === X)
                 return X;
         }
     }
     
     // o wins
     if(b[0][0] === O) {
         if(b[1][1] === O) {
             if(b[2][2] === O)
                 return O;
         }
     }
     
     if(b[0][2] === O) {
         if(b[1][1] === O) {
             if(b[2][0] === O)
                 return O;
         }
     }
 }