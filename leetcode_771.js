/** 
 * @description 
 *  @param {
 *   771. Jewels and Stone[Easy]
 * 
 *   You're given strings jewels representing the types of stones that are jewels, 
 *   and stones representing the stones you have. Each character in stones is a type 
 *   of stone you have. You want to know how many of the stones you have are also jewels.
 *   Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * }
 * 
 * @example {
    Example 1:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3
   }
*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let regex = new RegExp(jewels.split('').join('|'));
    let count = 0;
    
    // Use a regex pattern to test each current[i].
    // If true, add 1 to the counter.
    
    for(let i = 0; i<stones.length; i++) {
        if(regex.test(stones[i])) {
            count += 1;
        }
   } 
    
    return count;
};