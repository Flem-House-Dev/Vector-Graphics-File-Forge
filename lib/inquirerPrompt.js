const inquirer = require('inquirer');
const questions = require('./questions');
const createShapeObject = require('./shapes');
const fs = require('fs');

function inquirerPrompt() {
    return inquirer
      .prompt(questions)
      .then((answers) => {

        const shapeObject = createShapeObject(answers);
        const svgString = shapeObject.getSVG();
  
        fs.writeFile('./examples/logo.svg', svgString, err => {
          if (err) {
            console.log('-----------------------');
            console.log(err);
            console.log("File did not save.");
          } else {
            console.log('-----------------------');
            console.log('Generated logo.svg');
          }
        });
  
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log("Something else went wrong");
        }
      }
      );
  }

  module.exports = inquirerPrompt;