/**
 * @name 2D Array
  
 * @description @namespace {
        Like a 1D array, a 2D array is a collection 
        of data cells, all of the same type, which can 
        be given a single name. However, a 2D array is 
        organized as a matrix with a number of 
        rows and columns.
   }

 * @credits {
       https://computersciencewiki.org/index.php/Two-dimensional_arrays
   }
 */
let twoDArray = new Array(2); 
for(let i = 0; i<twoDArray.length; i++)
    twoDArray[i] = new Array(3);

let val, row, data, idx;
/**
 * @name Traverse
   
 * @algorithm {
     1.FOR i is 0 to row length;
       (Traverse each row)
       DO step#2;

     3.FOR j is 0 to column length;
       (Traverse each position in row a.k.a column)
       DO step#3;

     2.SET & ask user for data to fill 2*3 2d array;
       ADD user data to array;
    }
 */
for(let i = 0; i<twoDArray.length; i++) {

    for(let j = 0; j<twoDArray[i].length; j++) {
        val = parseFloat(prompt("Enter a number"));
        twoDArray[i][j] = val;
    }
}

console.log(twoDArray);

/** 
 * @name Insert
   
 * @algorithm {
     1.SET & ask user for data, row & position for insertion;

     2.IF row & position are in bounds;
       DO step#3;

     3.SHIFT all elements right of pos to right;
        (Overwriting value of pos in the process)
       INSERT data into pos after shifting;   
   }
*/
data = parseFloat(prompt("Enter a number"));
row = parseFloat(prompt("Enter row you want to insert " + data));
pos = parseFloat(prompt("What position in row " + row + " would you like to store "+ data))

if(pos <= 0 || row <= 0) {
    alert("Whoops, invalid row or position");
} else {
    let i = row-1;
    let len = twoDArray[i].length;
    for(let j = len-1; j>=pos-1; j--) {
        twoDArray[i][j+1] = twoDArray[i][j];
    }
    twoDArray[i][pos-1] = data;
}

console.log(twoDArray);

/** 
 * @name Delete
   
 * @algorithm {
     1.SET & ask user for row & position for deletion;

     2.IF row & position are in bounds;
       DO step#3;

     3.SHIFT all elements right of pos to left;
       REMOVE last element from row after shifting;   
   }
*/
row = parseFloat(prompt("Enter the row that you want to delete from"));
pos = parseFloat(prompt("Enter the position of the data you want to delete"));

if(row <= 0 || pos <= 0) {
    alert("Whoops, invalid row or position");
} else {
    let i = row-1;
    let len = twoDArray[i].length;
    let data = twoDArray[i][pos-1];
    for(let j = pos-1; j<len; j++) {
        twoDArray[i][j] = twoDArray[i][j+1];
    }
    alert("You've successfully removed " + data + " from array " + row + " at position " + pos);
    twoDArray[i][len-1] = null;
    idx = twoDArray[i].indexOf(null);
    twoDArray[i].splice(idx, 1);
}

console.log(twoDArray);