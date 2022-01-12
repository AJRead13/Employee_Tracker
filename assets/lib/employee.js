class Employee {
    constructor(name, email, title) {
        this.name = name;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return "Employee"
    };
    getTitle() {
        return this.title;
    };
}



module.exports = Employee