const inquirer = require('inquirer');
const questions = require('./lib/questions');
const generateSvg = require('./lib/svg_generator');
const fs = require('fs');

console.log("Welcome to the Vector Graphics File Forge!");
console.log("Please answer the following questions to generate your vector graphic file");
console.log("-------------------------------");

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile('./examples/example_svg.svg', generateSvg(answers), err => {
      if (err) {
        console.log('-----------------------');
        console.log(err);
    } else {
        console.log('-----------------------');
        console.log('File has been successfully written');
    }
    });

    // console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });