const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generated-template.js');

let everyEmployee = []
async function promptUser() {
    console.log("Job Profile Generator Started.")
    let myTeam = await inquirer.prompt({
        type: "input",
        name: "myTeam",
        message: "What is the name of your team? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                return false;
            }
        }
    })

    
}

promptUser()