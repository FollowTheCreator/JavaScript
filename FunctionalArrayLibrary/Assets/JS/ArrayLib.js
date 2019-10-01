const ArrayLibChain = require("./ArrayLibChain.js");

const ArrayLib = {
    chain(array){
        return new ArrayLibChain(array);
    },
    take(array, n){
        let answer = [];
        for(let i = 0; i < n && i < array.length; i++){
            answer.push(array[i]);
        }

        return answer;
    },
    skip(array, n){
        let answer = [];
        if(n < 0){
            n = 0;
        }

        for(let i = n; i < array.length; i++){
            answer.push(array[i]);
        }

        return answer;
    },
    map(array, func){
        let answer = [];

        for(let i = 0; i < array.length; i++){
            answer.push(func(array[i]));
        }

        return answer;
    },
    reduce(array, func, initial = 0){
        let answer = initial;

        for(let i = 0; i < array.length; i++){
            answer = func(answer, array[i]);
        }

        return answer;
    },
    filter(array, func){
        let answer = [];

        for(let i = 0; i < array.length; i++){
            if(func(array[i])){
                answer.push(array[i]);
            }
        }

        return answer;
    },
    foreach(array, func){
        for(let i = 0; i < array.length; i++){
            func(array[i]);
        }
    }
};

module.exports = ArrayLib;