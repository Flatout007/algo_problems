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
    // avgaArray<-[], sum<-0.00000, windowStart<-0, windowStart<-0
    
    //1.Use sliding window to determine average for subsets of k size
    //2.avgsArray[] <<- avgs <- sum of all subsets[i] / subset.length
    //3.Return max int from avgsArray[i]
    
    let windowStart = 0,
    sum = 0.000000,
    avgsArray = [];
    
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sum += nums[windowEnd]
        /*if(windowEnd !== k - 1) {
          sum += nums[windowEnd]
        } else if(windowEnd === k - 1) {
            avgsArray.push(sum / k);  
          sum = sum - nums[windowStart]
          
          windowStart += 1;  
        }
        */
        
        if(windowEnd >= k -1) {
          avgsArray.push(sum / k);  
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