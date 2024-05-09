// class promptQuestion {
//     constructor(type, name, message) {
//         this.type = type;
//         this.name = name;
//         this.message = message;
//     }

//     validate() {
//         if (answer === '') {
//             return 'Please enter a valid entry';
//             } else {
//                 return true;
//             }
//         }
// }

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters of text.',
        validate: (answer) => {
            if (answer === '') {
                return 'Please enter a valid entry';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'For the text color, enter a color name or hex code.',
        validate: (answer) => {
            if (answer === '') {
                return 'Please enter a valid entry';
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
        name: 'shape-color',
        message: 'For the shape color, enter a color name or hex code.',
        validate: (answer) => {
            if (answer === '') {
                return 'Please enter a valid entry';
            } else {
                return true;
            }
        }
    },
]

module.exports = questions;