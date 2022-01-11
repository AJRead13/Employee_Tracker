const Employee = require('./employee.js')

class Intern extends Employee{
    constructor(school, gitHub) {
        this.school = school;
        this.gitHub = gitHub;
    }
}

function renderIntern() {
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
      <a href="#" class="card-link">${data.email}</a>
    </div>
  </div>`
}

renderIntern();

module.exports = Intern