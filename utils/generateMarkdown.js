// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![license](https://img.shields.io/badge/license-${license}-yellowgreen)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirm) {
  if (confirm) {
    return "* [License](#license)";
  } else {
    return "";
  }
}

function renderLicenseSectionTwo(confirm) {
  if (confirm) {
    return "## License";
  } else {
    return "";
  }
}

function renderLicenseSectionThree(license) {
  if (license) {
    return `This project is licensed by ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

====================
## Table of Contents
====================
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contributions](#contibutions)
* [Questions](#questions)
${renderLicenseSection(data.confirmLicense)}

## Installation
${data.installation}

## Usage
${data.usage}

## Test
${data.test}

## Contributions
${data.contributors}




## Questions
If you have any questions, feel free to email me and checkout my GitHub page below!

Email: ${data.email}

GitHub: https://github.com/${data.username}

${renderLicenseSectionTwo(data.confirmLicense)}
${renderLicenseSectionThree(data.license)}
${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license)}`;
}

module.exports = generateMarkdown;
