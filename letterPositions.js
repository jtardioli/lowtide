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

const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split(" ").join("").split("");
  for (let index in sentenceArray) {
    if (!results[sentenceArray[index]]) {
      results[sentenceArray[index]] = [];
    }
    results[sentenceArray[index]].push(Number(index));
  }

  return results;
};

assertArrayEqual(letterPositions("hello")["h"], [0], true);
assertArrayEqual(letterPositions("hello")["e"], [1], true);
assertArrayEqual(letterPositions("hello")["l"], [2, 3], true);
assertArrayEqual(letterPositions("hello")["o"], [4], true);
