/**
@description
    @param {
        * 703. Kth Largest Element in a Stream[Easy]
        * 
        * Design a class to find the kth largest element in a stream. Note that it is the kth largest 
        * element in the sorted order, not the kth distinct element.
        * 
        * Implement KthLargest class:
        * 
        * KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers 
        * nums.
        * 
        * int add(int val) Appends the integer val to the stream and returns the element representing the kth 
        * largest element in the stream.
    }
@example {
    Example 1:

    Input:
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

    Output:
    [null, 4, 5, 5, 8, 8]

    Explanation:
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8
    }
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.splice(fun(this.nums, val), 0, val);
  return this.nums[this.nums.length - this.k];
};

var fun = function (arr, val) {
  // binary search;
  arr = arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = left + right - left / 2;

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else right = mid - 1;
  }

  return left;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
