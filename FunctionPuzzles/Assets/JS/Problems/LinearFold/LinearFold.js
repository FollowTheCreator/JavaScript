const fold = (array = [], callback = (result, current, index) => current, initialValue) => {
    let result = initialValue || 0;

    for(let i = 0; i < array.length; i++){
        result = callback(result, array[i], i);
    }

    return result;
};

module.exports = fold;