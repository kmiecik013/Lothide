const without = function(array, value) {
  let removeArray = [];
  array.forEach(function(element) {
    if (!value.includes(element)) {
      removeArray.push(element);
    }
  });
  return newArray;
};