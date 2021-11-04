/*
// 61. Rotate List
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
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
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = (head, k) => {
    if(!head) return head;
    if(size(head) === 1) return head;  
    let h = head;
    const s = size(head);
  
    while(k--) {
        let tempHead = h;
        let tempTail = findTail(tempHead);
        tempTail.next = tempHead;
        let sec = secondToLast(h, s);
        sec.next = null; 
        h = tempTail;
    }
  
    return h;
  }
  
  var size = (head) => {
    let count = 0;
    let h = head;
  
    while(h) {
      count++;
      h = h.next;
    }
  
    return count;
  }
  
  
  var secondToLast = (head, s) => {
    let h = head;
   
    for(let i = 1; i<s-1; i++) {
      h = h.next;
    }
  
    return h;
  }
  
  
  var findTail = (head) => {
    let h = head;
  
    while(h.next) {
      h = h.next;
    }
  
    return h;
  }
  
  