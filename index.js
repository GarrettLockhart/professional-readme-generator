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
      filter(val) {
        return val.toLowerCase();
      },
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
    {
      type: 'input',
      message: 'Please enter the test instructions for your project:',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'github',
      filter(val) {
        return val.toLowerCase();
      },
    },
    {
      type: 'input',
      message: 'Please enter your email so people can reach you:',
      name: 'email',
      default: () => {},
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (valid) {
          return true;
        } else {
          console.log('\nPlease enter a valid email');
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    const filename = './generated/README.md';
    const userSelection = answers.license;
    const contributions = answers.contribute;
    const generatedData = `<br />
<br />
<br />

<div id="top"></div>

${licenseBadge.getBadge(userSelection)}

<h1 align="center" style="font-weight: bold" >${answers.title}</h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

<br />
<br />

---

## Description:
${answers.description}

<br />
<br />

---

## Installation:
${answers.installation}

<br />
<br />

---

## Usage:
\`\`\`md\n${answers.usage}\n\`\`\`

<br />
<br />

---

## License:
Released under license ${userSelection}

<br />
<br />

---

## Contributing:
${contributeSelect.getContributions(contributions)}

<br />
<br />

---

## Tests:
${answers.test}

<br />
<br />

---

## Questions:
Please reach out through github at <a href="https://github.com/${
      answers.github
    }" target=_blank>${answers.github}</a> or you can email me at ${
      answers.email
    }

<br />
<br />
    
<p align="right">(<a href="#top">back to top</a>)</p>


    `;
    fs.writeFile(filename, generatedData, (err) =>
      err
        ? console.log(err)
        : console.log('Success, your file is in the "generated" folder!')
    );
  });
