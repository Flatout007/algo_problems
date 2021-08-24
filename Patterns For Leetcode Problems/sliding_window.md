Sliding Window

Just an `conditonal statement for subsets while looping` to avoid O(n^2) loops i.e 
```ruby  
      unless the endOfWindow or current value is >= some subset length or a target value; dont slide the window
```
Sliding the window is just `incrementing the startOfWindow` which starts at 0.
always `decrement what slides out the window`.

Sometimes, the size of the sliding window i.e `subset length` is not fixed or there is a target value. 
In that case, expand or shrink the window based on the problem constraints or using a `while loop conditonal` to iterate or do arithmatic on subsets inside a loop.
 