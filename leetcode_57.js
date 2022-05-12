/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  /**
    @algorithm {
     1.TRAVERSE the intervals;
     
     2.WHILE traversing intervals check the following statement(s)!;
       IF the new intervals' domain is < than the current intervals range ->
         MERGE current intervals' domain with the new intervals' range;
      
     3.AFTER merging newInterval merge any other overlapping intervals; 
    }
    */

  for (let i = 0; i < intervals.length; i++) {
    let [domain, range] = intervals[i];
    let [newDomain, newRange] = newInterval;

    if (newDomain <= range) {
      intervals[i] = merge(domain, Math.max(range, newRange));
      break;
    }
  }

  for (let i = 1; i < intervals.length; i++) {
    let [prevDomain, prevRange] = intervals[i - 1];
    let [domain, range] = intervals[i];

    if (domain <= prevRange) {
      intervals[i - 1] = null;
      intervals[i] = merge(prevDomain, Math.max(range, prevRange));
    }
  }

  return intervals.filter((ele) => ele !== null);
};

var merge = function (domain, range) {
  return [domain, range];
};
