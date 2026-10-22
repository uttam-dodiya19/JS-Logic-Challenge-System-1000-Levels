// Level 3: The Champion

// Write a function called largestOf that takes an array of numbers and returns the biggest number in it.

// output
// console.log(largestOf([3, 9, 2, 7]));   // 9
// console.log(largestOf([-5, -1, -8]));   // -1
// console.log(largestOf([42]));

function largestOf(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(largestOf([3, 9, 2, 7]));
console.log(largestOf([-5, -1, -8]));
console.log(largestOf([42]));
