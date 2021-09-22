/*
// 155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 
Example 1:
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output:
[null,null,null,null,-3,null,0,-2]
Explanation:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length > 0) {
        this.stack[this.stack.length] = val;
    } else this.stack[0] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length >= 1) {
        this.stack.splice(this.stack.length - 1, 1);
    } else this.stack.splice(0, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.stack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */