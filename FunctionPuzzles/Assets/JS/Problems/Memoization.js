const memo = (callback) => {
    const cache = new WeakMap();

    return (...args) => {
        if(callback in cache){
            return {source: "cache", result: cache[callback]};
        }
        
        cache[callback] = callback(...args);
        return {source: "calculated", result: cache[callback]};
    }
}

const sum = (a, b) => a + b;
const memoized = memo(sum);

console.log(memoized(1, 2).source);
console.log(memoized(1, 2).source);