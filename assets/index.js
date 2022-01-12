const genHTML = require('./lib/genHTML.js');
const inquirer = require("inquirer");
const Employee =require("./lib/employee.js");
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
    name: "jobs",
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



function questionsManager(){
    inquirer
    .prompt(manQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.email, response.title, response.officeNum);
        team.push(manager);
    })
}
function questionEngineer(){
    inquirer
    .prompt(engiQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.email, response.title, response.gitHub);
        team.push(engineer);
    })
}
function questionIntern(){
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.email, response.title, response.school);
        team.push(intern);
    })
}

function roleQuestion(){
    inquirer
    .prompt(titleQuestions)
    .then(response) 
    if(response.choices === "Engineer")
    questionEngineer();
    if(response.choices === "Intern")
    questionIntern();
    if(response.choices === "Finish")
    writeToFile();    
}

function buildTeam(){
    questionsManager()
    .then(roleQuestion());
    return response;
}

function init() {
    buildTeam()
      .then((response) => {
        const html = genHTML(response);
        const fileName = `Employee.html`;
        writeToFile(fileName, html)
      })
   }
  

//  function writeToFile(fileName, data) {
  
//     fs.writeFile(fileName, data,
//       (err) => err ? console.log(err) : console.log(data));
//  }
  
  init();

module.exports