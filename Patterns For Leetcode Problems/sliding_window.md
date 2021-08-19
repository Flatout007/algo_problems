Sliding Window

Just an `if statement for subsets while looping` to avoid nested loops i.e 
```ruby  
      unless endOfWindow is >= subset.length - 1; dont slide the window
```
Sliding the window is just `incrementing the startOfWindow` which starts at 0.

Sometimes, the size of the sliding window is not fixed i.e `subset.length`. In that case, expand or shrink the window based on the problem constraints.
 