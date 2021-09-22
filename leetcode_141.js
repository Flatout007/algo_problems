/*
// 141. Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be 
reached again by continuously following the next pointer. Internally, pos is used to denote 
the index of the node that tail's next pointer is connected to. Note that pos is not passed as 
a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {  
    let arr = [];
    let l1 = head;
    
    // the trick is to iterate through all nodes,
    // keeping track of if we have seen this node before.
    
    while(l1) {
        if(arr.includes(l1.next)) return true;
        arr.push(l1.next);
        l1 = l1.next;
    }
    
    return false;
};