const lazyEvaluation = require("./LazyEvaluation.js");

const sum = lazyEvaluation((a, b) => a + b, 10, 5);
console.log(sum());