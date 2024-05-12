class Shape {
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
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
                shapeTag = `<rect width="200" height="200" x="50" fill="${this.color}"/>`;
                textContent = `<text x="150" y="100" font-size="4em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
                break;
            case "circle":
                shapeTag = `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
                textContent = `<text x="150" y="100" font-size="4em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>`;
                break;
            case "triangle":
                shapeTag = `<polygon points="150,0 25,200 275,200" fill="${this.color}"/>`;
                textContent = `<text x="150" y="100" font-size="3em" fill="${this.textColor}" text-anchor="middle" dominant-baseline="hanging">${this.text}</text>`;
                break;
        }

        return svg + shapeTag + textContent + "</svg>";
    }
}

// -------------------------------------------------------

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

// -------------------------------------------------------

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