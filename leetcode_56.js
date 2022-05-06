/**
@description @namespace { 
   56. Merge Intervals[Medium]

   Given an array of intervals where intervals[i] = [starti, endi], 
   merge all overlapping intervals, and return an array of the non-overlapping 
   intervals that cover all the intervals in the input.
}
@example {
   Example 1:
   Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
   Output: [[1,6],[8,10],[15,18]]
   Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
}
@param {number[][]} intervals
@return {number[][]}
@algorithm {
   1.SORT each interval by its domain a.k.a its x value;
    
   2.TRAVERSE intervals, but start at the 2nd cell to maintain a prev cell;
    
   3.CHECK 1 case while traversing intervals;
      IF the current domain is less or equal to the prev range;
      MERGE the prev domain with the max of the prev & current range;
 }
 @time {O(n)} n->intervals.length
 @space {O(1)} 
 */
 var merge = function(intervals) {
   let i = 1;
   
   intervals = intervals.sort((a,b) => a[0] - b[0]);
   
   while(i < intervals.length) { 
       // prev & current domain & ranges respectfully.
       let [prevD, prevR] = intervals[i-1]; 
       let [d,r] = intervals[i]; 
       
       // if curr domain is <= prev range, merge prev domain with the max range.
       if(d <= prevR) {
           intervals[i] = fun(intervals[i-1], Math.max(prevR, r)); 
           intervals[i-1] = null;
       }
       
    i++;   
   }
   
  return intervals.filter(ele => ele !== null);  
};

var fun = function(arr, maxRange) {
   // returns a new array, simulating a merge;
   
   return [arr[0], maxRange]; 
};

