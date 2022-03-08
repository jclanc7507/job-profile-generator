
const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const { generatePage, generateCard } = require('./src/generated-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');

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

const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "What is this Intern's name? (REQUIRED)",
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
        message: "What is this Intern's employee ID#? (REQUIRED)",
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
        message: "What is this Intern's email address? (REQUIRED)",
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
        name: "school",
        message: "What is this Intern's school name? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        }
    }
]



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

    let jobManager = await inquirer.prompt([
        {
            type: "input",
        name: "name",
        message: "What is this Manager's name? (REQUIRED)",
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
        message: "What is this Manager's employee ID#? (REQUIRED)",
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
        message: "What is this Manager's email address? (REQUIRED)",
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
        name: "officeNumber",
        message: "What is this Manager's office number? (REQUIRED)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        }
    }
        
    ])

    jobManager = new Manager(jobManager.name, jobManager.id, jobManager.email, jobManager.officeNumber);

    everyEmployee.push(jobManager);

    let roleLoop = true;
    while (roleLoop) {
        let askRole = await inquirer.prompt(
            {
                type: "list",
                name: "role",
                message: "What type of team member would you like to add? (REQUIRED)",
                choices: ["Engineer", "Intern", "Exit"]
            }
        )
        console.log(askRole.role)

        switch (askRole.role) {
            case "Engineer":
                let engineer = await inquirer.prompt(engineerPrompts)
                everyEmployee.push(new engineer(engineer.name, engineer.id, engineer.email, engineer.github))
                break;

            case "Intern":
                let intern = await inquirer.prompt(internPrompts)
                everyEmployee.push(new intern(intern.name, intern.id, intern.email, intern.school))
                break;

            default:
                loop = false;
                break;
        }
    }

let cardHTML = []

everyEmployee.forEach(employee => {
    cardHTML.push(generateCard(employee))
})

let pageHTML = createPage(cardHTML.join(""), myTeam.myTeam)
writeFile(pageHTML)

};

promptUser();