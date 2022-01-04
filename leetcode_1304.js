/*
// 1304. Find N Unique Integers Sum up to Zero[Easy]
Given an integer n, return any array containing n unique 
integers such that they add up to 0.

Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
*/
/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    let nums = createNums(n);
    let arr = [];
    let lastNum;
    
    /* insert numbers 1 to n-1 into arr, these will all be unique.
       finally, sum arr, make sum negative, make total last element in arr. 
       this will make sure all values sum to 0. 
    */
    
    for(let i = 0; i<n-1; i++) {
        arr.push(nums[i]);
    }
    
    lastNum = arr.reduce((acc, ele) => {return acc += ele }, 0);
    
    arr.push(-lastNum);
    
    return arr;
}

var createNums = function(n) {
    let arr = [];
    
    for(let i = 1; i<n; i++) {
        arr.push(i);
    }
    
    return arr;
}



