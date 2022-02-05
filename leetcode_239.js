/**
239. Sliding Window Maximum[Hard]

You are given an array of integers nums, there is a sliding window 
of size k which is moving from the very left of the array to the very right.
You can only see the k numbers in the window. Each time the sliding window moves
right by one position.

Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    // slow, needs optimization 
    if(nums.length <= 1) return nums;
    if(k === nums.length) return [Math.max(...nums)];
    if(k === 1) return nums;
    let start = 0;
    let end = k;
    let arr;
    let max = -Infinity;
    let maxWind = [];
    
    
    while(end < nums.length) { 
        // update window
        arr = nums.slice(start, end + 1);  
        max = Math.max(max, nums[ + start - 1]); 
        maxWind.push(max);
        end++;
        start++;
    }
   
    return maxWind;
    
};

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
//  [1,3,-1,] 3
//   [3,-1,-3] 3
// [-1,-3,5] 5
// [-3,5,3] 5
// [5,3,6] 6
// [3,6,7] 7

