class Shape {
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = text.slice(0, 3);
        this.textColor = textColor;
    }


    getSVG() {
        const svg = `<svg viewbox= "0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
        let shapeTag;

        switch (this.shape) {
            case "square":
                shapeTag = `<rect width="100" height="100" fill="${this.color}"/>`
                break;
            case "circle":
                shapeTag = `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`
                break;
            case "triangle":
                shapeTag = `<polygon points="50,0 0,100 100,100" fill="${this.color}"/>`
                break;
        }

        const textContent = `<text x="50" y="50" fill="${this.textColor}">${this.text}</text>`;

        return svg + shapeTag + textContent + "</svg>";
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super("square", color, text, textColor);
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super("triangle", color, text, textColor);
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super("circle", color, text, textColor);
    }
}

function createShapeObject(answers) {

    const { shape, color, text, textColor } = answers;

    switch (shape) {
        case "square":
            return new Square(color, text, textColor);
            break;
        case "circle":
            return new Circle(color, text, textColor);
            break;
        case "triangle":
            return new Triangle(color, text, textColor);
    }
}



module.exports = createShapeObject;