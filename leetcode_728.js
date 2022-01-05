/*
// 728. Self Dividing Numbers[Easy]
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 
128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the 
self-dividing numbers in the range [left, right].

Example 1:
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
*/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let range = [];
    
    for(let i = left; i<=right; i++) {
        if (i.toString().toString().includes('0')) {
            continue;
        } else if (i.toString().length <= 1 || isDivideSelf(i.toString())) {
            range.push(i);
        } 
    }
    
    // console.log(range);
    return range;
};

var isDivideSelf = function(strNum) {
    let s = strNum.split(""); 
    let boolean = true;
    
    s.forEach((ele) => {if (parseFloat(strNum) % ele !== 0) boolean = false});
    
    return boolean;
}