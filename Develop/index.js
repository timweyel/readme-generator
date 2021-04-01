const inquirer = require('inquirer');
// console.log(inquirer);
const fs = require('fs');
//const { writeFile } = require('./utils/getMarkdown');
const template = require('./utils/getMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username? (Required)",
    validate: gitHubUsername => {
      if (gitHubUsername) {
        return true;
      } else {
        console.log("Please enter your GitHub username");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: emailAddress => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Please enter your email address");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your application? (Required)",
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log("Please enter the name of your application");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your application."
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how your application is used."
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions."
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines."
  },
  {
    type: "input",
    name: "testing",
    message: "Please provide testing instructions."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select which license your application is covered by.",
    default: "MIT",
    choices: [
      "Apache License 2.0",
      "BSD 3-Clause", 
      "BSD 2-Clause", 
      "GPL", 
      "LGPL", 
      "MIT", 
      "Mozilla Public License 2.0", 
      "Common Development and Distribution License", 
      "Eclipse Public License version 2.0"
    ]
  }
];

function init() {
  inquirer
  .prompt(questions)
  .then(appData => {
    generateMarkdown(appData);
  });
};

function generateMarkdown(appData) {

  fs.writeFile("README.md", template.getMarkdown(appData), err => {
    if (err) {
      return console.log(err);
    } else {
      console.log('File created!');
    }
  });

};

// Function call to initialize app
init();
