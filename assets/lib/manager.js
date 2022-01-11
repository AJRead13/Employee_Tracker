const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNum){
     this.officeNum = officeNum;     
}
}

function renderManager() {
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
      <p class="card-text">${data.officeNum}</p>
      <a href="#" class="card-link"> https://www.github.com/${data.gitHub}</a>
      <a href="#" class="card-link">${data.email}</a>
    </div>
  `
}

renderManager();

module.exports =  Manager