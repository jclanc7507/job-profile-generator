 
module.exports = templateData => {
    const {main} = templateData;

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
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main class="container my-5">
            <div class="cards flex-row justify-space align-center py-3>

                <div class="employee-container">
                    <h2 class="text-secondary text-bold bg-dark py-2 px-3">${main.name}</h2>
                    <h2 class="text-secondary text-bold bg-dark py-2 px-3">&#265F ${main.role}</h2>
                </div>

            </div>

        </main>
        
    </body>
    </html>
    `;
};