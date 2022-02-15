/**
 * 2103. Rings and Rods[Easy]

There are n rings and each ring is either red, green, or blue. 

The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. 

Every two characters in rings forms a color-position pair that is used to describe each ring where:
-The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
-The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, 
a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.

Example 1:
Input: rings = "B0B6G0R6R0R6G9"
Output: 1
Explanation: 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.
 */
/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    // rods :-> {} of size 10
    let rods = {};
    
    let count = 0;
    
    let j = 1;
    
   // 10 times: fill rods with []'s
    for(let i = 0; i<10; i++) {
        rods[i] = [];
    }
    
    // length of rings times:
    for(let i = 0; i<rings.length; i+=2, j+=2) {
        if(rings[j]) {
            let num, color; num = parseFloat(rings[j]); color = rings[i];
            // if rod not seen, put first color onto rod
            if(!rods[num]) rods[num] = [color];
            else 
            // I already seen this rod, so just add to exsiting rod
            rods[num].push(color);
        }
    }
        
    let keys = Object.keys(rods);
    for(let i = 0; i<keys.length; i++) {
       // if any rod has all R,G,B colors, increment count by one
       if(rods[keys[i]].length && hasColors(rods[keys[i]])) {
           count += 1;
       }
    }
    
    return count;
};


var hasColors = function(arr) {
    let colors = {'R': 1, 'G': 1, 'B': 1};
    
    for(let color of arr) {
        if(colors[color]) {
            colors[color] = 'yes';
        }
    }
    
    return Object.values(colors).every(ele => ele === 'yes');
}
