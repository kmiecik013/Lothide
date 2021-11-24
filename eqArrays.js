const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed'  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

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
};

assertEqual(eqArrays([10, 20, 30, 40,], [10, 20, 30]))// should FAiL = false
assertEqual(eqArrays([2,8,0],[2,8,9])) //should pass = true
asserEqual(eqArrays([10,9,8,7,6],[10,9,7,8,6])//should Fail = false 