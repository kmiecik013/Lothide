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
const assetArrayEqual= function(array1,array2) {
  if (eqArrays(array1, array2) === true){
  return "Pass✅ " ; 
  }else {
    return "Fail ❌ ";
  }
}
const without = function(array, itemsToRemove) {
  let newArray = [];
  // iterate over the given array
  for (let i = 0; i < array.length; i++) {
    // iterate over the itemstoRemove array
    for (let x = 0; x < itemsToRemove.length; x++) {
      // if the element in the given array is equal to the element in the itemsToRemove array then break from the loop
      if (array[i] === itemsToRemove[x]) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(array[i]);
        // Test to see what has been pushed for each test
        // console.log(newArray);
      }
    }
  }
  return newArray;
};

