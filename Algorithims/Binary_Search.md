## Pseudo Code

**N.B** _A program that implements binary search to search for a target. if target is found returns index of target else -1._


:heavy_check_mark: Binary Search is a popular searching algorithm used on sorted arrays by repeatedly dividing the search interval in half.


:heavy_check_mark: The idea of binary search is to use the information that the array is sorted and reduce the time complexity from O(n) to O(Log n) hence, <b>The array must be sorted first to apply binary search</b>.

```c
    1.SET left, right pointers on array;

    2.WHILE left & right pointers do not intersect, SET & update temp mid pointer; DO step#3;

    3.CHECK 3 cases, 
     IF mid equals target, RETURN mid since target is found;
     IF mid less than target, SET left to index after mid;
     IF mid greater than target, SET right to index before mid;  
```
## JavaScript

**N.B** _A program that implements binary search to search for a target. if target is found returns index of target else -1._

```js
/**
 * A program that implements binary search to search for a target
 * if target is found returns index of target else -1.
 * 
 * @param {number[]} arr
 * @param {number} target
 * @return {number} 
 * 
 * TIME: O(Log n) n->arr.length
 * SPACE: O(1) 
 */
  var binarySearch = function(arr, target) {
      let left = 0, right = arr.length-1;

      while(left<=right) {
        // equation to update mid based on positions of left & right pointers
        let tmpMid = left + (right - left / 2);

        if(arr[tmpMid] === target) 
            return tmpMid;
        else if(arr[tmpMid] < target) 
            left = tmpMid + 1;
        else right = tmpMid - 1;  
      }

      return -1;
  }
  
```