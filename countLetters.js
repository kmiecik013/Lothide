const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed'  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

const countLetters = function(str) {
  const finalCount = {};
  for (const letters of str) {
    if (letters !== " ");
    if (finalCount[letters]){
      finalCount[letters] += 1
    } else { 
      finalCount[letters] = 1
    }
  } 

  return finalCount
}
console.log(countLetters("djweiofhoewhfwhfo"))