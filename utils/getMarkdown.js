

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
![badge](https://img.shields.io/badge/license-${appData.license}-brightgreen)

# ${appData.title}
${appData.description}

### Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Usage
${appData.usage}

## License
Covered by the ${appData.license} license.

## Installation
${appData.installation}

## Contribution
${appData.contribution}

## Testing
${appData.testing}

## Questions
If you have any questions, please feel free to reach out to the contact below:
Contact: 
${appData.username}
${appData.email}
`  
};