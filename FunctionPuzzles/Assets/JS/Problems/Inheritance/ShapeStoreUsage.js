const Rectangle = require("./Rectangle.js");
const Square = require("./Square.js");
const ShapeStore = require("./ShapeStore.js");

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