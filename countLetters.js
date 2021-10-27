const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let result = {};
  const sentenceArray = sentence.split(" ").join("").split("");
  for (item of sentenceArray) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  console.log(result);
  return result;
};

assertEqual(countLetters("aa bbb cccc ddddd")["a"], 2);
assertEqual(countLetters("aa bbb cccc ddddd")["b"], 3);
assertEqual(countLetters("aa bbb cccc ddddd")["c"], 4);
assertEqual(countLetters("aa bbb cccc ddddd")["d"], 5);
