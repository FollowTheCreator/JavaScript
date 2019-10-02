function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } 
        else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

const sum = (a, b, c) => a + b + c;

let curriedSum = curry(sum);

const x = curriedSum(1)(4, 5);
console.log(x);