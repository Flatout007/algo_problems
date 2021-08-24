


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

 // 1. Use sliding window to shrink arr based on if sum >= target

 var minSubArrayLen = function(target, nums) {
    
  let start = 0;
  let minArray = [];
  let sum = 0;

  for(let end = 0; end<nums.length; end++) {
      sum += nums[end];

      while(sum >= target) {
        minArray.push(end - start + 1);
        sum -= nums[start];
        start++;
      }
  }


  return minArray.length <= 0 ? 0 : myMin(minArray);

};


function myMin(arr) {
  let min = arr.shift();


  for(let i =0; i<arr.length; i++) {
    if(min > arr[i]) min = arr[i]; 
  }

 return min;
}