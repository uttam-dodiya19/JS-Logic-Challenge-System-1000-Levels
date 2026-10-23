// Level 9: The Repeat Stamp

// Write a function called applyNTimes that takes three arguments:

// fn: a function that takes one number and returns a number
// n: how many times to apply it
// x: the starting number

// It should call fn n times, passing each result into the next call, and return the final result.

// output
// const double = (num) => num * 2;

// console.log(applyNTimes(double, 3, 1));   // 8   (1 → 2 → 4 → 8)
// console.log(applyNTimes(double, 0, 5));   // 5   (no calls, return the start)

// const addTen = (num) => num + 10;
// console.log(applyNTimes(addTen, 4, 0));   // 40

const applyNTimes = (fun, n, x) => {
  if (!n) return x;
  let total = x;

  for (let i = 0; i < n; i++) {
    total = fun(total);
  }
  return total;
};

const double = (num) => num * 2;

console.log(applyNTimes(double, 3, 1)); // 8   (1 → 2 → 4 → 8)
console.log(applyNTimes(double, 0, 5)); // 5   (no calls, return the start)

const addTen = (num) => num + 10;
console.log(applyNTimes(addTen, 4, 0));
