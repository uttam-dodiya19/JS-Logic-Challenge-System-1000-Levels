// Level 8: The Shared Jar

// Write a function called makeCounter that takes no arguments and returns an object with three methods:

// increment() adds 1 to the count
// decrement() subtracts 1 from the count
// getValue() returns the current count

// The count starts at 0. It should be kept private, so the only way to change it is through these methods.

// output
// const counter = makeCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getValue());  // 2

// const other = makeCounter();
// other.increment();
// console.log(other.getValue());    // 1
// console.log(counter.getValue());  // 2 (each counter has its own memory)

// output

function makeCounter() {
  let num = 0;
  return {
    increment: function () {
      return num++;
    },
    decrement: function () {
      return num--;
    },
    getValue: function () {
      return num;
    },
  };
}

const counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getValue()); // 2

const other = makeCounter();
other.increment();
console.log(other.getValue()); // 1
console.log(counter.getValue()); // 2 (each counter has its own memory)
