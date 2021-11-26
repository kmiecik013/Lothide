
const eqArrays = function(array1, array2) {
  //check initially if the lengths are the same
  if (array1.length !== array2.length) {
    return false 
}
  //check if all items exists and are in the same order
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
}
}
return true
}
const assertArraysEqual = function(array1, array2) {
  //use eqArrays function for the array comparisson
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {

  const newArray = [];
for (let item of array) {
 newArray.push(callback(item));
} 
 return newArray;
}
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const result2 = map(words, word => (`${word[0]} hi`));
console.log(result2);
assertArraysEqual(result2, [ 'g hi', 'c hi', 't hi', 'm hi', 't hi' ]);
 
const result3 = map(words, word => (word.length));
console.log(result3);
assertArraysEqual(result3, [ 6, 7, 2, 5, 3 ]);
