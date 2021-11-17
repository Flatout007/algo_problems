/*
// 1290. Convert Binary Number in a Linked List to Integer[Easy]
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let binaryDigits = getBinaryNum(head);
    
    // covert binary into number
    return binaryDigits.reduce((acc, ele) => acc << 1 | ele);
};

var getBinaryNum = (head) => {
    let h = head;
    let nums = [];
    
    while(h) {
        nums.push(h.val);
    h = h.next    
    }
    
    return nums;
}