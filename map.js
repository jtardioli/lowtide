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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArrayEqual(results1, ["g", "c", "t", "m", "t"], true);
assertArrayEqual(results1, ["g", "t", "m", "t"], false);
const results2 = map(words, (word) => word.length);
assertArrayEqual(results2, [6, 7, 2, 5, 3], true);
