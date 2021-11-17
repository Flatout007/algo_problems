/*
Initially, there is a Robot at position (0, 0). 
Given a sequence of its moves, judge if this robot makes a circle, 
which means it moves back to the original place.

The move sequence is represented by a string. And each move 
is represent by a character. The valid robot moves are R (Right),
 L (Left), U (Up) and D (down). The output should be true or false 
representing whether the robot makes a circle.

nput: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

function move(str) {
  str = str.split('');
  let count = 0;
  let hash = {'U':0, 'L':0, 'R':0, 'D':0};

 for(let i in str) {
    if(!hash[str[i]]) {
        hash[str[i]] = 1;
    } else hash[str[i]] += 1;
 }

 if(hash['U'] === hash['D'] && hash["R"] === hash["L"]) return true;
 return false; 

}

move("UD")



