// Level 12: The Pair Finder

// Write a function called hasPairWithSum that takes an array of numbers and a target number. Return true if any two different positions in the array add up to the target, and false otherwise. The same element can’t be used twice, even if the array has repeated values.

// output
// console.log(hasPairWithSum([2, 7, 11, 15], 9));   // true  (2 + 7)
// console.log(hasPairWithSum([3, 5, 1], 10));       // false
// console.log(hasPairWithSum([4, 4], 8));           // true  (two different 4s)
// console.log(hasPairWithSum([5], 10));             // false (only one element)

function hasPairWithSum(nums, finalNum) {
  for (let i = 0; i < nums?.length; i++) {
    for (let j = i + 1; j < nums?.length; j++) {
      if (nums[i] + nums[j] === finalNum) return true;
    }
  }
  return false;
}

// output
console.log(hasPairWithSum([2, 7, 11, 15], 9)); // true  (2 + 7)
console.log(hasPairWithSum([3, 5, 1], 10)); // false
console.log(hasPairWithSum([4, 4], 8)); // true  (two different 4s)
console.log(hasPairWithSum([5], 10)); // false (only one element)
