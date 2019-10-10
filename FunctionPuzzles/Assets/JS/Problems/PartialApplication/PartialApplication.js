const partial = (func, ...args) => {
    if(typeof func !== "function"){
        return () => null;
    }

    return (...rest) => func(...args.concat(rest))
};

module.exports = partial;