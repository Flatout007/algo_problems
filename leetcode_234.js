/*
// 234. Palindrome Linked List[Easy]
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let hash1 = new Map();
    let hash2 = new Map();
    let s = size(head);
    let h1 = head;
    let h2 = head;
    
    for(let i = s; i>0; i--) {
        hash1.set(i-1, h1.val);
        h1 = h1.next;
    }
    
    for(let i = 0; i<s; i++) {
        hash2.set(i, h2.val);
        h2 = h2.next;
    }
    
    for(let i = 0; i<s; i++) {
        if(hash1.get(i) !== hash2.get(i)) {
            return false;
        }
    }
   
    return true;
};


var size = function(head) {
    let count = 0;
    
    while(head) {
        count += 1;
        head = head.next;
    }
    
    return count;
}

