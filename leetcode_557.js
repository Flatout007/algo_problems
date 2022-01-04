/*
// 557. Reverse Words in a String III[Easy]
Given a string s, reverse the order of characters in each word 
within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let arr = [];
    s = s.split(" ");
    
    for(let i = 0; i<s.length; i++) {
        arr.push(myReverse(s[i]).join(""));
    }
    
    //console.log(arr.join(" "));
    return arr.join(" "); 
};

var myReverse = function(s) {
    let arr = [];
    
    for(let i = s.length - 1; i>=0; i--) {
        arr.push(s[i]);
    }
    
    //console.log(arr);
    return arr;
}

