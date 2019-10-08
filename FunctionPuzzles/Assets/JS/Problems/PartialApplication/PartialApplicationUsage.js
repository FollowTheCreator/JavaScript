const partial = require("./PartialApplication.js");
const multiply = (...args) => args.reduce((result, current) => result * current);

const double = partial(multiply, 2);
let result = double(4);
console.log(result);

const doubleTriple = partial(multiply, 2, 3);
result = doubleTriple(4);
console.log(result);

result = doubleTriple(4, 10);
console.log(result);