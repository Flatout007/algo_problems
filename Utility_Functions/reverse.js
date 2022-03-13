// A function that takes an integer array and reverses the values in place.
// O(n) time, with n being the size of the input arr
// O(1) space, only the input arr is modifed, no extra space is used
function reverse(arr) { 
    //  let memloc1 = 0;      
    //  let memloc2 = arr.length - 1;
    //  let middle = Math.floor(arr.length/2);

    // Go to the middle of arr using two pointers ```start``` & ```end``` swapping their values
    // increasing ```start``` & decreasing ```end``` every iteration until middle is reached by a pointer.
     
    //  while(memloc1 !== middle || memloc2 !== middle) {
       // let temp = arr[memloc2];
       // arr[memloc2] = arr[memloc1];
       // arr[memloc1] = temp;
       // memloc1++; memloc2--;  
    //  }
      for (let i = 0; i<arr.length/2; i++) {
        let temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
      }
   
     return arr;
   }
   
   // test
   reverse([1, 2, 3, 4, 5]); // [5, 4, 3, 2]
   