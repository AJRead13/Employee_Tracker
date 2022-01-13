const Manager = require('../lib/manager.js');

test('employee object created', () =>{
  const manager = new Manager('Vesemir', 'vesemir@khaermorn.com', "Leader")
  expect(manager.name).toEqual("Vesemir");
  expect(manager.email).toEqual("vesemir@khaermorn.com");
  expext(manager.title).toEqual("Leader");
})