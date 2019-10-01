var ArrayLib = {
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