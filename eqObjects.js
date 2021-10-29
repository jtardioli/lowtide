const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
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

// const eqObjects = function(object1, object2) {
//   for (let key in object1) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return Object.keys(object1).length === Object.keys(object2).length;
// };

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    }
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

const test1 = eqObjects({ a: { z: 1, g: {a:1, b:2, c:{a:1}} }, b: 2 }, { a: { z: 1, g: {a:1, b:2, c:{a:1}} }, b: 2 }); // => true
const test2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
const test3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
console.log(test1);
console.log(test2);
console.log(test3);

// // Test 1
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false);

// // Test 2

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
