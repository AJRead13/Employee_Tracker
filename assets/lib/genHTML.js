const index = require('../index.js');
const employee = require('./employee.js');
const engineer = require('./engineer.js');
const manager = require('./manager.js');
const intern = require('./intern.js');

const teamCards = []

function renderCard(data) {
  data.map(employee => {
    if (employee.getRole() === "Engineer") {
      const engineerTab = renderEngineer(data)
      teamCards.push(engineerTab);
      return renderEngineer(data);
    }
    if (employee.getRole() === "Manager") {
      const managerTab = renderManager(data);
      teamCards.push(managerTab);
      return renderManager(data);
    }
    if (employee.getRole() === "Intern") {
      const internTab = renderIntern(data)
      teamCards.push(internTab);
      return renderIntern(data);
    }
  }
  )
}
// renderCard();

function renderEngineer(data) {
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

function renderIntern(data) {
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">${data.school}</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>`
}

function renderManager(data) {
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">${data.officeNum}</p>
    <a href="#" class="card-link">${data.email}</a>
  </div>
`
}

function generateHTML(data) {
  renderCard();
  const engineerSection = renderEngineer(data)
  const managerSection = renderManager(data)
  const internSection = renderIntern(data)
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link src="./assets/styles/style.css" rel="stylesheet">


    <title>Employee Tracker</title>
</head>
<body>
    <header>
      <nav class="navbar">
        <span class="navbar -brand mb-0 h1 w-100 text-center" id="navbar-text">Your Team Profile</span>
      </nav>
    </header>
  <main>
    <div class="container">
      <div class="row justify-content-center">
      ${managerSection}
      ${engineerSection}
      ${internSection}
      </div>
    </div>
  </main>


</body>

</html>
`
}

module.exports = generateHTML;
