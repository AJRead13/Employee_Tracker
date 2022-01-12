const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, email, title, officeNum) {
        super(name, email, title)
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
}





module.exports = Manager