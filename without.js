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
const without = function(source, removal) {
  let removedArray = []
  let testItem = 0;
  for(let i= 0; i <source.length; i++) {
    if (!removal.includes(source[i])){
      removedArray.push(source[i])
    }

      }
    }

