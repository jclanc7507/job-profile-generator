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
                console.log("Please enter a valid team name.")
                return false;
            }
        }
    })

    
}

const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is this Engineer's name? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is this Engineer's employee ID#? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid ID number.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is this Enigneer's email address? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's GitHub username? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid GitHub username.");
                return false;
            }
        }
    }
]

promptUser()