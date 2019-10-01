const ArrayLib = require("./ArrayLib.js");

console.log(ArrayLib.take([1, 2, 3, 4], 2));
console.log(ArrayLib.skip([1, 2, 3, 4], 2));
console.log(ArrayLib.map([1, 2, 3], a => a * 2));
console.log(ArrayLib.reduce([1, 2, 3, 4, 5], (sum, current) => sum + current, 0));
console.log(ArrayLib.filter([1, 2, 3, 4, 5], item => item > 3));
ArrayLib.foreach([1, 2, 3], item => console.log(item));

console.log(ArrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9]).take(8).skip(1).map(a => a * 2).filter(item => item > 5).reduce((sum, current) => sum + current, 0).value());
ArrayLib.chain([1, 2, 3, 4, 5, 6, 7, 8, 9]).take(8).skip(1).map(a => a * 2).filter(item => item > 5).foreach(item => console.log(item));