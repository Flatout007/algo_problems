/**
 * 1812. Determine Color of a Chessboard Square[Easy]

You are given coordinates, a string that represents the coordinates of a square of the chessboard. 

Below is a chessboard for your reference. Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. 

The coordinate will always have the letter first, and the number second.

Example 1:
Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
 */
/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {  
    let chess = [], chars = {}, a = 97, pos = [];
    for(let i = 0; i<8; i++) {chess[i] = []};
    for(let i = 0; i<8; i++) {
        for(let j = 0; j<8; j++) {
            if(i % 2 === 0) {
                if(j % 2 === 0) {
                    chess[i][j] = "black";
                } else chess[i][j] = "white";
            } else {
                if(j % 2 === 0) {
                    chess[i][j] = "white";
                } else chess[i][j] = "black";
            }
        }
        
        chars[String.fromCharCode(a++)] = i;
    }
    
    pos[0] = chars[coordinates[0]];
    pos[1] = parseFloat(coordinates[1]) - 1;
    
    return chess[pos[1]][pos[0]] === "black" ? false : true;
};