
/*
// Product Sum Of Special Arrays

Find the product sum of all special arrays. A special array is an array that contain
other arrays. The product sum is found by adding all elements; elements that are arrays
are to be summed, then multiplied by its level of depth.

Example:
Input: nums = [5, 2 [-7, 1], 3, [6, [-13, 8], 4]] 
Output: 12
Calculation: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 * 8) + 4) = 12
*/


function findSpecialArrayProduct(nums) {
  let prod;
  let count = 2;
  let arr = [];
  let sum = 0;
  let prev = 0;
  
  // add elements that are not arrays right off the back.
  nums.forEach((nums) => {
    if(typeof nums !== 'object') prev += nums;
  });

  for(let i = 0; i<nums.length; i++) {
    count = 2;
    
    while(typeof nums[i] === 'object') {     
      // add each array and multiply by level of depth.
      prod = form(nums[i].filter(ele => typeof ele !== 'object'), count);
      count += 1;
      nums.splice(i, 1, ...nums[i]); // remove array then, spread in elements.
      arr.push(prod);
      i+=1;
    }
  }
  
  // sum elements in array and multiply by 2, because 2 is
  // the default level of depth.
  arr.forEach(ele => sum += ele);

  return prev + (2 * sum);
}

function form(arr, count) {
    let multi;
    let sum = 0;

    multi = count === 2 ? 1 : count;

    arr.forEach(ele => sum += ele);

    return sum * multi;
}


findSpecialArrayProduct([5, 2,[7,-1], 3, [6,[-13,8], 4,[1,4]]])



  