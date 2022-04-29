/** 
@description @namespace {
 21. Merge Two Sorted Lists

    Merge two sorted linked lists and return it as a sorted list. 
    The list should be made by splicing together the nodes of the first two lists.

    Example 1:
    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2:
    Input: l1 = [], l2 = []
    Output: []
}
@constructor {
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
}
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let node = new MyListNode(-1);
    let head = node;
    
    if(!l1) {
        return l2;
    } else if(!l2) {
      return l1;
    } else if (!l1 && !l2) return l1;
    
    // the trick is to use a blank node to 
    // cycle through and comparison sort the list.
    while(l1 && l2) {
        if(l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else if(l2.val < l1.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;  
        }
        
        node = node.next;
    }
    
    if(!l1) node.next = l2;
    if(!l2) node.next = l1;

    return head.next;  
};


function MyListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}