const index = require('./assets.index.js');
const employee = require('./employee.js');
const engineer = require('./engineer.js');
const manager = require('./manager.js');
const intern = require('./intern.js');

generateHTML()


`<!DOCTYPE html>
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
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">https://www.github.com/${data.gitHub}</a>
    <a href="#" class="card-link">${data.email}</a>
  </div>
</div>



</body>

</html>
`