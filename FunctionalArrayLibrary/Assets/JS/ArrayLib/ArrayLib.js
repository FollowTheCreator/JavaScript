const ArrayLibChain = require("./ArrayLibChain.js");

const ArrayLib = {
    cache:{},
    sum(array){
        if(array in this.cache){
            return {source: "cache", data: this.cache[array]};
        }
        this.cache[array] = this.reduce(array, (sum, current) => sum + current);
        return {source: "calculated", data: this.cache[array]};
    },
    chain(array){
        return new ArrayLibChain(array);
    },
    take(array = [], n = array.length){
        let result = [];
        for(let i = 0; i < n && i < array.length; i++){
            result.push(array[i]);
        }

        return result;
    },
    skip(array = [], n = 0){
        let result = [];
        if(n < 0){
            n = 0;
        }

        for(let i = n; i < array.length; i++){
            result.push(array[i]);
        }

        return result;
    },
    map(array = [], func = (item) => item){
        let result = [];

        this.foreach(array, item => result.push(func(item)));

        return result;
    },
    reduce(array = [], func = (result, current) => current, initial = 0){
        let result = initial;

        this.foreach(array, item => result = func(result, item));

        return result;
    },
    filter(array = [], func = (item) => item){
        let result = [];
        
        this.foreach(array, item => {
            if(func(item)){
                result.push(item);
            }
        });

        return result;
    },
    foreach(array = [], func = (item) => item){
        for(let i = 0; i < array.length; i++){
            func(array[i]);
        }
    }
};

module.exports = ArrayLib;