// Level 10: The Adult Filter

// Write a function called adultNames that takes an array of user objects, where each object has a name and an age. Return an array of the names of users who are 18 or older, in their original order.

// output
// const users = [
//   { name: "Asha", age: 17 },
//   { name: "Ravi", age: 18 },
//   { name: "Meera", age: 25 },
//   { name: "Dev", age: 12 },
// ];

// console.log(adultNames(users));  // ["Ravi", "Meera"]
// console.log(adultNames([]));     // []

const users = [
  { name: "Asha", age: 17 },
  { name: "Ravi", age: 18 },
  { name: "Meera", age: 25 },
  { name: "Dev", age: 12 },
];

const adultNames = (arr) => {
  return arr?.filter((item) => item.age >= 18)?.map((item) => item?.name);
};

const adultNames2 = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      newArr.push(arr[i].name);
    }
  }
  return newArr;
};

console.log(adultNames2(users)); // ["Ravi", "Meera"]
console.log(adultNames([])); // []
