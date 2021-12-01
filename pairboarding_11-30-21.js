/*
Part 1: Say that I gave you an array of length n, 
containing the numbers 1..n in jumbled order. "Sort" 
this array in O(n) time. You should be able to 
do this without looking at the input.

Part 2: Say that I give you an array of 
length n with numbers in the range 1..N (N >= n). 
Sort this array in O(n + N) time. You may use O(N) memory.

Part 3: Say I give you an array of n strings, each of 
length k. I claim that, using merge sort, you can sort 
this in O(knlog(n)), since comparing a pair of strings takes O(k) time.
*/



function sort1(nums) {
    let arr = [];

    for(let i in nums) {
        arr.push(parseInt(i) + 1);
    }

    return arr;
}

function sort2(nums) {
    let arr = [];

    for(let i in nums) {
        arr[nums[i-1]] = nums[i]; 
    }

    return arr;

}
