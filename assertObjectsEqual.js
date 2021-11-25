
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
      if (eqObjects(actual, expected)) {
        console.log(`✅ Cool, it Passed: ${inspect(actual)} === ${inspect(expected)}`);
      }else {
        console.log(`❌ Dar, it Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }  
    };

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


const eqObjects = function(object1, object2){
  const newObject1 = Object.keys(object1);
  const newObject2 = Object.keys(object2);
  if (newObject1.length !== newObject2.length) {
    //check if the lenght of number of keys are the same
    return false
  } 

  for (const key in object1){
if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
  //use Array.isArray to check if any of the keys in the objects are arrays
  if (!eqArrays(object1[key], object2[key])) {
    //use eqArrays to check if any arrays in the object are different
      return false 

  }
}else if (object1[key] !== object2[key]) {
  //check if keys in object are the same
      return false 
    
    }

  }
  return true;
}; 


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
    console.log(assertObjectsEqual(cd, dc)); // => true
      
const cd2 = { c: "1", d: ["2", 3, 4] };
    console.log(assertObjectsEqual(cd, cd2)); // => false
      