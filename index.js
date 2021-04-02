//global constants for dependencies


const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./utils/getMarkdown');

//array of questions to prompt user
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
    type: "list",
    name: "license",
    message: "Select which license your application is covered by.",
    default: "MIT",
    choices: [
      "Apache",
      "GNU",
      "Boost",
      "Creative_Common_Zero", 
      "Eclipse",
      "GNU",
      "MIT", 
      "Mozilla", 
    ]
  }
];



//function to init app
function init() {
  inquirer
  .prompt(questions)
  .then(appData => {
    console.log(appData);
    generateMarkdown(appData);
  });
};

//function to pass data to getMarkdown so that README file can be written to
function generateMarkdown(appData) {

  fs.writeFile("./dist/README.md", template.getMarkdown(appData), err => {
    if (err) {
      return console.log(err);
    } else {
      console.log('File created!');
    }
  });

};

// Function call to initialize app
init();
