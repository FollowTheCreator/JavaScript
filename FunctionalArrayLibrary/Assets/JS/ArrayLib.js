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

        this.foreach(
            array, 
            function(item){
                answer.push(func(item));
            }
        );

        return answer;
    },
    reduce(array, func, initial = 0){
        var answer = initial;

        this.foreach(
            array, 
            function(item){
                answer = func(answer, item);
            }
        );

        return answer;
    },
    filter(array, func){
        var answer = [];

        this.foreach(
            array, 
            function(item){
                if(func(item)){
                    answer.push(item);
                }
            }
        );

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

        this.foreach(
            function(item){
                answer.push(func(item));
            }
        );

        return new ArrayLibChain(answer);
    };

    this.reduce = function(func, initial = 0){
        var answer = initial;

        this.foreach(
            function(item){
                answer = func(answer, item);
            }
        );

        return answer;
    };

    this.filter = function(func){
        var answer = [];

        this.foreach(
            function(item){
                if(func(item)){
                    answer.push(item);
                }
            }
        );

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