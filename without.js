const assertArraysEqual = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
    return 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`)
      return
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
}

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}



const without = function(source, itemsToRemove) {
  let newArray = []
  // Iterating through each element in source array
  for (let i = 0; i < source.length; i++) {
    // Indicates if element should be removed
    let addItem = true
    for(let j = 0; j < itemsToRemove.length; j++) {
      // If the element from source array also exists in itemsToRemove array
      if(source[i] === itemsToRemove[j]) {
        // Indicates that the element should not be added to new array and breaks the loop
        addItem = false
        break
      }
    }
    // Pushes the element to new array if meets the condition
    if (addItem === true) {
      newArray.push(source[i])
    }
  }
  console.log(newArray);
}

without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])
without([1, 2, true, "4", 'hi', false], [true, 'hi'])