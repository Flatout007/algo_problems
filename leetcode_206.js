/*
// 206. Reverse Linked List[Easy]
Given the head of a singly linked list, reverse the list, and 
return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
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
 var reverseList = function(head) {
    if(size(head) <= 1) return head;
    let hash = new Map(); 
    let s = size(head); 
    const h = head;
    
     // build from descending order
      for(let i = s; i>0; i--) {
          hash.set(i-1, head.val);
          head = head.next;
      }
    
      return putBackList(hash, s);
};

var size = function(head) {
    // get size
    let count = 0;
    
    while(head) {
        count += 1;
        head = head.next;
    }
    
    return count;
}; 

var putBackList = function(hash, s) {
    // put list back together
    let head = new ListNode(hash.get(0)); 
    const h = head;
    
    for(let i = 1; i<s; i++) {
        head.next = new ListNode(hash.get(i), hash.get(i+1) ? new ListNode(hash.get(i+1)) : null);
        head = head.next;
    }
    
    return h;
}