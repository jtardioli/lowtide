const assertArrayEqual = (array1, array2, expected) => {
  const actual = eqArrays(array1, array2);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const without = (source, itemsToRemove) => {
  const filteredArray = source.filter((item, index) => {
    return !itemsToRemove.includes(item);
  });
  return filteredArray;
};

assertArrayEqual(without([1, 2, 3], [1]), [2, 3], true); // => [2, 3]
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true); // => ["1", "2"]
assertArrayEqual(without([1, 2, 3], [1, 2, 3]), [], true); // => ["1", "2"]
assertArrayEqual(without([1, 2, 3], [1, 3]), [69], false); // => ["1", "2"]
let testMod = [1, 2, 3, 4];
assertArrayEqual(without(testMod, [1, 3]), [2, 4], true); // => ["1", "2"]
console.log(testMod);
