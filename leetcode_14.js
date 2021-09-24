/////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

 /**
 * @param {string[]} strs
 * @return {string}
 */

  var longestCommonPrefix = function(strs) {
    
    // get two chars from first string in array,
    // compare chars to each element, if checks true for all, increase char amount by 1;
    // push those chars into an array, do so until chars dosent check true for all elements;
    // return the longest prefix in the array
    
    
    let numChars = 2;
    
    let left = 0;
    let right = strs.length - 1;
    let match = false
    let trueArray = [];
    let prefixArr = [];
    
    
    //debugger;
    while(!match) {       
        if(strs[left].slice(0, numChars)  === strs[right].slice(0,numChars)) {
            
            console.log('found match');
            prefixArr.push(strs[left].slice(0, numChars));
            trueArray.push(true);
            match = true;
        }   else trueArray.push(false);

        if(right < 1) {
          right = strs.length;
          numChars += 1;
        };
  
        match = false;

        if(trueArray.includes(false)) return myMax(prefixArr);

        
        right -= 1;
          
    }  
    
};

function myMax(arr) {
  
  let current = arr[0];

 
  
  for(let i = 0; i<arr.length; i++) {
    if(arr[i + 1]) 
      if(current.length < arr[i+1].length) {
        console.log(current, arr[i+1])
        current = arr[i+1];
      
    }
  }


  return current

 

}

longestCommonPrefix(["flower","flow","flight"], 'fl');