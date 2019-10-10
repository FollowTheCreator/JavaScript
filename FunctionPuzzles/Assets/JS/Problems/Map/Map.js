const map = (array = [], callback = (item) => item) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i]));
    }

    return result;
}

module.exports = map;