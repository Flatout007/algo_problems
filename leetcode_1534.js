/*
// 1534. Count Good Triplets[Easy]
Given an array of integers arr, and three integers a, b and c. 
You need to find the number of good triplets.
A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.
Return the number of good triplets.

Example 1:
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
*/
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    
    for(let i = 0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            for(let k = j + 1; k<arr.length; k++) {
                if(0 <= i && i < j && j < k && k < arr.length) {
                    if(Math.abs(arr[i]-arr[j]) <= a) {
                        if(Math.abs(arr[j] - arr[k]) <= b) {
                            if(Math.abs(arr[i] - arr[k]) <= c) {
                                count += 1;
                            }
                        }
                    }
                }
            }
        }
    }
    
    return count;
};