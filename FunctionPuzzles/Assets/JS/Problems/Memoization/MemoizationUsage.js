const memo = require("./Memoization.js");

const sum = (a, b) => a + b;
let memoized = memo(sum);

console.log(memoized(1, 2));
console.log(memoized(1, 2));
console.log(memoized(1, 3));
console.log(memoized(1, 4));
console.log(memoized(1, 3));