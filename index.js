const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generated-template.js');

const promptUser = () => {
    return inquirer.prompt([ 
        {
            type: 'list',
            name: 'role',
            message: "Which role is this profile for?",
            choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
        },
        {
            type: 'input', 
            name: 'name', 
            message: "What is your employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID#?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee email address?"
        },
    ]);
};


promptUser()
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
});