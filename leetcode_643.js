// 643. Maximum Average Subarray I
/*
Find a contiguous subarray whose length is equal to k that 
has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
    //1.Use sliding window to determine average for subsets of k size
    //2.avgsArray[] <<- avgs <- sum of all subsets[i] / subset.length or k
    //3.Return max int from avgsArray[i]
    
    let windowStart = 0,
    sum = 0.00,
    avgsArray = [];
    
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sum += nums[windowEnd]
      
        if(windowEnd >= k -1) {
          avgsArray[windowEnd+1] = (sum / k);  
          sum = sum - nums[windowStart];  
          windowStart += 1; 
        }
    }
    
   return myMax(avgsArray)
};

var myMax = function(arr) {
    let max = arr[0];
    
    for(let i = 0; i<arr.length; i++) {
        if(max < arr[i]) {
           max = arr[i];
        }
    }
    
    return max;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 904. Fruits Into Baskets
you are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

-You only have two baskets, and each basket can only hold a single type of fruit. 
-There is no limit on the amount of fruit each basket can hold.
-Starting from any tree of your choice, you must pick exactly one fruit from every tree 
(including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
-Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
-Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
*/

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let hash = {};
    let windEnd;
    let windStart = 0;
    let maxLength = 0;
    
    if(fruits.length === 2) return 2;
    if(fruits.length === 1) return 1;
    
    // count each fruit/number via hashtable. Keys are the baskets
    for(windEnd = 0; windEnd < fruits.length; windEnd++) {
        let right = fruits[windEnd];
        if(!hash[right]) {
            hash[right] = 1;
        } else hash[right] += 1;
        
        
      // shrink sliding window until there are only 2 baskets in 
      // hashtable
      while(Object.keys(hash).length > 2) {
        let left = fruits[windStart];
        hash[left] -= 1;
        if(hash[left] === 0) delete hash[left];
        windStart += 1;
     }
        // remember max length of subarray
        const subArray = fruits.slice(windStart, windEnd + 1);
        maxLength = Math.max(maxLength, subArray.length);
    }
    
    return maxLength;
};
