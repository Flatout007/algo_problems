/**
 * 1299. Replace Elements with Greatest Element on Right Side[Easy]

Given an array arr, replace every element in that array with the greatest element among 

the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    // output :=> [];
    let output = [];
    
    // arr times: put the > number to the right of curr[i] into output
    for(let i = 0; i<arr.length; i++) {
        if(i === arr.length-1) {
            output.push(-1);
            return output;
        }
        let slices = arr.slice(i + 1, arr.length);
        let maxtmp = Math.max(...slices);
        output.push(maxtmp);
    }
};

// input: [17,18,5,4,6,1]
// arr times: put the greater number to the right of curr[i] into output
    // slice =>[18,5,4,6,1], max => 18, i = 0
    // slice =>[5,4,6,1], max => 6, i = 1
    // slice =>[4,6,1], max => 6, i = 2
    // slice =>[6,1], max => 6, i = 3
    // slice =>[1], max => 1, i = 4
    // i eqauls nums.length - 1, so put -1 into output
    // return output => [18, 6,6,6,1,-1]
