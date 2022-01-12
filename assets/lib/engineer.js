const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, email, title, gitHub) {
        super(name, email, title)
        this.gitHub = gitHub;        
    }
    getRole(){
        return "Engineer";
    }
    getGitHub(){
        return this.gitHub;
    }
}






module.exports = Engineer

