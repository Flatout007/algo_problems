
// 1. Find the string with the max length in an array.
function longestStr(arr) {
  let max = arr[0];

  for(let i = 0; i<arr.length; i++) {
      if(max.length < arr[i].length) {
          max = arr[i];
      }
  }

  return max;
}

// 2. Find all max strings of same length. If there's only one max string, 
// return that max string, else return an array of all max strings of same length.
function longest2(arr) {
    let max = longestStr(arr);
    let myArr = [];

    for(let i = 0; i<arr.length; i++) {
        if(max.length === arr[i].length) myArr.push(arr[i]);
    }

    return myArr.length > 1 ? myArr : max;
} 

// 3. fetch an api and return its data.
//  Do this two ways. 
const api1 = function() {
    return fetch('https://dog.ceo/api/breeds/image/random').then((res) => res).then((data) => data.json());
}

async function api2() {
    let endpoint = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await endpoint.json();

    return data;
}

/* technical question(s) asked:
  // 1. give me three ways to manipulate state with react.
*/
