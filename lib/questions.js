const isValidSVGColor = require("./isValidSVGColor");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters of text.',
        validate: (answer) => {
            if (answer === "" || answer.length > 3) {
                return globalErrMsgs.textErr;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'For the text color, enter a color name or hex code.',
        validate: (answer) => {
            if (!isValidSVGColor(answer)) {
                return globalErrMsgs.colorErr;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ],
        default: 'circle'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'For the shape color, enter a color name or hex code.',
        validate: (answer) => {
            if (!isValidSVGColor(answer)) {
                return globalErrMsgs.colorErr;
              } else {
                return true;
            }
        }
    },
]

// --------------------------------

const globalErrMsgs = {
    textErr: 'Please enter a valid entry. Entry must be between 1 and 3 characters in length.',
    colorErr: 'Please enter a valid color name or hex code. If entering a hex code, be sure to enter the "#".'
}

module.exports = { questions, globalErrMsgs };
