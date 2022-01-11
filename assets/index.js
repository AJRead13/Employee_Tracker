const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const manager = require('./lib/manager.js');
const intern = require('./lib/intern.js');
const genHTML = require('./lib/genHTML.js');


const manQuestions = [{
    type: "input",
    message: "Please enter Manager's Name.",
    name: "name",
},
{
    type: "input",
    message: "Please enter Manager's ID number.",
    name: "IDnumber",    
},
{
    type: "input",
    message: "Enter Manager's Email",
    name: "email",
},
{
    type: "input",
    message: "Please enter office Number.",
    name: "officeNum",
},
]
const positionQuestions = [{
    type: "list",
    message: "Add Employees.",
    name: "jobs",
    choices: ["Engineer", "Intern", "Finish"],
}]
function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data,
      (err) => err ? console.log(err) : console.log(data));
 }

function init() {
    inquirer
      .prompt(questions)
      .then.prompt(positionQuestions)
      .then((response) => {
        const markdown = genHTML(response);
        const fileName = `Employee.html`;
        writeToFile(fileName, markdown)
      })
   }
  
  
  init();

module.exports