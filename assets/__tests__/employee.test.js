const Employee = require('../lib/employee.js');

test('employee object created', () =>{
  const employee = new Employee('Jaskier', 'jaskierthebard@traveller.com', "Bard")
  expect(employee.name).toEqual("Jaskier");
  expect(employee.email).toEqual("jaskierthebard@traveller.com");
  expext(employee.title).toEqual("Bard");
})