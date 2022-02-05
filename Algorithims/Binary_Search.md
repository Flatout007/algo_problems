# Binary Search

:heavy_check_mark: Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.

:heavy_check_mark: The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n)
hence, <b> N.B: The array must be sorted first to apply binary search</b>.

_Binary Search pusedocode_:
```rb
binary search(arr, start, n, x)
  if n is in bounds meaning "if n >= x":

	find middle cell of array: "mid = 1 + Math->floor((n-1) / 2)"
        
        if mid ever equals x:  return mid

        if current mid is smaller than x: binary search(arr, l, mid - 1, x)

        else if current mid is greater than x: binary search(arr, mid + 1, r, x)
   
   else I reached the end, so x is not found therefore, return -1;
```