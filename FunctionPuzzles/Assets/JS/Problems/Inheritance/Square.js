const Shape = require("./Shape.js");

class Square extends Shape{
    constructor(name, sideLength){
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