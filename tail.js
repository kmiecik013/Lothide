const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed'  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const newArray = array.splice(1);
  return newArray;
};
const result = tail([10, 20, 30, 59]);
assertEqual(result.lenght, 4);
assertEqual(result[0], 10);
assertEqual(result[1], 30);
assertEqual(result[2], 50);

