const filter = require("../Filter/Filter.js");
const linearFold = require("../LinearFold/LinearFold.js");

const sum = (numbers) => linearFold(numbers, (result, currentValue, index) => result + currentValue, 0);
const averageOfEvenNumbers = (array = []) => {
    const evenNumbers = filter(array, (item) => item % 2 == 0);
    return sum(evenNumbers) / (evenNumbers.length || 1);
}

module.exports = averageOfEvenNumbers;