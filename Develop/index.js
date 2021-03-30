const inquirer = require('inquirer');
// console.log(inquirer);
const fs = require('fs');
const generateMarkdown = require('./src/page-template.js');
//const generateMarkdown = require('./utils/generateMarkdown');

//let answers = process.argv.slice(2, process.argv.length);

//console.log(answers);

// const pageHTML = generateMarkdown(userName, githubName);

// const [userName, githubName] = answers;

//console.log(userName, githubName)

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

const promptUser = () => {
  return inquirer.prompt([
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
    }
  ]);
};

const promptApp = appData => {
  console.log(`
================
Add an App
================
`);
  if (!appData.answers) {
    appData.answers = [];
  }
  return inquirer.prompt([
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
  ])
  .then(readmeData => {
    appData.answers.push(readmeData);
    return appData;
  })
};

promptUser()
  //.then(answers => console.log(answers))
  .then(promptApp)
  .then(appData => console.log(appData));

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('README complete! Check out index.html to see the output!');
// });

// const appData = (answers) => {
//   console.log(answers);
// };

// appData(answers);

// promptUser();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
