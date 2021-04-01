

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports.getMarkdown = (appData) => {
return `
# ${appData.title}
${appData.description}

### Contents
1. [Usage](#usage)
2. [Installation](#installation)
3. [Contributors & How to Contribute](#contribution)
4. [Tests](#tests)
5. [Licenses](#licenses)
6. [Questions](#questions)

## Usage
${appData.usage}

## Installation
${appData.installation}

## Contribution
${appData.contribution}

## Testing
${appData.testing}

## Questions
Contact: 
`  
};