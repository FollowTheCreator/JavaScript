const filter = (array, callback) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result.push(array[i]);
        }
    }

    return result;
}

const array = [1, 2, 3, 4, 5];
console.log(filter(array, (item) => item > 3));