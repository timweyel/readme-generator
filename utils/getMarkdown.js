

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (appData.license.length > 0) {

//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

let svg;
console.log(appData);
module.exports.makeBadge = (appData) => {

const format = {
  label: `${appData.license}`,
  message: 'license',
  color: 'brightgreen'
};

svg = makeBadge(format)
console.log('1', svg);

try {
  makeBadge({})
  } catch (e) {
    console.log(e)
  };
};

console.log('2', svg);

module.exports.getMarkdown = (appData) => {

return `
![badge](https://img.shields.io/badge/license-${svg}-brightgreen)

# ${appData.title}
${appData.description}

### Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution](#contribution)
5. [Testing](#testing)
6. [Questions](#questions)

## Usage
${appData.usage}

## License
Covered by the ${appData.license}.

## Installation
${appData.installation}

## Contribution
${appData.contribution}

## Testing
${appData.testing}

## Questions
If you have any questions, please feel free to reach out to the contact below:
Contact: 
[${appData.username}](https://github.com/${appData.username}) at their [email](mailto:%20${appData.email}) </br>
`  

};

