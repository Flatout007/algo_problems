/**
 @description @namespace {
    217. Contains Duplicate[Easy]

    Given an integer array nums, return true if any value appears 
    at least twice in the array, and return false if every element is distinct.
 }
@example {
    Input: nums = [1,2,3,1]
    Output: true
}
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /**
    @algorithm {
    1.SET a duplicate checker array filled with n false values;
    
    2.TRAVERSE nums;
    
    2.CHECK & Evaluate 1 statement while traversing!
      IF curr nums[i] is true in duplicate checker array;
      RETURN true because its a duplicate;
      ELSE set duplicate checker of curr nums[i] to true; 
    }
    */

  let dupCheckr = new Array(nums.length + 1).fill(false);

  for (let i = 0; i < nums.length; i++) {
    if (dupCheckr[nums[i]] === true) {
      return true;
    }

    dupCheckr[nums[i]] = true;
  }

  return false;
};
