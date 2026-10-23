// Level 6: The Tally Board

// Write a function called countChars that takes a string and returns an object where each key is a character and each value is how many times that character appears. Keep the case as it is, so "A" and "a" are different keys. Spaces count as characters too.

// output
// console.log(countChars("hello"));
// // { h: 1, e: 1, l: 2, o: 1 }

// console.log(countChars("Aa b"));
// // { A: 1, a: 1, " ": 1, b: 1 }

function countChars(str) {
  const strArr = str.split("");
  let obj = {};
  for (let i = 0; i < strArr.length; i++) {
    if (!obj[strArr[i]]) {
      obj[strArr[i]] = 0;
    }
    obj[strArr[i]] += 1;
  }
  return obj;
}

console.log(countChars("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(countChars("Aa b"));
// { A: 1, a: 1, " ": 1, b: 1 }
