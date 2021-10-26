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

const middle = function (array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  const middleIndex = (array.length - 1) / 2;
  if (array.length % 2 === 0) {
    const middleIndex1 = Math.floor(middleIndex);
    const middleIndex2 = Math.ceil(middleIndex);
    middleArray.push(array[middleIndex1], array[middleIndex2]);
  } else {
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};

console.log(middle([1, 2]));

assertArrayEqual(middle([]), [], true);
assertArrayEqual(middle([1]), [], true);
assertArrayEqual(middle([1, 2]), [], true);
assertArrayEqual(middle([1, 2]), ["asdf"], false);
assertArrayEqual(middle([1, 2, 3]), [2], true);
assertArrayEqual(middle([1, 2, 3, 5]), [2, 3], true);
assertArrayEqual(middle([1, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2]), [8], true);
