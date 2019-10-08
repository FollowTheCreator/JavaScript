const Shape = require("./Shape.js");

class Rectangle extends Shape{
    constructor(name, width = 0, height = 0){
        super(name);
        this.width = width;
        this.height = height;
    }

    perimeter(){
        return this.width * 2 + this.height * 2;
    }

    area(){
        return this.width * this.height;
    }
}

module.exports = Rectangle;