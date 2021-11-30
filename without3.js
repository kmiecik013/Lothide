const without = function(source, itemsToRemove) {
  let freshArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j= 0; j < itemsToRemove.length; j++) {
      if (!source[i] === itemsToRemove){
        freshArray.push(source[i])
      } 
    }
    }
    return freshArray;
  }
