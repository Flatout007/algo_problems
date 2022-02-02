/**
 * //28. Implement strStr()[Easy]

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great 
question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty 
string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let hash = {};
    let count = 0;
    let tracker = 0;
    let prevtracker = 0;
    if(needle === "") return 0;
     
    for(let i = 0; i<haystack.length; i++) {
      if(!hash[haystack[i]]) {
         hash[haystack[i]] = [haystack[i], [i]];
      } else hash[haystack[i]][1].push(i);
       
    }
   
    if(!hash[needle[0]]) return -1;
    count += 1;
    prevtracker = hash[needle[0]][1][0];
    if(needle.length < 2 && needle[0] !== haystack[0]) {
        return 
    } else if(needle.length < 2 && needle[0] === haystack[0]) return 0;
    tracker = hash[needle[1]][1][0];
    if(prevtracker === tracker) tracker = hash[needle[1]][1][1]; 
   
    let j = 1;
    while(count !== needle.length) {
        if(hash[needle[j]] && tracker !== prevtracker + 1) {
           return - 1;
        }
        prevtracker = tracker;
        count ++;
        j ++;
        tracker++;
    } 
     
    return hash[needle[0]][1][0];
 };