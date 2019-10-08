const Shape = require("./Shape.js");

class Square extends Shape{
    constructor(name, sideLength = 0){
        super(name);
        this.sideLength = sideLength;
    }
    
    perimeter(){
        return this.sideLength * 4;
    }

    area(){
        return this.sideLength ** 2;
    }
}

module.exports = Square;