/** 
@function diStringMatch(s->string);

@description @param {
    942. DI String Match[Easy]

    A permutation perm of n + 1 integers of all the integers in the range [0, n] 
    can be represented as a string s of length n where:
    s[i] == 'I' if perm[i] < perm[i + 1], and
    s[i] == 'D' if perm[i] > perm[i + 1].

    Given a string s, reconstruct the permutation perm and return it. 
    If there are multiple valid permutations perm, return any of them.
}

@example @param {
    Example 1:

    Input: s = "IDID"
    Output: [0,4,1,3,2]
}

* @param {string} s
* @return {number[]}
*/
 var diStringMatch = function(s) { 
    let I = 0;
    let D = s.length;
    let arr = [];  
    
    for(let i = 0; i<s.length; i++) {
        if(s[i] === "I") {
            arr[i] = (I);
            I+=1; 
        } else if(s[i] === "D") {
            arr[i] = (D);
            D-=1; 
        } 
    }
      
    if(s[s.length-1] === "D") {
        arr.push(D);
    }  else {
        arr.push(I);
    }
      
    return arr;
  };
  
  