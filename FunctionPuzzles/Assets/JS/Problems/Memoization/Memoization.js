const memo = (func) => {
    const cache = new WeakMap();

    return (...args) => {
        if(!func){
            return null;
        }

        if(args in cache){
            const result = cache[args];
            console.log("cache");
            return result;
        }
        
        cache[args] = func(...args);
        const result = cache[args]
        console.log("calculated");
        return result;
    }
}

module.exports = memo;