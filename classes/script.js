'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(12, 12);
const long = new Rectangle(20, 100);



console.log(square.calcArea());
console.log(long.calcArea());

// vererbeung inheritence      extends

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // taking datas from Parent - Rectangle   bla bla

        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, bgColor: ${this.bgColor}, AREA: ${this.calcArea()}`)
    }
}

const superRec = new ColoredRectangleWithText(10, 10, 'text qs', 'red');


console.log(superRec.showMyProps(superRec));
console.log(superRec.calcArea());