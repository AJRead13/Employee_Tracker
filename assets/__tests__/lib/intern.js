const Employee = require('./employee.js')

class Intern extends Employee{
    constructor(name, school, employeeNum) {
        this.name = name;
        this.school = school;
        this.employeeNum = employeeNum;
    }
}