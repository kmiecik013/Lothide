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


//const ab = { a: "1", b: "2" };
//const ba = { a: "1", b: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
; // => false


const eqObjects = function(object1, object2){
  const newObject1 = Object.keys(object1);
  const newObject2 = Object.keys(object2);
  if (newObject1.length !== newObject2.length) {
    return false
  } 
  for (const key in object1){
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) { 
    return false;
      }   
} else if (object1[key] !== object2[key]) {
  return false;
}
}
return true;
};
 


const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log("array test-> ", arr1, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in object1) {
    for (const j in object2) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[j])) {
        if (eqArrays(arr1[i], arr2[j]) === false) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  return true;