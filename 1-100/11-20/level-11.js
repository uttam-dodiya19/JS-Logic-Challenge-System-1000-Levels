// Level 11: The Mirror Test

// Write a function called isPalindrome that takes a string and returns true if it’s a palindrome, or false if not. Before comparing, ignore letter case and anything that isn’t a letter or number, so spaces and punctuation don’t count.

// output
// console.log(isPalindrome("racecar"));                     // true
// console.log(isPalindrome("hello"));                       // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome(""));                            // true

const isPalindrome = (str) => {
  const clearStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return clearStr === clearStr.split("").reverse().join("");
};

// output
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("")); // true
