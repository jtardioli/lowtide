const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');

assertArrayEqual(middle([]), [], true);
assertArrayEqual(middle([1]), [], true);
assertArrayEqual(middle([1, 2]), [], true);
assertArrayEqual(middle([1, 2]), ["asdf"], false);
assertArrayEqual(middle([1, 2, 3]), [2], true);
assertArrayEqual(middle([1, 2, 3, 5]), [2, 3], true);
assertArrayEqual(middle([1, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2]), [8], true);
