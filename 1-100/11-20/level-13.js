// Level 13: The Run Counter

// Write a function called compress that takes a string and returns a shorter version. Each run of the same character is replaced by that character followed by how many times it appears in a row.

// output
// console.log(compress("aaabbc"));    // "a3b2c1"
// console.log(compress("zzzz"));      // "z4"
// console.log(compress("abc"));       // "a1b1c1"
// console.log(compress(""));          // ""

function compress(str) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    // Case 1: the run continues
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // Case 2: the run ended
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

// output
console.log(compress("aaabbcaa")); // "a3b2c1"
console.log(compress("zzzz")); // "z4"
console.log(compress("abc")); // "a1b1c1"
console.log(compress("")); // ""
