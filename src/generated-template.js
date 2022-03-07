// created Employee card by default, then other roles upon selection  

const createPage = function (cards, myTeam) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Portfolio Demo</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
                <link rel="stylesheet" href="./style.css">
                <title>${myTeam}</title>
            </head>

        <body class="container">
            <header>
                <h1>${myTeam}</h1>
            </header>

            <main>
                ${cards}

            </main>
            
        </body>
        </html>
    `;
};

const createCards = function (employee) {
    return `
        <card class="employee-card">
            <div>
                <h4 class="employee-name">${employee.getName()}</h4>
                <h4 class="employee-role">${employee.getRole()}</h4>
            </div>
            <div class="employee-info">
                <h5>ID#${employee.getId()}</h5>
                <h5>Email:${employee.getEmail()}</h5>
                ${generateRoleCard(employee)}
            </div>
        </card>        
        `
}

const createRoleCard = function (employee) {
    switch (employee.getRole()) {
        case "Manager":
            return `Office Number: ${employee.getOfficeNumber()}`
            break;

        case "Engineer":
            return `GitHub: <a href="https://www.github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
            break;

        case "Intern":
            return `School: ${employee.getSchool()}`
            break;
        
        default: 
            return `Role: Employee`
            break;
    }
}

module.exports = { createCards, createRoleCard}