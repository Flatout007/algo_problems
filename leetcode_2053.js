/**
 * 2053. Kth Distinct String in an Array [Easy]

A distinct string is a string that is present only once in an array.
Given an array of strings arr, and an integer k, return the kth distinct string present in arr. 
If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

Example 1:
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned.
 */
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    let output = [], obj = {}, count = 0;

    // for let i to arr(n)
    for(let i = 0; i<arr.length; i++) {
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
    }
    
    // extract all arr[i] that are not in obj
    output = arr.filter(ele => obj[ele] <= 1 || !obj[ele]);
    return output[k-1] ? output[k-1] : "";
};