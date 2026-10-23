// Level 7: The Preset Machine

// Write a function called makeMultiplier that takes a number n and returns a new function. That returned function takes a number x and gives back x * n.

// output
// const triple = makeMultiplier(3);
// const tenTimes = makeMultiplier(10);

// console.log(triple(4));    // 12
// console.log(triple(5));    // 15
// console.log(tenTimes(7));  // 70

function makeMultiplier(num1) {
  return function temp(x) {
    return num1 * x;
  };
}

const triple = makeMultiplier(3);
const tenTimes = makeMultiplier(10);

console.log(triple(4)); // 12
console.log(triple(5)); // 15
console.log(tenTimes(7)); // 70
