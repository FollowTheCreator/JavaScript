const fold = (array, callback, initialValue) => {
    let result = initialValue;

    for(let i = 0; i < array.length; i++){
        result = callback(result, array[i], i);
    }

    return result;
};

module.exports = fold;