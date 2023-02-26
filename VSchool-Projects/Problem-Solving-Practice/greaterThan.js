//Function that takes an array of numbers and returns the largest (without using `Math.max()`)

function largest(arr) {
    let largestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    return largestNum;
  }
  
  console.log(largest([6, 13, 250, 3, 500, 4, 7]));