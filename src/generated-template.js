 
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
                <title>${myTeam}</title>
            </head>

        <body>
           

            <main class="container">
            
                <div class="cards">

                    <div class="employees">
                        <h2 class="name">${name}</h2>
                        <h2 class="role">✎ ${role}</h2>
                    </div>
                    <div class="about">
                        <p class="id">ID# ${id}</p>
                        <p class="email">Email: ${email}</p>
                        
                    </div>
                    
                </div>

            </main>
            
        </body>
        </html>
    `;
};