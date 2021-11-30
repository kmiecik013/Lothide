

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

console.log(eqArrays([10, 20, 30, 40,], [10, 20, 30]))// should FAiL = false
console.log(eqArrays([2,8,0],[2,8,0])) //should pass = true
console.log(eqArrays([10,9,8,7,6],[10,9,7,8,6]))//should Fail = false 

const assetArrayEqual= function(array1,array2) {
  if (eqArrays(array1, array2) === true){
  console.log("Pass✅ ") ; 
  }else {
    console.log("Fail ❌ ");
  }

}

const letterPositions = function(sentence){
  //set up function (letterPositios)
  const newList ={};
  //set up object to place keys and vallues in 
  for (let i = 0; i < sentence.length; i++) {
    //loop throught the string parameter  (sentence)
    if (sentence[i] !== " ") {
      //make conditon that perform on indexes not being " "
      if (newList[sentence[i]]) {
        //condition when string index is true and place it as kye (i think this is what it means)
        newList[sentence[i]].push(i)
        //if index is true, push in the index number into an array 
      } else {
        newList[sentence[i]]=[i];
      }
    }
  }
  return newList;
}
assertArraysEqual(letterPositions("hello").e,[1]);
