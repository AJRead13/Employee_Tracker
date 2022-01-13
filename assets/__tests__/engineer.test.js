const Engineer = require('../lib/engineer.js');

test('employee object created', () =>{
  const engineer = new Engineer('Geralt', 'geralt@monsters.com', "Witcher")
  expect(engineer.name).toEqual("Geralt");
  expect(engineer.email).toEqual("geralt@monsters.com");
  expext(engineer.title).toEqual("Witcher");
})