var ArrayLib = {
    chain(array){
        return new ArrayLibChain(array);
    },
    take(array, n){
        var answer = [];
        for(var i = 0; i < n && i < array.length; i++){
            answer.push(array[i]);
        }

        return answer;
    },
    skip(array, n){
        var answer = [];
        if(n < 0){
            n = 0;
        }

        for(var i = n; i < array.length; i++){
            answer.push(array[i]);
        }

        return answer;
    },
    map(array, func){
        var answer = [];

        for(var i = 0; i < array.length; i++){
            answer.push(func(array[i]));
        }

        return answer;
    },
    reduce(array, func, initial = 0){
        var answer = initial;

        for(var i = 0; i < array.length; i++){
            answer = func(answer, array[i]);
        }

        return answer;
    },
    filter(array, func){
        var answer = [];

        for(var i = 0; i < array.length; i++){
            if(func(array[i])){
                answer.push(array[i]);
            }
        }

        return answer;
    },
    foreach(array, func){
        for(var i = 0; i < array.length; i++){
            func(array[i]);
        }
    }
}

function ArrayLibChain(array){
    this.array = array;

    this.take = function(n){
        var answer = [];

        for(var i = 0; i < n && i < this.array.length; i++){
            answer.push(this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    this.skip = function(n){
        var answer = [];
        if(n < 0){
            n = 0;
        }

        for(var i = n; i < this.array.length; i++){
            answer.push(this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    this.map = function(func){
        var answer = [];

        for(var i = 0; i < this.array.length; i++){
            answer.push(func(this.array[i]));
        }

        return new ArrayLibChain(answer);
    };

    this.reduce = function(func, initial = 0){
        var answer = initial;

        for(var i = 0; i < this.array.length; i++){
            answer = func(answer, this.array[i]);
        }

        return new ArrayLibChain(answer);
    };

    this.filter = function(func){
        var answer = [];

        for(var i = 0; i < this.array.length; i++){
            if(func(this.array[i])){
                answer.push(this.array[i]);
            }
        }

        return new ArrayLibChain(answer);
    };

    this.foreach = function(func){
        for(var i = 0; i < this.array.length; i++){
            func(this.array[i]);
        }
    };

    this.value = function(){
        return this.array;
    };
}