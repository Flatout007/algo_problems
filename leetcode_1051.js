/**
 * 1051. Height Checker [Easy]

A school is trying to take an annual photo of all the students. 

The students are asked to stand in a single file line in non-decreasing order by height. 

Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. 

Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

Example 1:
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let copy = [...heights];
    // sort heights to get expexted heights
    let expected = copy.sort((a,b) => a-b);
    let tallys = [];
    // if curr height[i] dosent equal expected[i], make a note of it
    for(let i = 0; i<heights.length; i++) {
        if(heights[i] !== expected[i]) {
            tallys.push(i);
        }
    }
    
    return tallys.length;
};
// input: [1,1,4,2,1,3]
// sort heights to get expexted heights
//  heights => [1,1,4,2,1,3]
// heights.length times: 
    // if curr height[i] dosent equal expected[i], make a note of it
    // tallys = [], i = 0
    // tallys = [], i = 1
    // tallys = [2], i = 2
    // tallys = [2], i = 3
    // tallys = [2,4], i = 4
    // tallys = [2,4,5], i = 5
// output: tallys.length => 3
