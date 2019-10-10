const fold = require("./LinearFold.js");

const sum = array => fold(array, (result, currentValue, index) => result + currentValue, 0);
const array = [1, 2, 3, 4, 5];

console.log(sum(array));