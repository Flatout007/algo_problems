/**
 @function twoSum(nums->number[],target->number)

 @namespace { Two Sum LeetCode 1.[EASY] }

 @description @namespace {
    Given an array of integers nums and an integer 
    target, return indices of the two numbers 
    such that they add up to target.
 }

 @example @namespace {
    Example: 

    input:([3,3], 6) 
    output => [0,1]
 }

* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
 var twoSum = function(nums, target) {
 let hash = new Map();

 let arr = [];

 let foundPair = false;

 let i = 0;
 
 let subtraction;

   while(i<nums.length) {
       hash[nums[i]] = i; 
       
       i++;
   }
   
   let k = 0;

   while(k<nums.length && !foundPair) {
       subtraction = target - nums[k];

       if(subtraction in hash) {
           if(k != hash[subtraction]) {
               arr.push(k);
               arr.push(hash[subtraction]);
               foundPair = true;
           }
       }

       k++;
   }
  return arr;

    
  };

