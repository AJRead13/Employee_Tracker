const genHTML = require('./lib/genHTML.js');
const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/employee.js");
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const team = [];


const manQuestions = [{
    type: "input",
    message: "Please enter Manager's Name.",
    name: "name",
},
{
    type: "input",
    message: "Enter Manager's Email",
    name: "email",
},
{
    type: "input",
    message: "What is their title?",
    name: "title",
},
{
    type: "input",
    message: "Please enter office Number.",
    name: "officeNum",
},
]
const titleQuestions = [{
    type: "list",
    message: "Add Employees.",
    name: "choices",
    choices: ["Engineer", "Intern", "Finish"],
}]

const engiQuestions = [{
    type: "input",
    message: "What is the employee name?",
    name: "name",
},
{
    type: "input",
    message: "What is the employee email?",
    name: "email",
},
{
    type: "input",
    message: "What is their GitHub user name?",
    name: "gitHub"
}]

const internQuestions = [{
    type: "input",
    message: "What school are they attending?",
    name: "school",
},
{
    type: "input",
    message: "What is the intern's name?",
    name: "name",
},
{
    type: "input",
    message: "What is the Intern's email?",
    name: "email",
}
]

function questionsManager() {
    inquirer
        .prompt(manQuestions)
        .then((response) => {
            const manager = new Manager(response.name, response.email, response.title, response.officeNum);
            team.push(manager);
            console.log(team);
            roleQuestion();
        })
        .catch(error => console.log(error))
}
function questionEngineer() {
    inquirer
        .prompt(engiQuestions)
        .then((response) => {
            const engineer = new Engineer(response.name, response.email, response.title, response.gitHub);
            team.push(engineer);
            console.log(team);
            roleQuestion();
        })
}
function questionIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(response.name, response.email, response.title, response.school);
            team.push(intern);
            console.log(team);
            roleQuestion();
        })
}

function roleQuestion() {
    inquirer
        .prompt(titleQuestions)
        .then(response => {
            if (response.choices === "Engineer")
                questionEngineer();
            if (response.choices === "Intern")
                questionIntern();
            if (response.choices === "Finish"){
            const html = genHTML(team);
                const fileName = `Employee.html`;
                writeToFile(fileName, html);
            }
        })

}

function buildTeam() {
    questionsManager();
    
}

function init() {
    buildTeam()
        //       {
        //     const html = genHTML(response);
        //     const fileName = `Employee.html`;
        //     writeToFile(fileName, html)
        // })
}


 function writeToFile(fileName, data) {

    fs.writeFile(fileName, data,
      (err) => err ? console.log(err) : console.log(data));
 }

init();

module.exports