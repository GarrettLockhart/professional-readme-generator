const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter the title of yor readme file',
    name: 'title',
  },
]);
