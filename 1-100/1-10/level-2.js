// Level 2: The Bigger One

// Write a function called larger that takes two numbers and returns whichever one is bigger. If they’re equal, return either one.

// output
// console.log(larger(3, 7));   // 7
// console.log(larger(12, 5));  // 12
// console.log(larger(4, 4));   // 4

function larger(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(larger(3, 7));
console.log(larger(12, 5));
console.log(larger(4, 4));
