const multiply = (...args) => {
    if(args.length == 0){
        return 0;
    }

    return args.reduce((result, current) => result * current); 
};

console.log(multiply(2, 4, 7));