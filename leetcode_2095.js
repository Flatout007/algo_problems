/*
// 2095. Delete the Middle Node of a Linked List[Medium]
You are given the head of a linked list.
Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n 
is the ⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, 
respectively.
 
Example 1:
Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]

Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
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
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    if(size(head) <= 1) {
        head = null;
        return head;
    }
    
    let h = head;
    let temp = findMidNode(h);
    let nodeBeforeMid = findNodeBeforeMid(h);
    
    nodeBeforeMid.next = null;
    nodeBeforeMid.next = temp.next;
    
    return h;
};

var size = function(head) {
    let h = head;
    let count = 0;
    
    while(h) {
        count++;
    h = h.next    
    }
    
    return count;
}

var findNodeBeforeMid = function(head) {
    let s = Math.floor(size(head) / 2);
    let h = head;
    
    for(let i = 0; i<s-1; i++) {
        h = h.next;
    }
    
    return h;
}

var findMidNode = function(head) {
    let s = Math.floor(size(head) / 2);
    let h = head;
    
    for(let i = 0; i<s; i++) {
        h = h.next;
    }
    
    return h;
}