/*
// 1773. Count Items Matching a Rule[Easy]
You are given an array items, where each items[i] = [typei, colori, namei] 
describes the type, color, and name of the ith item. You are also given a rule 
represented by two strings, ruleKey and ruleValue.
The ith item is said to match the rule if one of the following is true:
-ruleKey == "type" and ruleValue == typei.
-ruleKey == "color" and ruleValue == colori.
-ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Example 1:
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    for(let i = 0; i<items.length; i++) {
        if(checkForMatches(items[i], ruleKey, ruleValue)) {
            count += 1;
        }
    }
    
    return count;
};

var checkForMatches = function(arr, ruleKey, ruleValue) {
    if(ruleKey === "color") {
        if(arr[1] === ruleValue) return true; 
    } else if(ruleKey === "type") {
        if(arr[0] === ruleValue) return true
    } else if(ruleKey === "name") {
        if(arr[2] === ruleValue) return true;
    }
    
    return false;
}

/*[
 ["phone","blue","pixel"],
 ["computer","silver","lenovo"],
 ["phone","gold","iphone"]
],*/