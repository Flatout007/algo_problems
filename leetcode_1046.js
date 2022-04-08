/** 
 * @description
 * @param {
    * 1046. Last Stone Weight [Easy]
    * 
    * You are given an array of integers stones where stones[i] is the weight of the ith stone.
    * We are playing a game with the stones. On each turn, we choose the heaviest two stones
    * and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. 
    * 
    * The result of this smash is: If x == y, both stones are destroyed. 
    * Also If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
    * At the end of the game, there is at most one stone left.
    * 
    * Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 * }   
    @example Example 1:

    Input: stones = [2,7,4,1,8,1]
    Output: 1
    Explanation: 
    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /*
    1.SORT array;
    
    2.WHILE len is more than 1, pop & get last 2 max cells; 
      IF they aren't the same, get difference between them & do step#3; 
    
    3.BINARY_SEARCH array, exhausting left pointer to replace max with diff;
  
    */

  stones = stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    let lrg = stones.pop();
    let sml = stones.pop();
    let diff = lrg - sml;
    if (lrg === sml) continue;
    stones.splice(fun(stones, diff), 0, diff);
  }

  return stones.length ? stones[0] : 0;
};

var fun = function (arr, target) {
  // binary search

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = left + right - left / 2;

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};
