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

const shapes = [
    new Rectangle("1rectangle", 1, 2),
    new Square("1square", 3),
    new Square("2square", 5),
    new Rectangle("2rectangle", 2, 3),
    new Square("3square", 1),
    new Rectangle("3rectangle", 5, 10),
    new Square("4square", 2),
    new Rectangle("4rectangle", 2, 1),
];

const shapeStore = new ShapeStore(shapes);

console.log(shapeStore.totalPerimeterOfRectangles());
console.log(shapeStore.totalAreaOfSquares());