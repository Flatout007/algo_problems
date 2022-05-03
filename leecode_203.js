/**
 @description @namespace {
    203. Remove Linked List Elements[Easy]
Given the head of a linked list and an integer val, remove all the nodes 
of the linked list that has Node.val == val, and return the new head.
}

@example {
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]
}
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(size(head) === 1 && head.val === val) return null;
    if(size(head) <= 1) return head;
    let arr = []; // [1,2,3,4,5]
    let s = size(head); 
    
    for(let i = 0; i<s; i++) {
	 if(head.val !== val) {
		arr.push(head.val);
     } 
        head = head.next;
    }
    if(!arr.length) return null;
    
    let h = new ListNode(arr.shift());
        const h1 = h;
    if(arr.length) {
        for(let i = 0; i<arr.length; i++) {
        if(arr[i]) {    
            h.next = new ListNode(arr[i], arr[i+1] ? new ListNode(arr[i+1]) : null)
            h = h.next;
        }
       }
   } 
return h1;
};
 
var size = function(head) {
	let count = 0;
	while(head) {
		count += 1;
		head = head.next;
    }
return count;
}



