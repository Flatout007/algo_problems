/**
  @description { 
    70. Climbing Stairs
    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 }
@example {
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
}
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = [1, 2];

  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  // the trick is to (by coincidence) treat this problem as
  // finding the nth number in the fibonacci sequence only change is
  // the sequence must start at [1,2] instead of [0,1,1,2]

  for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr[n - 1];
};
