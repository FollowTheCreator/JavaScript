const filter = (array = [], callback = (item) => item) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result.push(array[i]);
        }
    }

    return result;
}

module.exports = filter;