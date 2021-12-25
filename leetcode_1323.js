/*
// 1323. Maximum 69 Number [Easy]
You are given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Example 1:
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
*/
/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    if(!num.toString().split('').includes('6')) return num;
    let obj = {}; 
    let set = []; 
    let maxArr = []; 
/*
  // Store each digit into obj with i as key, each digit as [value].
  // If obj[i] is 9? keep changing it to 6, push joined obj values so far into maxArr.
  // If obj[i] is 6? keep changing it to 9, push joined obj values so far into maxArr.
  // Return the max number from inside maxArr.
*/
    for(let i in num.toString().split('')) {   
        obj[i] = [num.toString().split('')[i]];  
    }
     
    while(set.length < num.toString().split('').length) {
        for(let i = 0; i<Object.keys(obj).length; i++) {
            if(obj[i][0] === '6') {
                if(!set.includes(i)) {
                    obj[i][0] = '9';
                    maxArr.push(parseFloat(joinNums(obj)));
                    set.push([i]);
                    obj[[i]][0] = '6';
                    break;
                } else continue;
            } else {
                if(!set.includes(i)) {
                    obj[[i]][0] = '6';
                    maxArr.push(parseFloat(joinNums(obj)));
                    set.push(i);
                    obj[[i]][0] = '9';
                    break;
                } else continue;
            }
        }
    }
    
    return Math.max(...maxArr);
};

const joinNums = (obj) => {
    let arr = [];
    let keys = Object.keys(obj);
    
    for(let i in keys) {
        arr.push(obj[keys[i]][0]);
    }
    
    return arr.join("");
}
