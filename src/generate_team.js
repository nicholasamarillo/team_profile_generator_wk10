const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
    //   const teamArray = team[i];
      switch(this.role) {
        case 'Manager':
          const manager = new Manager(this.id, this.name, this.email, this.officeNumber);
          cards.push(generateManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(this.id, this.name, this.email, this.github);
          cards.push(generateEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(this.id, this.name, this.email, this.school);
          cards.push(generateInternCard(intern));
          break;
      }
    }
    return cards.join(``)
};
  
  

function generateTeam(team) {
    console.log(team)
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid bg-warning">
    <div class="container">
      <h1 class="display-4 text-center">My Team</h1>
    </div>
  </div>
  <div class="d-flex flex-row flex-wrap justify-content-center">
  <script>${generateCards(team)}</script>
  </div>
  </body>
  </html>
      `
  }

  module.exports = generateTeam;