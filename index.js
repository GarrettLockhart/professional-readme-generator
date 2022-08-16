const fs = require('fs');
const inquirer = require('inquirer');
const licenseBadge = require('./utils/licenseBadge.js');
const contributeSelect = require('./utils/contributions.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title for your readme file:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description for your readme:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter installation instructions for your readme:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please enter the usage commands for your program:',
      choices: [],
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Please select the license for your project:',
      name: 'license',
      choices: ['MIT', 'GNU GPL v3', 'Creative Commons'],
    },
    {
      type: 'list',
      message: 'Please select the contributing guidelines for your project:',
      name: 'contribute',
      choices: ['Detailed', 'Simple'],
    },
  ])
  .then((answers) => {
    const filename = './generated/README2.md';
    const userSelection = answers.license;
    const contributions = answers.contribute;
    const generatedData = `\n\n\n
${licenseBadge.getBadge(userSelection)}

<h1 align="center">${answers.title}\n</h1>

<hr>

## Description:
${answers.description}\n

<hr>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<hr>

## Installation:
${answers.installation}

<hr>

## Usage:
\`\`\`md\n${answers.usage}\n\`\`\`

<hr>

## License:
Released under license ${userSelection}

<hr>

## Contributing:
${contributeSelect.getContributions(contributions)}

<hr>

    `;
    fs.writeFile(filename, generatedData, (err) =>
      err
        ? console.log(err)
        : console.log('Success, your file is in the "generated" folder!')
    );
  });
