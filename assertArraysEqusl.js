
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


const assertArrayEqual= function(array1,array2) {
  if (eqArrays(array1,array2)){
    console.log(`✅ Assert is a-okay: ${array1} == ${array2}`);  
    } else {
    console.log(`❌ Assert is not good: ${array1} !== ${array2}`);
  }
}


