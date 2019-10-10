const curry = require("./Currying.js");

const sum = (a, b, c) => a + b + c;

let curriedSum = curry(sum);

const x = curriedSum(1)(4, 5);
console.log(x);