const filter = require("./Filter.js");
const linearFold = require("./LinearFold.js");

const sum = (numbers) => linearFold(numbers, (result, currentValue, index) => result + currentValue, 0);
const averageOfEvenNumbers = (array) => {
    const evenNumbers = filter(array, (item) => item % 2 == 0);
    return sum(evenNumbers) / evenNumbers.length;
}

const array = [1,23,2,6,12, 0];
console.log(averageOfEvenNumbers(array));