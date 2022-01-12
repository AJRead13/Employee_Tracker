const Intern = require('../lib/employee.js');

describe('Intern', () => {
  describe('Initialization', () => {
    // Positive test
    it("", () => {
      // Arrange
      const text = 'Pick up milk';

      // Act
      const obj = new Intern(text);

      // Assert
      expect(obj.text).toEqual(text);
    });

    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Intern();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});