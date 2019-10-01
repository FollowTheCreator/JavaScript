module.exports = class ArrayLibChain{
    constructor(array){
        this.array = array;
        this.cache = {};
    };

    sum(){
        if(this.array in this.cache){
            return {source: "cache", data: this.cache[this.array]};
        }
        this.cache[this.array] = this.reduce((sum, current) => sum + current).value();
        return {source: "calculated", data: this.cache[this.array]};
    };

    take(n){
        let answer = [];

        for(let i = 0; i < n && i < this.array.length; i++){
            answer.push(this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    skip(n){
        let answer = [];
        if(n < 0){
            n = 0;
        }

        for(let i = n; i < this.array.length; i++){
            answer.push(this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    map(func){
        let answer = [];

        for(let i = 0; i < this.array.length; i++){
            answer.push(func(this.array[i]));
        }

        return new ArrayLibChain(answer);
    };

    reduce(func, initial = 0){
        let answer = initial;

        for(let i = 0; i < this.array.length; i++){
            answer = func(answer, this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    filter(func){
        let answer = [];

        for(let i = 0; i < this.array.length; i++){
            if(func(this.array[i])){
                answer.push(this.array[i]);
            }
        }

        return new ArrayLibChain(answer);
    };

    foreach(func){
        for(let i = 0; i < this.array.length; i++){
            func(this.array[i]);
        }
    };

    value(){
        return this.array;
    };
}