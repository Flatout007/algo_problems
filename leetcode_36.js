/**
@description @namespace {
    36. Valid Sudoku [Medium]

    Determine if a 9 x 9 Sudoku board is valid. 
    Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the 
    digits 1-9 without repetition.

    Note:
    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.
}
@example {
    Example 1:
    Input: board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true
}
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    /**
      @algorithm {
       1.TRAVERSE row & columns of the board to check for repetitive numbers 1-9;
            
       2.TRAVERSE each 3 by 3 square to check for repetitive numbers 1-9;
      
       3.IF there are any repetitive numbers during traversals return false;
      }
      */
  
    let sudoku = new Sudoku(board);
  
    return sudoku.checkRow() && sudoku.checkCol() && sudoku.checkSqr()
      ? true
      : false;
  };
  
  var Sudoku = function (board) {
    this.board = board;
  };
  
  Sudoku.prototype.checkRow = function () {
    const b = this.board;
    let dup = new Array(9).fill(false);
  
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        if (b[i][j] === ".") continue;
        if (dup[b[i][j]] === true) {
          return false;
        }
        dup[b[i][j]] = true;
      }
      dup = new Array(9).fill(false);
    }
  
    return true;
  };
  
  Sudoku.prototype.checkCol = function () {
    const b = this.board;
    let dup = new Array(9).fill(false);
  
    for (let j = 0; j < b[0].length; j++) {
      for (let i = 0; i < b.length; i++) {
        if (b[i][j] === ".") continue;
        if (dup[b[i][j]] === true) return false;
        dup[b[i][j]] = true;
      }
  
      dup = new Array(9).fill(false);
    }
  
    return true;
  };
  
  Sudoku.prototype.checkSqr = function () {
    const b = this.board;
    let dup = new Array(9).fill(false);
  
    for (let k = 0; k < b.length; k += 3) {
      for (let m = 0; m < b[0].length; m += 3) {
          
        for (let i = k; i < 3 + k; i++) {
          for (let j = m; j < 3 + m; j++) {
            if (b[i][j] === ".") continue;
            if (dup[b[i][j]] === true) return false;
            dup[b[i][j]] = true;
          }
        }
  
        dup = new Array(9).fill(false);
      }
    }
  
    return true;
  };
  