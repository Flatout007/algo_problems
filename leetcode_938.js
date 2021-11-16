/*
// 938. Range Sum of BST
Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].

Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
*/
/**
 * Definition for a binary tree node.
 * 
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    const bfsArr = bfsIntoArray(root, low, high);

    return bfsArr.reduce((acc, ele) => acc += ele, 0);
};

var bfsIntoArray = function(root, low, high) {
    let r = root;
    let q = [r];
    let nodes = [];
    
    while(q.length) {
        r = q.shift();
        if(r.val >= low && r.val <= high) nodes.push(r.val);
        if(r.left) q.push(r.left);
        if(r.right) q.push(r.right);
    }
    
    return nodes;
}