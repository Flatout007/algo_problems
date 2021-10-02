function findSpecialArrayProduct(nums) {
    let sum = 0;
    let count = 1;
  
    // problem: sum the the array, if you encounter inner arrays,
    // multiply the depth by the sum of the inner array, 
    // add it to the sum accumulated so far.
  
    for(let i = 0; i<nums.length; i++) { 
        if(typeof nums[i] === 'object') {
             count += 1;
             let haltNums = halt(nums[i]);
             sum += count * myAdd(haltNums);
        } else {
          sum += nums[i];
          count = 1;
        }
    }
  }
  

  function myAdd(nums) {
    let sum = 0;
  
    nums.forEach(ele => sum += ele);
  
    return sum;
  }
  

  function halt(nums) {
    let arr = [];
    let i =0;
  
    while(true) {
      if(typeof nums[i] === 'object') break;
      if(i === nums.length) break;
      arr.push(nums[i]);
      i+=1;
    }
  
    return arr;
  }
  
 // findSpecialArrayProduct([5, 2,[7,-1], 3, [6,[-13,8], 4]]) => 12