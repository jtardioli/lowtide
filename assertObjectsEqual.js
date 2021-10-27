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

const eqObjects = function (object1, object2) {
  for (key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return Object.keys(object1).length === Object.keys(object2).length;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// tests
assertObjectsEqual({ bob: "hi", lux: "italy" }, { bob: "hi", lux: "italy" });
assertObjectsEqual({ bob: "hi", lux: "italy" }, { lux: "italy" });
