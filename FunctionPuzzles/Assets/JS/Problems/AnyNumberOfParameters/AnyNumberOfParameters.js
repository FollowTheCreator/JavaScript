const multiply = (...args) => {
    if(args.length == 0){
        return 0;
    }

    return args.reduce((result, current) => result * current); 
};

module.exports = multiply;