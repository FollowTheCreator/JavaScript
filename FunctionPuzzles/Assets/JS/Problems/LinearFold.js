const fold = (array, callback, initialValue) => {
    let result = initialValue;

    for(let i = 0; i < array.length; i++){
        result = callback(result, array[i], i);
    }

    return result;
};

const sum = array => fold(array, (result, currentValue, index) => result + currentValue, 0);
const array = [1, 2, 3, 4, 5];

console.log(sum(array));