const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i <= array1.length; i++) {
      if (!(array1[i] === array2[i])) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArrayEqual = (array1, array2, expected) => {
  const actual = eqArrays(array1, array2);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = (array) => {
  let flattenedArray = [];
  const flattenInner = (array) => {
    // Loop through every item of the array
    array.forEach((item, index) => {
      // if the item is an array recurse with that array
      if (Array.isArray(item)) {
        return flattenInner(item);
      } else {
        // otherwise push the item into the new array
        flattenedArray.push(item);
        // console.log(index, array.length - 1, item);
        // console.log(flattenedArray);
        // once the end of the array is reached return the final array
        if (index === array.length - 1) {
          //console.log("right before", flattenedArray);
          return flattenedArray;
        }
      }
    });
  };
  flattenInner(array);
  return flattenedArray;
};

// return within for each
// proper way to escape a function
// pure functions
// closures

//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6]]));
