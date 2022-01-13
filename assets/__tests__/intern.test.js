const Intern = require('../lib/employee.js');

test('employee object created', () =>{
  const intern = new Intern('Ciri', 'ciri@cintra.net', "Princess")
  expect(intern.name).toEqual("Ciri");
  expect(intern.email).toEqual("ciri@cintra.net");
  expext(intern.title).toEqual("Princess");
})