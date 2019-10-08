const Rectangle = require("./Rectangle.js");
const Square = require("./Square.js");

class ShapeStore{
    constructor(shapes = []){
        this.shapes = shapes;
    }

    totalPerimeterOfRectangles(){
        let result = 0;

        for(let i = 0; i < this.shapes.length; i++){
            if(this.shapes[i] instanceof Rectangle){
                result += this.shapes[i].perimeter();
            }
        }

        return result;
    }

    totalAreaOfSquares(){
        let result = 0;

        for(let i = 0; i < this.shapes.length; i++){
            if(this.shapes[i] instanceof Square){
                result += this.shapes[i].area();
            }
        }

        return result;
    }
}

module.exports = ShapeStore;