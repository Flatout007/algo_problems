/** 
@dataStructure @name Array
  
@description @namespace {
    Arrays are a fundamental data structure, and they are 
    extremely useful. We use arrays to hold values of the 
    same type at contiguous memory locations. In particular, 
    the use of arrays allows us to create "groups" or 
    "clusters" of variables without needing to give a unique 
    variable name to each, but still allowing us to 
    individually index into the elements of the array. 
    If you haven't started counting from zero yet, now is 
    the time, because in C, arrays are zero-indexed which 
    means the first element of a k-element array is located 
    at array index 0 and the last element is located at array 
    index k-1.
}

@see {
    https://computersciencewiki.org/index.php/Arrays
}
*/

/**
 * @name Traverse
 * 
 * @algorithm {
    1.SET & ask user for position & data;
    
    2.ADD each element to array;
      TRAVERSE & print each element;
 * }
 */
let array = [];
let val, pos, idx;
for (let i = 0; i < 5; i++) {
  val = prompt("please enter a number");
  array[i] = parseFloat(val);
}
console.log(array);

/**
 * @name Insert
 * 
 * @algorithm {
    1.SET & ask user for position & data;
    
    2.IF pos is in bounds;
      DO step#3;
    
    2.SHIFT all elements right of pos to right;
      INSERT data after shifting all elements;  
 * }
 */
val = parseFloat(prompt("enter a number"));
pos = prompt("enter a position to store " + val);

if (pos <= 0) alert("Whoops, position is not valid");
else {
  for (let i = array.length - 1; i >= pos - 1; i--) {
    array[i + 1] = array[i];
  }
  array[pos - 1] = val;
}
console.log(array);

/**
 * @name Delete
 * 
 * @algorithm {
    1.SET & ask user for position to delete;
      SET initial value before deleting;
      
    2.IF pos is in bounds;
      DO step#3;
    
    2.SHIFT all elements right of pos to left;
      REMOVE last element after shifting;  
 * }
 */
pos = prompt("Enter a position to delete");
val = array[pos - 1];

if (pos <= 0) {
  alert("Whoops, invalid position");
} else {
  for (let i = pos - 1; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  alert("You've successfully deleted " + val);
}
// remove last element after shifting.
array[array.length - 1] = null;
idx = array.indexOf(null);
// remove null value from array.
array.splice(idx, 1);

console.log(array);
