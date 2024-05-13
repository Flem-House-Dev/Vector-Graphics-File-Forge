const inquirer = require('inquirer');
const {questions, globalErrMsgs} = require("../lib/questions.js");

describe('shapes', () => {
    describe('text', () => {
        const validateText = questions[0].validate;
        const textErr = 'Please enter a valid entry. Entry must be between 1 and 3 characters in length.';
        it('should allow a string that is between 1 and 3 characters', () => {
            expect(validateText('abc')).toBe(true);
        }) 
        it('should not allow a string that is more than 3 characters', () => {
            expect(validateText('abcd')).toBe(globalErrMsgs.textErr);
        })
        it('should not allow an empty string', () => {
            expect(validateText('')).toBe(globalErrMsgs.textErr);
        })
    })

    describe('textColor', () => {
        const validateColor = questions[1].validate;
        // it should allow color names and hexcodes
        // it should throw an error if input is an empty string
        // it should throw an error if input is not a valid color name or hex code
        it('should allow a valid color name to pass', () => {
            expect(validateColor('blue')).toBe(true);
        })
        it('should not allow an invalid color to pass', () => {
            expect(validateColor('corndog')).toBe(globalErrMsgs.colorErr);
        })
    })

    // describe('shapeColor', () => {
    //     // it should allow color names and hexcodes
    //     // it should throw an error if input is an empty string
    //     // it should throw an error if input is not a valid color name or hex code
    // })

})