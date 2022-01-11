const index = require('./assets.index.js.js');
const employee = require('./employee.js');
const engineer = require('./engineer.js');
const manager = require('./manager.js');
const intern = require('./intern.js');


function renderCard(data) {
  data.map(employee => {
    if (employee.role() === "Engineer") {
      return renderEngineer(data);
    }
    if (employee.posotion() === "Manager") {
      return renderManager(data);
    }
    if (employee.position() === "Intern") {
      return renderIntern(data);
    }
  }
}

 function generateHTML(data){
  const engineerSection = renderEngineer(data)
  const managerSection = renderManager(data)
  const internSection = renderIntern(data)
  return  `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link src="assets/styles/style.css" rel="stylesheet">


    <title>Employee Tracker</title>
</head>
<body>
    <header> Employee Tracker</header>


<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">${data.officeNum}</p>
    <a href="#" class="card-link"> https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>



</body>

</html>
`
}

module.exports = generateHTML;