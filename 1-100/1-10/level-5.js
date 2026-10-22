// Level 5: The Vowel Counter

// Write a function called countVowels that takes a string and returns how many vowels it contains. Count a, e, i, o, and u, whether they’re uppercase or lowercase.

// output
// console.log(countVowels("hello"));        // 2
// console.log(countVowels("JAVASCRIPT"));   // 3
// console.log(countVowels("rhythm"));       // 0

function countVowels(str) {
  const strArr = str.toLowerCase().split("");
  let count = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(strArr[i])) {
      count += 1;
    }
  }

  return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("JAVASCRIPT")); // 3
console.log(countVowels("rhythm")); // 0
