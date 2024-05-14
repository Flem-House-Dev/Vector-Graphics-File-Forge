class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text.slice(0, 3);
        this.textColor = textColor;
    }

    getSVG() {
        const svg = `<svg viewbox= "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="300" height="200" stroke="black" fill="transparent"/>`;
        let shapeTag;
        let textContent;

        switch (this.shape) {
            case "square":
                shapeTag = `<rect width="200" height="200" x="50" fill="${this.shapeColor}"/>`;
                textContent = `<text x="150" y="100" font-size="4em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
                break;
            case "circle":
                shapeTag = `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
                textContent = `<text x="150" y="100" font-size="4em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
                break;
            case "triangle":
                shapeTag = `<polygon points="150,0 25,200 275,200" fill="${this.shapeColor}"/>`;
                textContent = `<text x="150" y="100" font-size="3em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="hanging">${this.text}</text>`;
                break;
        }

        return svg + shapeTag + textContent + "</svg>";
    }
}

// -------------------------------------------------------

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super("square", shapeColor, text, textColor);
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super("triangle", shapeColor, text, textColor);
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super("circle", shapeColor, text, textColor);
    }
}

// -------------------------------------------------------

function createShapeObject(answers) {

    const { shape, shapeColor, text, textColor } = answers;

    switch (shape) {
        case "square":
            return new Square(shapeColor, text, textColor);
            break;
        case "circle":
            return new Circle(shapeColor, text, textColor);
            break;
        case "triangle":
            return new Triangle(shapeColor, text, textColor);
    }
}

module.exports = createShapeObject;