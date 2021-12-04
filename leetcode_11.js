/*
1. Container With Most Water [Medium]
Given n non-negative integers a1, a2, ..., an , where each represents 
a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, 
such that the container contains the most water.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    // width = diff of the 2 current pos i
   // height = min of the 2 current[i]
    /*  let area;
      let max = 0;
      for(let i = 0; i<height.length; i++) {
          for(let j = 0; j<height.length; j++) {
              area = (Math.min(height[i], height[j])) * (i - j);
              max = Math.max(max, area);
          }
      }
      
      return max;
      */
      let left = 0,right = height.length -1;
      let area, max = 0;
      
      while(left < right) {
          area = Math.min(height[left], height[right]) * (right - left);
          max = Math.max(max, area);
           
          if(height[left] < height[right]) {
             left++; 
          } else right--;
      }
      
      return max;
  };
  
  
  
  
  