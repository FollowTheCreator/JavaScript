const map = (array, callback) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i]));
    }

    return result;
}

const array = [1, 2, 3, 4, 5];
console.log(map(array, (item) => item * 2));