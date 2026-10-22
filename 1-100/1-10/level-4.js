// Level 4: The Filter

// Write a function called evensOnly that takes an array of numbers and returns a new array containing only the even numbers, in their original order. A number is even if dividing it by 2 leaves no remainder. In JavaScript, that’s n % 2 === 0.

// output
// console.log(evensOnly([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
// console.log(evensOnly([7, 9, 11]));          // []
// console.log(evensOnly([0, -2, 8]));          // [0, -2, 8]

function evensOnly(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(evensOnly([1, 2, 3, 4, 5, 6]));
console.log(evensOnly([7, 9, 11]));
console.log(evensOnly([0, -2, 8]));
