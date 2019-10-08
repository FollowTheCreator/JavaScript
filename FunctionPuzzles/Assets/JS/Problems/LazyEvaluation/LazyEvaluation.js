const lazyEvaluation = (callback, ...args) => {
    if(typeof callback !== "function"){
        return () => null;
    }

    return () => callback(...args);
};

module.exports = lazyEvaluation;