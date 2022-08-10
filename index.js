const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title of yor readme file:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description for you r readme:',
      name: 'description',
    },
  ])
  .then((answers) => {
    const filename = 'README2.md';
    const generatedData = `
# ${answers.title}\n

## Desciption:
${answers.description}\n

## Installation
Git clone this project open the 'index.js' in you terminal of choice run 'node index.js'
and answer all the questions when prompted, once completed you should see a 'Success'
print out on the command line, and your README.md file should be created in the same root
directory.
    `;
    fs.writeFile(filename, generatedData, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
