const without = function(source, itemsToRemove) {
  let newArray = [];
  // Iterating through each element in source array
  for (let i = 0; i < source.length; i++) {
    // Indicates if element should be removed
    let addItem = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      // If the element from source array also exists in itemsToRemove array
      if (source[i] === itemsToRemove[j]) {
        // Indicates that the element should not be added to new array and breaks the loop
        addItem = false;
        break;
      }
    }
    // Pushes the element to new array if meets the condition
    if (addItem === true) {
      newArray.push(source[i]);
    }
  }
  console.log(newArray);
};


module.exports = without;