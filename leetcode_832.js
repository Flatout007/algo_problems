/*
// 832. Flipping an Image[Easy]
Given an n x n binary matrix image, flip the image horizontally, 
then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.
For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
For example, inverting [0,1,1] results in [1,0,0].
 
Example 1:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
*/
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let flipped = [];
    
    for(let i = 0; i<image.length; i++) {
        flipped.push(myReverse(image[i]));
    }
    
    for(let i in flipped) {
        invert(flipped[i]);
    }
    
   
    return flipped;
};

var myReverse = function(arr) {
    let revArr = [];
    
    for(let i = arr.length - 1; i >= 0; i-- ) {
        revArr.push(arr[i]);
    }
    
    return revArr;
}

var invert = function(arr) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === 1) {
            arr[i] = 0;
        } else if(arr[i] === 0) arr[i] = 1;
    } 
}