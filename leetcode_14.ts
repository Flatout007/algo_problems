/////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/
function longestCommonPrefix(strs: string[]): string {
  let output = "";
  
  for(let i = 0; i<strs[0].length; i++) {
      for(let string of strs) {
         if(!string[i] || strs[0][i] !== string[i]) {
             return output;
         }
      }
      output += strs[0][i];
  }
  
  return output;
};