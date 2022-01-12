const Employee = require('../lib/employee.js');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("", () => {
      // Arrange
      const text = 'Pick up milk';

      // Act
      const obj = new Employee(text);

      // Assert
      expect(obj.text).toEqual(text);
    });

    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});