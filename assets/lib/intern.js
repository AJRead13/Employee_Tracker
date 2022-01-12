const Employee = require('./employee.js')

class Intern extends Employee{
    constructor(name, email, title, school) {
        super(name, email, title)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}





module.exports = Intern