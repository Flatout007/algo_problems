/** 
@description {
    83. Remove Duplicates from Sorted List[Easy]

Given the head of a sorted linked list, delete all duplicates such that 
each element appears only once. Return the linked list sorted as well.
}
@example 1:
Input: head = [1,1,2]
Output: [1,2]
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
 var deleteDuplicates = function(head) {
    if(size(head) <= 1) return head; 
    const vals = listVals(head); // [1,1,2]
    const set = new Set(vals); // [1,2]
    const arr = Array.from(set); // [1,2]
    
    return toList(arr.sort((a, b) => { // [1,2]
                    if(a > b) {
                        return 1;
                    } else if(a < b) {
                        return - 1;
                    } else return 0;
                   })
            );
};

var size = function(head) {
    let count = 0;
    
    while(head) {
        count += 1;
        head = head.next;
    }
    
    return count;
};

var listVals = function(head) { 
    let arr = []; // [1,1,2]
    
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    return arr;
};

var toList = function(arr) { // {1 -> 2 -> null}
    let head = new ListNode(arr[0]);
    const h = head;
    
    for(let i = 1; i<arr.length; i++) {
        head.next = new ListNode(arr[i], arr[i+1] ? arr[i+1] : null);
        head = head.next;
    }
    
    return h;
};