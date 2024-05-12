const inquirer = require('inquirer');
const questions = require('./lib/questions');
const createShapeObject = require('./lib/shapes');
const fs = require('fs');

console.log("Welcome to the Vector Graphics File Forge!");
console.log("Please answer the following questions to generate your vector graphic file");
console.log("-------------------------------");

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("prompt answers----------");
    console.log(answers);
    console.log("shape object----------");
    console.log()

    
      const shapeObject = createShapeObject(answers);
      const svgString = shapeObject.getSVG();
    
      // fs.writeFile("./examples/example_svg.svg", svgString, (err) => {
      //   if (err) throw err;
      //   console.log("SVG file created successfully!");
      // })
  

    fs.writeFile('./examples/logo.svg', svgString, err => {
      if (err) {
        console.log('-----------------------');
        console.log(err);
        console.log("Didn't happen");
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

