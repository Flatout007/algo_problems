/**
 * 2085. Count Common Words With One Occurrence[Easy]

Given two string arrays words1 and words2, 
return the number of strings that appear exactly 
once in each of the two arrays.

Example 1:
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
 */
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    let bigger = fun1(words1, words2), tracker, count = 0;
    if(bigger.length === words1.length) tracker = words2;
    else tracker = words1;
    if(words1.length === words2.length) {
        tracker = words2; 
        bigger = words1;
    } 
    let obj1 = fun2(words1);
    let obj2 = fun2(words2);
    for(let i = 0; i<bigger.length; i++) {
       
        if(tracker.includes(bigger[i])) {
            if(obj1[bigger[i]] > 1 || obj2[bigger[i]] > 1) 
                    continue;    
            count += 1;
        }
    }
    return count;
};
    
var fun1 = function(w1, w2) {
    if(w1.length > w2.length) return w1;
    else return w2;
} 

var fun2 = function(w) {
    let obj = {};
    
    for(let i = 0; i<w.length; i++) {
        if(!obj[w[i]]) obj[w[i]] = 1;
        else obj[w[i]] += 1;
    }
    
    return obj;
}