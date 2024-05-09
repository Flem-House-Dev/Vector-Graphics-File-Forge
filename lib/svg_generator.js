// ------- Shape object classes -------

class shape {
    constructor(fill) {
        this.fill_color = fill;
    }
}

class rectangle extends shape {
    constructor(height, width) {
        super(fill);
        this.height = height;
        this.width = width;
    }
}

class circle extends shape {
    constructor(r) {
        super(fill);
        this.r = r;
    }
}

// ------- -------

function generateSvg(data) {
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
    <${data.shape} />

     </svg>
     `
}

module.exports = generateSvg;