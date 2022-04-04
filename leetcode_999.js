/**
 * 999. Available Captures for Rook [Easy]

On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number 
of white bishops 'B', black pawns 'p', and empty squares '.'.

When the rook moves, it chooses one of four cardinal directions 
(north, east, south, or west), then moves in that direction until it chooses to
stop, reaches the edge of the board, captures a black pawn, or is blocked by a 
white bishop. 

A rook is considered attacking a pawn if the rook can capture the 
pawn on the rook's turn. The number of available captures for the white rook is 
the number of pawns that the rook is attacking.

Return the number of available captures for the white rook.

Example 1:
Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: In this example, the rook is attacking all the pawns.
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
 var numRookCaptures = function(board) {
    /*
     1. FOR 0 in range of board len-
         FOR 0 in range of board[0] len; 
              look for Rook;
        (i.e "traverse board until found rook 'R'")
         
     2. CHECK & Traverse all 4 horizontal directions from current
        position returning ```count``` from doing step#3;
        (i.e traverse up, down, left, & right)
         
     3.IF found a bishop 'B' before finding a pawn 'P',
       stop checking that direction, else count captured pawn
    */ 
     
     let b = board; // just to make name shorter
     let count = 0;
     
     for(let i = 0; i<b.length; i++) {
         
         for(let j = 0; j<b[0].length; j++) {
             // if rook is found
             if(b[i][j] === 'R')
                return count = fun(b, [i, j]);
         }
     }
 };
    
 var fun = function(b, pos) {
  // Traverse all 4 horizontal directions starting at current position, 
  // incrementing count if finding valid a capture. returns count.
     
     let i, j, count = 0;
     
     // down 
     i = pos[0];
     for(; i<b.length; i++) {
         if(b[i][pos[1]] === "B") {
             break;
         } else if(b[i][pos[1]] === "p") {
             count+=1;
             break;
         }
     }
     
     // right
     j = pos[1];
     for(; j<b[0].length; j++) {
         if(b[pos[0]][j] === "B") {
            break;
         } else if(b[pos[0]][j] === "p") {
             count += 1;
             break;
         }
     }
     
     // left
     j = pos[1];
     for(; j>=0; j--) {
         if(b[pos[0]][j] === "B") {
             break;
         } else if(b[pos[0]][j] === 'p') {
             count += 1;
             break;
         }
     }
     
     // up
     i = pos[0];
     for(; i>=0; i--) {
         if(b[i][pos[1]] === "B")
             break;
         else if(b[i][pos[1]] === "p") {
             count += 1;
             break;
         }
     }
     
     return count;
 };    