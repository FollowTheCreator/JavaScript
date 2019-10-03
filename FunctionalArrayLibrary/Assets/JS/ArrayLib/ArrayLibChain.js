module.exports = class ArrayLibChain{
    constructor(array = []){
        this.array = array;
        this.cache = {};
    };

    sum(){
        if(this.array in this.cache){
            return {source: "cache", data: this.cache[this.array]};
        }
        this.cache[this.array] = this.reduce((sum, current) => sum + current);
        return {source: "calculated", data: this.cache[this.array]};
    };

    take(n = this.array.length){
        let answer = [];

        for(let i = 0; i < n && i < this.array.length; i++){
            answer.push(this.array[i]);
        }
        this.array = answer;

        return this;
    };

    skip(n = 0){
        let answer = [];
        if(n < 0){
            n = 0;
        }

        for(let i = n; i < this.array.length; i++){
            answer.push(this.array[i]);
        }
        this.array = answer;
        
        return this;
    };

    map(func = (item) => item){
        let answer = [];

        this.foreach(item => answer.push(func(item)));

        this.array = answer;
        
        return this;
    };

    reduce(func = (result, current) => current, initial = 0){
        let answer = initial;

        this.foreach(item => answer = func(answer, item));
        
        return answer;
    };

    filter(func = (item) => item){
        let answer = [];

        this.foreach(item => {
            if(func(item)){
                answer.push(item);
            }
        });
        this.array = answer;
        
        return this;
    };

    foreach(func = (item) => item){
        for(let i = 0; i < this.array.length; i++){
            func(this.array[i]);
        }
    };

    value(){
        return this.array;
    };

    *[Symbol.iterator](){
        for(let i = 0; i < this.array; i++){
            yield this.array[i];
        }
    }
}