const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateTeam = require('./src/generate_team.js');

//Write your app here
team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another member of your team?",
            choices: ['Engineer', 'Intern', 'I dont want to add any other members.']
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('index.html', generateTeam(team))
        }
    });
};
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github?",
        },
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another member of your team?",
            choices: ['Engineer', 'Intern', 'I dont want to add any other members.']
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('index.html', generateTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('index.html', generateTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};
