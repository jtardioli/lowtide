const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const eqArrays = (array1, array2) => {
//   if (array1.length === array2.length) {
//     for (let i = 0; i <= array1.length; i++) {
//       if (!(array1[i] === array2[i])) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

const eqArrays = (array1, array2) => {
  // check if arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i in array1) {
    // check if index i is an array
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      // if it is loop through it, if it returns false then return false for enrtire function
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      // check if one is an array but not both
      if ((Array.isArray(array1[i]) === false || Array.isArray(array2[i]) === false) && !(Array.isArray(array1[i]) === false && Array.isArray(array2[i]) === false)) {
        return false;
      }

      console.log(array1[i], array2[i]);
      // check if index 1 = 2
      if (!array1[i] === array2[i]) {
        return false;
      }
    }
    
  }
  return true;
};

const test1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
const test2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
const test3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
const test4 = eqArrays([[2, 3, [1,2,3]], [4]], [[2, 3, [1,2,3]], 4]); // => false
const test5 = eqArrays([[2, 3, [1,2,3]], [4]], [[2, 3, [1,2,3]], [4]]); // => true
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

// for (let item of array) {
//   if (Array.isArray(item)) {
//     printItems(item);
//   } else {
//     console.log(item);
//   }
// }
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 4, 3], [1, 2, 1]), false);
// assertEqual(eqArrays([1, 2, 1], [1, 1, 2]), false);
// assertEqual(eqArrays([1, 2, 1, 4], [1, 1, 2]), false);
