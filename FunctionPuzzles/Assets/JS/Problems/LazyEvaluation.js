const lazyEvaluation = (callback, ...args) => () => callback(...args);


const sum = lazyEvaluation((a, b) => a + b, 10, 5);
console.log(sum());