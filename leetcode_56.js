/**
// 56. Merge Intervals[Medium]

Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    
    // sort intervals by first element [start] from each interval;
    const sortedIntervals = intervals.sort((a, b) => {
        if(a[0] < b[0]) return -1;
        else if(a[0] > b[0]) return 1;
        else return 0;
    });
    // mantain a new array to store & access first element of sorted intervals in upcoming loop;
    const mergedIntervals = [sortedIntervals[0]];
    
    for(let i = 1; i<sortedIntervals.length; i++) {
       let [currStart, currEnd] = sortedIntervals[i];
       let [prevStart, prevEnd] = mergedIntervals[mergedIntervals.length-1];
       
       if(currStart <= prevEnd) {
           // find max between stored[end] & sorted [end] to overwite the last [end] in stored intervals
           mergedIntervals[mergedIntervals.length - 1][1] = Math.max(prevEnd, currEnd);
       }
       else mergedIntervals.push(sortedIntervals[i]); 
    }
    
     return mergedIntervals;
};

/*
   if intervals < 1 return intervals;
   
   sort intervals by first element [start] from each interval;
   
   mantain a new array to store & access first element of sorted intervals in upcoming loop;
   
   for all intervals i+1 to n: 
      if the sorted [start] is <= than stored [end],
      find the max int between stored[end] & sorted [end] & overwite the last [end] in stored intervals
      else, add [[start],[end]] from the sorted intervals into stored intervals.
*/