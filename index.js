// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: `input`,
            message: `Project title:`,
            name: `title`
        },
        {
            type: `input`,
            message: `Description of project:`,
            name: `description`
        },
        {
            type: `input`,
            message: `Installation instructions:`,
            name: `install`
        },
        {
            type: `input`,
            message: `Usage information:`,
            name: `usage`
        },
        {
            type: `input`,
            message: `Contribution guidelines:`,
            name: `contribute`
        },
        {
            type: `input`,
            message: `Test instructions:`,
            name: `test`
        },
        {
            type: `list`,
            message: `What license are you using?`,
            name: `license`,
            choices: [`MIT`, `ISC`, `Apache 2.0`]
        },
        {
            type: `input`,
            message: `What is your Github username?`,
            name: `github`
        },
        {
            type: `input`,
            message: `What is your email?`,
            name: `email`
        },
        {
            type: `input`,
            message: `Is there anyone that needs to be credited for this project?`,
            name: `credits`
        }

    ])
    .then((response) => {
        console.log(response);
        let badge = ``;
        if (response.license === `MIT`) {
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (response.license === `ISC`) {
            badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
        } else if (response.license === `Apache 2.0`) {
            badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }

        const format = `
# ${response.title}

${badge}

## Description
        
${response.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)
        
## Installation
        
${response.install}
        
## Usage
        
${response.usage}

## Contribution Guidelines

${response.contribute}

## Test Instructions

${response.test}

## Questions

Please direct all questions to my github or email.

Github: [${response.github}](https://github.com/${response.github})

Email: ${response.email}
        
## Credits
    
${response.credits}
        
## License
        
The repo is covered under the standard ${response.license} license. See LICENSE in repo for more info.`

        writeToFile(`./output/README.md`, format);
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(`Success!`));
}

