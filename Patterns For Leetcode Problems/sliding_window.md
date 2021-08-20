Sliding Window

Just an `if statement for subsets while looping` to avoid nested loops i.e 
```ruby  
      unless endOfWindow is >= subset.length - 1; dont slide the window
```
Sliding the window is just `incrementing the startOfWindow` which starts at 0.
`decrement what slides out the window`

Sometimes, the size of the sliding window i.e `subset.length` is not fixed. In that case, expand or shrink the window based on the problem constraints.
 